# OpenTTD (web)

A browser page that runs OpenTTD 15.3 as WebAssembly (`SOURCE.txt`, quoting `build/build.md`: version “15.3 (`openttd-15.3-source.tar.xz` from cdn.openttd.org)”, licence “GPLv2”).

Base graphics OpenGFX 8.0 (GPLv2) and the Fusion Pixel 12px zh_hans font (OFL-1.1, v2026.08.11) are packed into `openttd.data` at link time (`build/build.md`). Sound and music stay off: the upstream wasm build uses null sound and music drivers (`build/build.md`).

Saves and configuration live in the engine’s browser storage. The shell page seeds a default `openttd.cfg` into IDBFS on first run when none exists yet (`shell.js`; `SOURCE.txt` / `build/build.md`). The page tells the player: “Saves live in this browser. Clearing site data deletes them.” (`shell.js`).

## Run on its own page

```bash
npm start
```

Then open `http://localhost:8080/`.

The page loads `ais6-bridge.js`, `shell.js`, and `openttd.js` (`index.html`). `openttd.js` loads `openttd.wasm` and `openttd.data`. With no host, the standalone adapter answers and the game still starts (`shell.js`).

## Build

```bash
npm run build
```

Copies what a host page embeds into `dist/`. It does not recompile the engine. Node is enough; there are no package dependencies.

To rebuild `openttd.js`, `openttd.wasm`, and `openttd.data`, follow `build/build.md` (emsdk 6.0.6; `build/build-openttd.sh`). Patches are `build/patches/FindFreetype.cmake` and `build/patches/emscripten-zh.patch`. OpenTTD source for this version is not shipped in this tree; `build/build.md` names the archive `openttd-15.3-source.tar.xz` from cdn.openttd.org (`SOURCE.txt`).

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | The page: canvas, boot card, touch layer (owned by the page, not the engine — `build/build.md`) |
| `shell.js` | Bridge status, first-run config, surface resize |
| `openttd.js`, `openttd.wasm`, `openttd.data` | Committed OpenTTD 15.3 Wasm build (OpenGFX and font inside `.data`) |
| `SOURCE.txt` | Engine version, patches, adapters, licence inventory |
| `build/` | Rebuild script, notes, and `patches/` |
| `ais6-bridge.js`, `app.manifest.json` | Let a host page embed the game in a frame and draw its window and menus; on its own page the same calls fall back to the bridge’s standalone adapter |

## Licence

OpenTTD source and OpenGFX are GPLv2 (`build/build.md` / `SOURCE.txt`). The packed font is OFL-1.1 (`build/build.md`). Further notes: [LICENSE-NOTES.md](LICENSE-NOTES.md).

中文说明见 [README.zh-CN.md](README.zh-CN.md).

The unmodified upstream source is `openttd-15.3-source.tar.xz` at the repository root; the font's licence texts are under `licenses/fusion-pixel/`.
