#!/bin/sh
# Build OpenTTD 15.3 for the web (wasm) with Simplified Chinese support.
#
# Inputs (prepare these before you run the script):
#   external/OpenTTD               OpenTTD 15.3 source with our patches applied
#                                  (see patches/ and build.md)
#   external/openttd-assets/unpacked
#     opengfx-8.0/                 free base graphics (GPLv2)
#     opensfx-1.0.3/               free base sounds (optional)
#     fusion-proportional/fusion-pixel-12px-proportional-zh_hans.ttf
#                                  CJK pixel font (OFL-1.1)
# Output:
#   apps/desktop/apps/openttd/     openttd.js / openttd.wasm / openttd.data
#
# Toolchain: cmake, ninja, emscripten (emcc). See build.md for versions.
set -e

ROOT="$(cd "$(dirname "$0")/../../../../.." && pwd)"
SRC="${OPENTTD_SOURCE_DIR:-$ROOT/external/OpenTTD}"
ASSETS="${OPENTTD_ASSETS_DIR:-$ROOT/external/openttd-assets/unpacked}"
OUT="$ROOT/apps/desktop/apps/openttd"

test -f "$SRC/CMakeLists.txt" || { echo "OpenTTD source not found at $SRC"; exit 1; }
test -f "$SRC/os/emscripten/cmake/FindFreetype.cmake" || { echo "FreeType patch not applied"; exit 1; }
test -f "$ASSETS/fusion-proportional/fusion-pixel-12px-proportional-zh_hans.ttf" || { echo "CJK font not staged"; exit 1; }
command -v emcc >/dev/null || { echo "emcc not on PATH"; exit 1; }

# Remap absolute build paths out of the published .wasm / .js so machine-local
# directories (source, build trees, assets, Emscripten SDK) never appear in
# the binaries. Host tools are not embedded; build-host is mapped only in case
# a path leaks through generated artefacts. Escape spaces so CMake's
# CMAKE_C_FLAGS / CMAKE_CXX_FLAGS splitting keeps each map as one argument.
emsdk_root="$(cd "$(dirname "$(command -v emcc)")/../.." && pwd)"
cmake_escape() {
    printf '%s' "$1" | sed 's/ /\\ /g'
}
file_prefix_maps="-ffile-prefix-map=$(cmake_escape "$SRC")=/src/openttd"
file_prefix_maps="$file_prefix_maps -ffile-prefix-map=$(cmake_escape "$SRC/build-wasm")=/build"
file_prefix_maps="$file_prefix_maps -ffile-prefix-map=$(cmake_escape "$SRC/build-host")=/build-host"
file_prefix_maps="$file_prefix_maps -ffile-prefix-map=$(cmake_escape "$ASSETS")=/assets"
file_prefix_maps="$file_prefix_maps -ffile-prefix-map=$(cmake_escape "$emsdk_root")=/emsdk"
if [ -n "${CMAKE_C_FLAGS:-}" ]; then
    c_flags="$CMAKE_C_FLAGS $file_prefix_maps"
else
    c_flags="$file_prefix_maps"
fi
if [ -n "${CMAKE_CXX_FLAGS:-}" ]; then
    cxx_flags="$CMAKE_CXX_FLAGS $file_prefix_maps"
else
    cxx_flags="$file_prefix_maps"
fi

# Step 1: build the host tools (strgen, settingsgen, ...) with the native
# compiler. The wasm build uses these to generate language and setting data.
if [ ! -f "$SRC/build-host/CMakeCache.txt" ]; then
    cmake -S "$SRC" -B "$SRC/build-host" -GNinja -DOPTION_TOOLS_ONLY=ON
fi
cmake --build "$SRC/build-host" --target tools

# GLOBAL_DATA_DIR is baked in as a string literal (not covered by
# -ffile-prefix-map). Point it at the remapped SDK datadir so the published
# binary does not embed the host path under the Emscripten sysroot.
emscripten_dir="$(cd "$(dirname "$(command -v emcc)")" && pwd)"
global_dir_host="$emscripten_dir/cache/sysroot/share/games/openttd"
global_dir_suffix="${global_dir_host#"$emsdk_root"/}"
if [ "$global_dir_suffix" = "$global_dir_host" ]; then
    global_dir="/emsdk/share/games/openttd"
else
    global_dir="/emsdk/$global_dir_suffix"
fi

# Step 2: configure the wasm build.
if [ ! -f "$SRC/build-wasm/CMakeCache.txt" ]; then
    emcmake cmake -S "$SRC" -B "$SRC/build-wasm" -GNinja \
        -DHOST_BINARY_DIR="$SRC/build-host" \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_C_FLAGS="$c_flags" \
        -DCMAKE_CXX_FLAGS="$cxx_flags" \
        -DGLOBAL_DIR="$global_dir" \
        -DOPTION_USE_ASSERTS=OFF
fi

# Step 3: stage the CJK font and the free basesets into the build tree.
# The link step packs the /font and /baseset directories into openttd.data
# with --preload-file, so these files must be in place before the build.
mkdir -p "$SRC/build-wasm/font" "$SRC/build-wasm/baseset"
cp "$ASSETS/fusion-proportional/fusion-pixel-12px-proportional-zh_hans.ttf" "$SRC/build-wasm/font/"
cp "$ASSETS"/opengfx-8.0/*.grf "$ASSETS"/opengfx-8.0/*.obg "$SRC/build-wasm/baseset/"
# Note: OpenSFX / OpenMSX are not staged. The upstream wasm build starts the
# game with null sound and music drivers (see pre.js: -mnull -snull), so
# sound data would only grow openttd.data. Revisit if we enable audio.

# Step 4: build the game. Produces openttd.html/.js/.wasm/.data.
cmake --build "$SRC/build-wasm"

# Step 5: copy the artifacts into the repository.
mkdir -p "$OUT"
cp "$SRC/build-wasm/openttd.js" "$SRC/build-wasm/openttd.wasm" "$SRC/build-wasm/openttd.data" "$OUT/"
ls -la "$OUT"
echo "Done. Do not forget: the shell page $OUT/index.html is a repo file, not a build output."
