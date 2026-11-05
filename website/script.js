
const sources = [
  ['YouTube', 'YouTube & YouTube Music via plugin.', 'YouTube plugin', 'play'],
  ['SoundCloud', 'Tracks, playlists & artist pages.', 'Lavalink source', 'cloud'],
  ['Bandcamp', 'Albums & tracks from Bandcamp.', 'Lavalink source', 'disc'],
  ['Twitch', 'Live Twitch stream audio.', 'Lavalink source', 'radio'],
  ['HTTP / Direct', 'Direct audio URLs & internet radio streams.', 'HTTP source', 'link'],
  ['Spotify', 'Resolve Spotify tracks & playlists.', 'LavaSrc', 'music'],
  ['Apple Music', 'Resolve Apple Music tracks & playlists.', 'LavaSrc', 'headphones'],
  ['Deezer', 'Resolve Deezer tracks & playlists.', 'LavaSrc', 'bars'],
  ['Flowery TTS', 'Text-to-speech via Flowery.', 'LavaSrc', 'mic']
];

const icons = {
  play: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z"/>',
  cloud: '<path d="M7 18a5 5 0 0 1-1-9.9A7 7 0 0 1 19 10a4 4 0 0 1-1 8Z"/>',
  disc: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/>',
  radio: '<rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="9" cy="14" r="3"/><path d="m6 7 11-4M16 12h2m-2 4h2"/>',
  link: '<path d="M10 13a5 5 0 0 0 7 .3l3-3a5 5 0 0 0-7-7l-2 2"/><path d="M14 11a5 5 0 0 0-7-.3l-3 3a5 5 0 0 0 7 7l2-2"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  headphones: '<path d="M3 14v-3a9 9 0 0 1 18 0v3"/><rect x="3" y="13" width="4" height="7" rx="2"/><rect x="17" y="13" width="4" height="7" rx="2"/>',
  bars: '<path d="M4 15v5m4-12v12m4-16v16m4-9v9m4-14v14"/>',
  mic: '<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4m-4 0h8"/>'
};

const logo = '<img src="assets/logo.png" alt="Groovie King logo">';

const sourceCards = `
  <div class="source-grid">
    ${sources.map(([name, description, type, icon]) => `
      <article class="source-card">
        <div class="source-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">${icons[icon]}</svg>
        </div>
        <div class="source-type">${type}</div>
        <h3>${name}</h3>
        <p>${description}</p>
      </article>
    `).join('')}
  </div>
`;

const sourcesSection = `
  <section id="sources">
    <div class="eyebrow">SUPPORTED AUDIO SOURCES</div>
    <h2>One bot. More ways to listen.</h2>
    <p>
      Explore music, playlists, live streams,
      internet radio, and text-to-speech.
    </p>
    ${sourceCards}
    <p class="note">
      Source availability depends on installed Lavalink plugins,
      server configuration, and provider access.
      Spotify, Apple Music, and Deezer integrations may resolve
      metadata rather than provide audio directly.
    </p>
  </section>
`;

const wave = `
  <div class="wave" aria-label="Decorative audio visualizer">
    ${Array.from({length: 29}, (_, i) => `
      <i style="--h:${20 + i * 37 % 100}px;
                --d:-${i * 7 % 13 / 10}s"></i>
    `).join('')}
  </div>
`;

const pages = {
  home: `
    <section class="hero">
      <div class="copy">
        <div class="eyebrow">✦ MUSIC WITHOUT LIMITS</div>
        <h1>FEEL THE<br><span class="cyan">BEAT.</span></h1>
        <p>
          Meet Groovie King, a Discord music bot
          powered by Lavalink, custom audio effects,
          and music from across the web.
        </p>
        <a class="button" href="#discord">JOIN THE COMMUNITY</a>
        <a class="button alt" href="#sources">EXPLORE SOURCES</a>
      </div>
      ${logo}
    </section>

    <section>
      <div class="grid">
        <div class="card">
          <div class="num">100</div>
          <div class="label">SLASH COMMANDS · TARGET</div>
        </div>
        <div class="card">
          <div class="num">30</div>
          <div class="label">NAMED AUDIO FILTERS</div>
        </div>
        <div class="card">
          <div class="num">9</div>
          <div class="label">LISTED AUDIO SOURCES</div>
        </div>
      </div>
    </section>

    <section>
      <div class="eyebrow">SOUND LAB</div>
      <h2>Turn every track into a vibe.</h2>
      ${wave}
      <p>Decorative visualizer — not a live audio meter.</p>
    </section>

    ${sourcesSection}
  `,

  status: `
    <section>
      <div class="eyebrow">SYSTEM HEALTH</div>
      <h1>THE <span class="cyan">CONTROL ROOM.</span></h1>
      <p>
        Live status is not connected to this static website yet.
      </p>
      <div class="status">
        <span>Discord bot</span><strong>Not connected</strong>
      </div>
      <div class="status">
        <span>Lavalink node</span><strong>Not connected</strong>
      </div>
      <div class="status">
        <span>Playback</span><strong>Not verified</strong>
      </div>
      <div class="card">
        <h2>Secure Lavalink</h2>
        <p>
          Keep Lavalink credentials in Render Environment,
          never in website files.
        </p>
      </div>
    </section>
  `,

  privacy: `
    <section>
      <div class="eyebrow">TRANSPARENCY</div>
      <h1>PRIVACY <span class="cyan">POLICY.</span></h1>
      <p><strong>Draft — review before launch.</strong></p>
      <h2>Information processed</h2>
      <p>
        The bot processes Discord server and voice-channel
        identifiers, requested media links, and queue state
        to operate music commands.
      </p>
      <h2>Third parties</h2>
      <p>
        Playback requests may be passed to the configured
        Lavalink node and its media plugins.
      </p>
      <h2>Retention and contact</h2>
      <p>
        Confirm actual storage, retention, and operator contact
        details before publishing this policy as final.
      </p>
    </section>
  `,

  terms: `
    <section>
      <div class="eyebrow">GUIDELINES</div>
      <h1>TERMS OF <span class="cyan">SERVICE.</span></h1>
      <p><strong>Draft — review before launch.</strong></p>
      <h2>Acceptable use</h2>
      <p>
        Follow Discord rules, applicable laws, and media
        provider terms. Do not abuse the service.
      </p>
      <h2>Availability</h2>
      <p>
        Playback and supported sources depend on external
        providers, server configuration, and maintenance.
      </p>
    </section>
  `,

  discord: `
    <section class="hero">
      <div class="copy">
        <div class="eyebrow">THE COMMUNITY</div>
        <h1>JOIN THE <span class="cyan">GROOVE.</span></h1>
        <p>
          Meet music fans, suggest features,
          and get help with Groovie King.
        </p>
        <a class="button"
           href="https://discord.gg/dragojsgames"
           target="_blank"
           rel="noopener noreferrer">
          OPEN COMMUNITY DISCORD
        </a>
        <p>
          Existing DragoJsGames community link.
          Replace with a dedicated Groovie King invite if needed.
        </p>
      </div>
      ${logo}
    </section>
  `
};

function render() {
  const hash = location.hash.slice(1).toLowerCase();
  const page = hash === 'sources' ? 'home' :
    (pages[hash] ? hash : 'home');

  document.getElementById('page').innerHTML = pages[page];

  document.querySelectorAll('nav a').forEach(link => {
    link.classList.toggle('active',
      link.hash === '#' + (hash || 'home'));
  });

  document.title =
    'Groovie King · ' + page[0].toUpperCase() + page.slice(1);

  if (hash === 'sources') {
    document.getElementById('sources')?.scrollIntoView();
  } else {
    window.scrollTo(0, 0);
  }
}

addEventListener('hashchange', render);
render();
