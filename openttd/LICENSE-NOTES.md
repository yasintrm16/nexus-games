# Licence notes (OpenTTD web)

This file names which licence text belongs at the public repository root and how adapters are marked. It does not reprint any licence text.

## Root licence file

The public repository needs a **GPL-2** licence text at the root (for example a file named `COPYING` or `LICENSE` whose body is the GNU GPL version 2).

- `build/build.md` Inputs table: OpenTTD source licence column is “GPLv2”; OpenGFX 8.0 is “GPLv2”.
- `SOURCE.txt` quotes those rows and states that a single licence string is not present inside `openttd.js` / `openttd.wasm` / `openttd.data`.

This tree currently ships **no** `COPYING` / `LICENSE` / `ENGINE-COPYING.txt` beside the page. The publisher must add the GPL-2 text at the root when opening the repository; do not invent terms beyond what `build/build.md` already states.

Also keep a notice for the packed font: `build/build.md` lists Fusion Pixel 12px zh_hans as **OFL-1.1**. That notice is not a substitute for the GPL-2 root file covering OpenTTD and OpenGFX.

## The page beside the engine

| File | Marking |
| --- | --- |
| `index.html`, `shell.js` | `SPDX-License-Identifier: GPL-2.0-only`, in the file |
| `build/patches/FindFreetype.cmake`, `build/patches/emscripten-zh.patch` | No header of their own; patches to GPL-2 sources, conveyed under this repository's licence |

## What is packed into `openttd.data`, and where its terms are

| Content | Licence | Text |
| --- | --- | --- |
| OpenGFX 8.0 base graphics | GPLv2 (`build/build.md`) | `LICENSE` at the repository root. Only the released graphics set is here; its source is upstream's |
| Fusion Pixel 12px zh_hans font, v2026.08.11 | OFL-1.1 (`build/build.md`) | `licenses/fusion-pixel/OFL.txt`, and the licences of the fonts it is derived from in `licenses/fusion-pixel/LICENSES/` |

## Corresponding source

`openttd-15.3-source.tar.xz` at the repository root is the unmodified upstream
source the engine was built from; `build/patches/` are the changes applied to
it and `build/build-openttd.sh` is the build.

## Files with no marking of their own

| File | What it is |
| --- | --- |
| `ais6-bridge.js` | Vendored from the host project so the page can be embedded in a frame; unmarked |
| `app.manifest.json`, `package.json`, `tools/build.mjs`, the README files, `SOURCE.txt`, `build/build.md` | Repository metadata and notes; conveyed with the repository under its licence |
