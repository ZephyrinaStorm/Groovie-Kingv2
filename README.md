# Groovie King v2 — bot code replacement

This package contains all bot code files, **not** the `website/` folder.
Keep the existing `website/` folder unchanged.

## Install
Replace `index.js`, `package.json`, `render.yaml`, `lib/`, and `commands/`
with the contents of this archive. Delete obsolete `lib/presets.json`
and `lib/registry.json`; the new bot does not use them.
Keep existing Render environment variable **values**. Do not commit secrets.
Deploy using Node.js 22 or newer. The bot expects exactly 100 command files.

## Audio effects
Thirty named effects including `/3d` and `/nightcore`; no numbered FX commands.
The one-page `/help` menu is built from the actual command files.

## Validation
Static Node syntax checks pass. Live Lavalink and Discord execution must
be tested on your own configured services.
