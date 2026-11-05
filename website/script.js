
const sources = [
  {
    name: 'YouTube',
    description: 'Stream from YouTube & YouTube Music (via plugin).',
    icon: '▶',
    type: 'YouTube plugin'
  },
  {
    name: 'SoundCloud',
    description: 'Tracks, playlists & artist pages from SoundCloud.',
    icon: '☁',
    type: 'Lavalink source'
  },
  {
    name: 'Bandcamp',
    description: 'Albums & tracks from Bandcamp.',
    icon: '♫',
    type: 'Lavalink source'
  },
  {
    name: 'Twitch',
    description: 'Live Twitch stream audio.',
    icon: '◉',
    type: 'Lavalink source'
  },
  {
    name: 'HTTP / Direct',
    description: 'Direct audio URLs & internet radio streams.',
    icon: '🔗',
    type: 'HTTP source'
  },
  {
    name: 'Spotify',
    description: 'Resolve Spotify tracks & playlists (LavaSrc).',
    icon: '♫',
    type: 'LavaSrc'
  },
  {
    name: 'Apple Music',
    description: 'Resolve Apple Music tracks & playlists (LavaSrc).',
    icon: '♪',
    type: 'LavaSrc'
  },
  {
    name: 'Deezer',
    description: 'Deezer tracks & playlists (LavaSrc).',
    icon: '▥',
    type: 'LavaSrc'
  },
  {
    name: 'Flowery TTS',
    description: 'Text-to-speech via Flowery (LavaSrc).',
    icon: '◈',
    type: 'LavaSrc'
  }
];

const sourceCards = `
  <div class="source-grid">
    ${sources.map(source => `
      <article class="source-card">
        <div class="source-icon" aria-hidden="true">
          ${source.icon}
        </div>
        <div class="source-type">${source.type}</div>
        <h3>${source.name}</h3>
        <p>${source.description}</p>
      </article>
    `).join('')}
  </div>
`;
