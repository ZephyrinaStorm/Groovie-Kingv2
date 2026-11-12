
const logo = 'assets/logo.png';

const sources = [
  {
    name: 'YouTube',
    icon: '▶',
    type: 'YouTube Plugin',
    description: 'Stream music from YouTube and YouTube Music.'
  },
  {
    name: 'SoundCloud',
    icon: '☁',
    type: 'Lavalink Source',
    description: 'Play tracks and playlists from SoundCloud.'
  },
  {
    name: 'Bandcamp',
    icon: '♫',
    type: 'Lavalink Source',
    description: 'Discover albums and tracks from Bandcamp.'
  },
  {
    name: 'Twitch',
    icon: '◉',
    type: 'Live Audio',
    description: 'Listen to supported Twitch livestream audio.'
  },
  {
    name: 'HTTP / Direct',
    icon: '🔗',
    type: 'Direct Streams',
    description: 'Play direct audio URLs and internet radio streams.'
  },
  {
    name: 'Spotify',
    icon: '♫',
    type: 'LavaSrc',
    description: 'Resolve Spotify tracks and playlists through LavaSrc.'
  },
  {
    name: 'Apple Music',
    icon: '♪',
    type: 'LavaSrc',
    description: 'Resolve Apple Music tracks and playlists.'
  },
  {
    name: 'Deezer',
    icon: '▥',
    type: 'LavaSrc',
    description: 'Resolve Deezer music and playlists.'
  },
  {
    name: 'Flowery TTS',
    icon: '🎙',
    type: 'Text to Speech',
    description: 'Text-to-speech integration through LavaSrc.'
  }
];

const features = [
  {
    icon: '🎵',
    title: 'Music Playback',
    description: 'Play, pause, resume, skip, and control your favorite music.'
  },
  {
    icon: '📋',
    title: 'Queue Management',
    description: 'Organize, shuffle, repeat, and manage upcoming tracks.'
  },
  {
    icon: '🎛',
    title: 'Audio Filters',
    description: 'Try Nightcore, Bass Boost, 3D audio, and other effects.'
  },
  {
    icon: '🔊',
    title: 'Volume Controls',
    description: 'Adjust playback volume directly through Discord commands.'
  },
  {
    icon: '🌐',
    title: 'Multiple Music Sources',
    description: 'Discover music across supported providers and audio streams.'
  },
  {
    icon: '⚡',
    title: 'Slash Commands',
    description: 'Use Discord slash commands with an easy-to-read help menu.'
  }
];

const sourceCards = sources.map(source => `
  <article class="card">
    <div class="icon" aria-hidden="true"
         style="font-size:28px">
      ${source.icon}
    </div>
    <div class="tag">${source.type}</div>
    <h3>${source.name}</h3>
    <p>${source.description}</p>
  </article>
`).join('');

const featureCards = features.map(feature => `
  <article class="card">
    <div class="icon" aria-hidden="true"
         style="font-size:28px">
      ${feature.icon}
    </div>
    <h3>${feature.title}</h3>
    <p>${feature.description}</p>
  </article>
`).join('');

const visualizer = `
  <div class="visualizer" aria-label="Decorative music visualizer">
    ${Array.from({ length: 28 }, (_, i) => `
      <i style="--h:${20 + (i * 37) % 95}px;
                --d:-${(i * 7) % 13 / 10}s"></i>
    `).join('')}
  </div>
`;

const pages = {
  home: `
    <section class="hero">
      <div>
        <div class="eyebrow">YOUR DISCORD MUSIC EXPERIENCE</div>
        <h1>
          GROOVE<br>
          <span class="gradient">KING.</span>
        </h1>
        <p class="lead">
          Turn up the vibe with Groove King,
          a Discord music bot powered by Lavalink.
          Enjoy music playback, custom audio effects,
          and multiple music sources.
        </p>
        <div class="actions">
          <a class="btn" href="#features">EXPLORE FEATURES</a>
          <a class="btn alt" href="#sources">MUSIC SOURCES</a>
        </div>
      </div>
      <img class="hero-logo" src="${logo}"
           alt="Groove King rainbow music note logo">
    </section>

    <section>
      <div class="eyebrow">THE MUSIC EXPERIENCE</div>
      <h2>Music made for your Discord server.</h2>
      <div class="grid">
        <article class="card">
          <div class="stat">100</div>
          <div class="smallcaps">SLASH COMMAND TARGET</div>
        </article>
        <article class="card">
          <div class="stat">30</div>
          <div class="smallcaps">NAMED AUDIO FILTERS</div>
        </article>
        <article class="card">
          <div class="stat">9</div>
          <div class="smallcaps">LISTED AUDIO SOURCES</div>
        </article>
      </div>
    </section>

    <section>
      <div class="eyebrow">SOUND LAB</div>
      <h2>Feel every beat.</h2>
      ${visualizer}
      <p>This is a decorative visualizer, not a live audio meter.</p>
    </section>

    <section>
      <div class="eyebrow">DISCOVER MORE</div>
      <h2>Everything you need for music.</h2>
      <div class="grid">
        ${featureCards}
      </div>
    </section>
  `,

  sources: `
    <section>
      <div class="eyebrow">SUPPORTED AUDIO SOURCES</div>
      <h1>
        MUSIC <span class="gradient">EVERYWHERE.</span>
      </h1>
      <p class="lead">
        Discover tracks, playlists, live streams,
        internet radio, and text-to-speech integrations.
      </p>
      <div class="grid">
        ${sourceCards}
      </div>
      <div class="notice">
        Audio source availability depends on your Lavalink
        server configuration and installed plugins.
        Spotify, Apple Music, and Deezer generally resolve
        metadata and require a playable audio source.
      </div>
    </section>
  `,

  features: `
    <section>
      <div class="eyebrow">GROOVE KING FEATURES</div>
      <h1>
        YOUR MUSIC.<br>
        <span class="gradient">YOUR RULES.</span>
      </h1>
      <p class="lead">
        Everything you need to enjoy music with friends
        in your Discord voice channels.
      </p>
      <div class="grid">
        ${featureCards}
      </div>
      <div class="notice">
        Feature availability depends on the currently deployed
        bot version and Lavalink configuration.
      </div>
    </section>
  `,

  status: `
    <section>
      <div class="eyebrow">SYSTEM STATUS</div>
      <h1>
        SYSTEM <span class="gradient">STATUS.</span>
      </h1>
      <p>
        Live monitoring is not connected to this static website.
        The statuses below are informational placeholders.
      </p>
      <div class="status-row">
        <span>Discord Bot</span>
        <strong>Not connected</strong>
      </div>
      <div class="status-row">
        <span>Lavalink Server</span>
        <strong>Not connected</strong>
      </div>
      <div class="status-row">
        <span>Music Playback</span>
        <strong>Not verified</strong>
      </div>
      <div class="notice">
        The bot uses Lavalink for audio playback.
        Keep all Lavalink credentials and Discord tokens
        private in your hosting environment.
      </div>
    </section>
  `,

  privacy: `
    <section>
      <div class="eyebrow">YOUR PRIVACY</div>
      <h1>
        PRIVACY <span class="gradient">POLICY.</span>
      </h1>
      <div class="notice">
        Draft policy — review and complete before public launch.
      </div>

      <h2>Information We Process</h2>
      <p>
        Groove King may process Discord server identifiers,
        voice channel identifiers, music requests,
        and playback queue information to provide its features.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Music requests may be processed through Lavalink
        and configured external music providers.
      </p>

      <h2>Data Retention</h2>
      <p>
        Actual storage practices, retention periods,
        and contact details must be confirmed by the operator.
      </p>
    </section>
  `,

  terms: `
    <section>
      <div class="eyebrow">SERVICE GUIDELINES</div>
      <h1>
        TERMS OF <span class="gradient">SERVICE.</span>
      </h1>
      <div class="notice">
        Draft terms — review before public launch.
      </div>

      <h2>Using Groove King</h2>
      <p>
        Users must follow Discord's Terms of Service,
        applicable laws, and media provider rules.
      </p>

      <h2>Acceptable Use</h2>
      <p>
        Do not abuse commands, disrupt the service,
        or use Groove King for unauthorized activities.
      </p>

      <h2>Availability</h2>
      <p>
        Music playback and integrations may be affected
        by hosting maintenance, Lavalink configuration,
        and third-party services.
      </p>
    </section>
  `,

  discord: `
    <section class="hero">
      <div>
        <div class="eyebrow">JOIN THE COMMUNITY</div>
        <h1>
          JOIN THE<br>
          <span class="gradient">GROOVE.</span>
        </h1>
        <p class="lead">
          Connect with the community, share feedback,
          request features, and get help with Groove King.
        </p>
        <div class="actions">
          <a class="btn"
             href="https://discord.gg/dragojsgames"
             target="_blank"
             rel="noopener noreferrer">
            OPEN DISCORD COMMUNITY
          </a>
        </div>
        <p>
          This is the existing DragoJsGames community link.
          Replace it with your Groove King invite if different.
        </p>
      </div>
      <img class="hero-logo" src="${logo}"
           alt="Groove King logo">
    </section>
  `
};

function render() {
  const pageElement = document.getElementById('page');

  if (!pageElement) {
    console.error('Missing #page element in index.html');
    return;
  }

  const hash = window.location.hash
    .replace('#', '')
    .toLowerCase();

  const currentPage = Object.prototype.hasOwnProperty.call(pages, hash)
    ? hash
    : 'home';

  pageElement.innerHTML = pages[currentPage];

  document.querySelectorAll('nav a').forEach(link => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === '#' + currentPage
    );
  });

  document.title =
    `Groove King — ${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}`;

  window.scrollTo(0, 0);
}

function initializeWebsite() {
  const menuButton = document.querySelector('.menu');
  const navigation = document.getElementById('navigation');
  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const opened = navigation.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(opened));
    });

    navigation.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navigation.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  window.addEventListener('hashchange', render);
  render();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
  initializeWebsite();
}
