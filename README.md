# Mute Border

A tray app for Windows and macOS that displays a glowing red border overlay on all monitors when your [Elgato Wave Link](https://www.elgato.com/us/en/s/wave-link) microphone is muted. Never forget you're muted again.

## How it works

Mute Border connects to Wave Link's local WebSocket API (`ws://127.0.0.1:1824`) and listens for mute state changes on your primary hardware mic. When you mute:

- A red glowing border fades in around every monitor
- The tray icon updates to reflect the current state

When you unmute, the border fades out. If Wave Link closes or disconnects, the border hides and the app automatically reconnects every 5 seconds.

## Requirements

- Windows or macOS
- [Elgato Wave Link](https://www.elgato.com/us/en/s/wave-link) running

## Install

Download the latest release from [Releases](../../releases).

### Windows

Run the installer.

### macOS

Extract the ZIP, move `mute-border.app` to `Applications`, then launch it.

Because public releases are currently unsigned, macOS may block first launch. If that happens, right-click the app in Finder and choose **Open**.

To launch at startup, right-click the tray icon and check **Launch at Login**.

## Building from source

```bash
git clone https://github.com/coppinger/mute-border.git
cd mute-border
npm install
```

Run in development:

```bash
npm start
```

Package as an installer:

```bash
npm run make
```

Output artifacts:

- Windows installer: `out/make/squirrel.windows/x64/`
- macOS ZIP app bundle: `out/make/zip/darwin/`

In development mode, the debug mute toggle shortcut is:

- Windows/Linux: `Ctrl+Shift+M`
- macOS: `Cmd+Shift+M`

## Architecture

| Module | Description |
| --- | --- |
| `src/main/main.ts` | App entry point, wires together managers, registers debug shortcut |
| `src/main/wave-link-client.ts` | WebSocket client for Wave Link's JSON-RPC 2.0 API |
| `src/main/overlay-manager.ts` | Creates transparent, click-through overlay windows per display |
| `src/main/tray-manager.ts` | System tray icon with connection/mute status and context menu |
| `src/main/preload.ts` | Context bridge for IPC |
| `src/renderer/overlay-renderer.ts` | Toggles the red border overlay based on mute state |

## Tech stack

Electron 40, TypeScript, Vite (via Electron Forge 7), `ws` for WebSocket.

## License

MIT
