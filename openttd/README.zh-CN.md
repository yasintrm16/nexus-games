# OpenTTD（网页）

在浏览器页面里运行 OpenTTD 15.3 的 WebAssembly 构建（`SOURCE.txt`，引自 `build/build.md`：版本「15.3（cdn.openttd.org 的 `openttd-15.3-source.tar.xz`）」，许可「GPLv2」）。

基础图形 OpenGFX 8.0（GPLv2）与 Fusion Pixel 12px zh_hans 字体（OFL-1.1，v2026.08.11）在链接时打进 `openttd.data`（`build/build.md`）。音效与音乐关闭：上游 wasm 构建使用空音效与空音乐驱动（`build/build.md`）。

存档与配置保存在引擎的浏览器存储里。首次运行且尚无配置时，shell 页面向 IDBFS 写入默认 `openttd.cfg`（`shell.js`；`SOURCE.txt`／`build/build.md`）。页面提示：「存档保存在本浏览器内。清除网站数据会删除存档。」（`shell.js`）。

## 单独打开页面

```bash
npm start
```

然后打开 `http://localhost:8080/`。

页面加载 `ais6-bridge.js`、`shell.js`、`openttd.js`（`index.html`）。`openttd.js` 再加载 `openttd.wasm` 与 `openttd.data`。没有宿主时，独立适配器应答，游戏仍可启动（`shell.js`）。

## 构建

```bash
npm run build
```

把宿主页面要嵌入的文件复制到 `dist/`。不重新编译引擎。没有依赖，有 Node 即可。

若要重建 `openttd.js`、`openttd.wasm`、`openttd.data`，按 `build/build.md`（emsdk 6.0.6；`build/build-openttd.sh`）。补丁为 `build/patches/FindFreetype.cmake` 与 `build/patches/emscripten-zh.patch`。本树不附带 OpenTTD 源码包；`build/build.md` 写明档案名 `openttd-15.3-source.tar.xz`，来自 cdn.openttd.org（`SOURCE.txt`）。

## 目录

| 路径 | 内容 |
| --- | --- |
| `index.html` | 页面：画布、启动卡片、触控层（属页面，不在引擎内——`build/build.md`） |
| `shell.js` | 桥接状态、首次配置、画面尺寸 |
| `openttd.js`、`openttd.wasm`、`openttd.data` | 已提交的 OpenTTD 15.3 Wasm 构建（OpenGFX 与字体在 `.data` 内） |
| `SOURCE.txt` | 引擎版本、补丁、适配器、许可盘点 |
| `build/` | 重建脚本、说明与 `patches/` |
| `ais6-bridge.js`、`app.manifest.json` | 让宿主页面把游戏嵌进框架并画出窗口与菜单；单独打开时，同样的调用退回桥接的独立适配器 |

## 许可

OpenTTD 源码与 OpenGFX 为 GPLv2（`build/build.md`／`SOURCE.txt`）。打包字体为 OFL-1.1（`build/build.md`）。更多说明见 [LICENSE-NOTES.md](LICENSE-NOTES.md)。

English: [README.md](README.md).

未经修改的上游源码是仓库根目录的 `openttd-15.3-source.tar.xz`；字体的许可文本在 `licenses/fusion-pixel/` 下。
