# Groovie King 🎧

Discord music bot + responsive static website. Official logo supplied by the project owner.

## Upload to GitHub
Upload **the contents of this ZIP**, not the containing folder, to `https://github.com/ZephyrinaStorm/Groovie-King`. Keep `render.yaml` in the repository root.

## Render Blueprint
Render Dashboard → New → Blueprint → select repository. This provisions `groovie-king-website` (static) and `groovie-king-bot` (background worker; paid instance may be required). Website publishes from `website/`; bot starts from ``. Configure secrets in bot service Environment.

Required variable names (aliases accepted):

- `DISCORD_TOKEN` (or `BOT_TOKEN` / `TOKEN`)
- `DISCORD_CLIENT_ID` (or `CLIENT_ID` / `APPLICATION_ID`)
- `LAVALINK_HOST` (or `NODE_HOST` / `LAVALINK_URL` / `NODE_URL`), e.g. `wss://node.example.org`
- `LAVALINK_PORT` (or `NODE_PORT`), optional; default 443 for WSS
- `LAVALINK_PASSWORD` (or `NODE_PASSWORD`)
- `LAVALINK_SECURE=true` (or `NODE_SECURE`), optional
- `DISCORD_GUILD_ID` optional: registers commands in one guild for quicker testing; otherwise registers globally.
- `REGISTER_COMMANDS=false` optional: disables registration on boot.

**Do not put passwords or Discord tokens into the repository.**

## Features and scope
- Exactly **100 separate slash-command files** in `commands/`: 20 general music/queue/help commands and 80 dedicated `fx-01`–`fx-80` equalizer shortcuts.
- **90 audio EQ presets** defined in `lib/presets.json`. Use `/preset name:fx-81` through `/preset name:fx-90` for the remaining ten. Presets are generated EQ curves, not individually artist-designed audio effects.
- `/help` category buttons, search modal and paginated category browsing. Search results display the first page; category buttons reset the view.
- Lavalink secure WebSocket configuration and plugin-provided playback for Spotify, SoundCloud, Apple Music, Deezer, Bandcamp, Last.fm, YouTube, Twitch and direct streams. Not every source URL is guaranteed playable; depends on the node plugins.
- Five website sections: Home, Status, Privacy, Terms, Discord. Status is **not live** until a status API is integrated. Privacy and Terms are drafts.

## Validation
JavaScript syntax and command-file counts are checked in packaging. **Not live-tested** against Discord, Render or your private Lavalink node. Lavalink client methods and source plugins may require adjustments to your exact installed versions. Discord imposes 100 global chat-input commands per application; this project uses all 100 slots.
