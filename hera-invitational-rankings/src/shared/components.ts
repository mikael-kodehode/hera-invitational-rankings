export const header = `
  <header class="relative pt-12 pb-10 px-6 text-center bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
    <!-- Subtle dot pattern overlay -->
    <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 20px 20px;"></div>
    <!-- Bottom edge glow -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
    <h1 class="relative z-10 text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">Hera's</span> Invitational Rankings
    </h1>
    <p class="relative z-10 text-slate-400 text-sm mb-6">Track the progress of your favorite players</p>
    <div class="relative z-10 flex items-center justify-center gap-4 flex-wrap">
      <a href="https://www.youtube.com/channel/UCeqc9aYVAZcRQq9Ey0x26AQ" target="_blank" class="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
        <i class="fa-brands fa-youtube text-red-500"></i>
        <span class="hidden sm:inline">YouTube</span>
      </a>
      <a href="https://twitch.tv/hera" target="_blank" class="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
        <i class="fa-brands fa-twitch text-purple-400"></i>
        <span class="hidden sm:inline">Twitch</span>
      </a>
      <a href="https://discord.gg/invite/fpheyyUCg9" target="_blank" class="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
        <i class="fa-brands fa-discord text-indigo-400"></i>
        <span class="hidden sm:inline">Discord</span>
      </a>
      <a href="https://x.com/Hera_Aoe" target="_blank" class="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
        <i class="fa-brands fa-x-twitter"></i>
        <span class="hidden sm:inline">@Hera_Aoe</span>
      </a>
    </div>
  </header>
`

const profileLinks = [
  { name: 'Grubby', id: 'GrubbyButton', flag: 'nl' },
  { name: 'Day9', id: 'Day9Button', flag: 'us' },
  { name: 'Deathnote', id: 'DeathnoteButton', flag: 'kr' },
  { name: 'Gunnar', id: 'GunnarButton', flag: 'us' },
  { name: 'Knoff', id: 'KnoffButton', flag: 'us' },
  { name: 'SingSing', id: 'SingSingButton', flag: 'cn' },
  { name: 'uThermal', id: 'uThermalButton', flag: 'nl' },
  { name: 'PiG', id: 'PiGButton', flag: 'au' },
  { name: 'Ahmpy', id: 'AhmpyButton', flag: 'us' },
  { name: 'YamatoCannon', id: 'YamatoCannonButton', flag: 'se' },
  { name: 'Lowko', id: 'LowkoButton', flag: 'nl' },
]

export const desktopSidebar = (activePage: 'ratings' | 'clips') => {
  const isRatings = activePage === 'ratings'
  const prefix = isRatings ? '#' : '/#'
  return `
  <nav class="page-nav fixed top-0 left-0 h-full hidden md:flex flex-col items-center py-3 bg-slate-900 border-r border-slate-700 z-50 overflow-hidden">
    <a href="${isRatings ? '#ratings' : '/'}" id="nav-ratings" class="nav-link flex flex-col items-center gap-1.5 py-3 px-2 rounded-lg text-slate-300 hover:text-white transition-colors ${isRatings ? 'active-page-nav' : ''}" title="Ratings">
      <div class="nav-icon-pill w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 transition-colors">
        <i class="fa fa-trophy"></i>
      </div>
      <span class="text-[10px] uppercase tracking-wider font-medium">Ratings</span>
    </a>
    <a href="/clips.html" id="nav-clips" class="nav-link flex flex-col items-center gap-1.5 py-3 px-2 rounded-lg text-slate-300 hover:text-white transition-colors ${isRatings ? '' : 'active-page-nav'}" title="Twitch Clips">
      <div class="nav-icon-pill w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 transition-colors">
        <i class="fa fa-play"></i>
      </div>
      <span class="text-[10px] uppercase tracking-wider font-medium">Clips</span>
    </a>
    <div class="nav-profiles w-full flex flex-col flex-1 min-h-0">
      <div class="px-3 pt-4 pb-1">
        <div class="text-[10px] uppercase tracking-wider font-semibold text-slate-500 text-center">Profiles</div>
      </div>
      <div class="flex-1 overflow-y-auto w-full px-2 space-y-1">
        ${profileLinks.map(p => `<a href="${prefix}${p.name}Profile" id="${p.id}" class="streamer-article nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="fi fi-${p.flag} rounded-sm shrink-0"></span><span>${p.name}</span></a>`).join('\n      ')}
      </div>
    </div>
    <button id="sidebar-toggle" class="sidebar-toggle w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors mt-auto mb-1 shrink-0" title="Toggle sidebar">
      <i class="fa fa-chevron-left text-xs sidebar-toggle-icon"></i>
    </button>
  </nav>`
}

export const mobileNav = (activePage: 'ratings' | 'clips') => {
  const isRatings = activePage === 'ratings'
  const prefix = isRatings ? '#' : '/#'
  return `
  <nav class="md:hidden fixed bottom-0 left-0 right-0 bg-slate-950 border-t border-slate-800 z-50 overflow-x-auto">
    <div class="flex items-center justify-around min-w-max px-2 py-1.5 gap-1">
      <a href="${isRatings ? '#ratings' : '/'}" ${isRatings ? 'id="small-screen-nav-home"' : ''} class="nav-link ${isRatings ? 'for-scroll-observer ' : ''}flex flex-col items-center px-2 py-1 rounded-md text-[10px] text-slate-300 hover:text-white transition-colors">
        <div class="nav-icon-pill w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-colors ${isRatings ? 'bg-amber-500/20 text-amber-400' : ''}">
          <i class="fa fa-trophy text-xs"></i>
        </div>
        <span class="mt-0.5">Ratings</span>
      </a>
      <a href="/clips.html" id="nav-mobile-clips" class="nav-link ${isRatings ? '' : 'active-page-nav '}flex flex-col items-center px-2 py-1 rounded-md text-[10px] text-slate-300 hover:text-white transition-colors">
        <div class="nav-icon-pill w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-colors ${isRatings ? '' : 'bg-amber-500/20 text-amber-400'}">
          <i class="fa fa-play text-xs"></i>
        </div>
        <span class="mt-0.5">Clips</span>
      </a>
      ${profileLinks.map(p => `<a href="${prefix}${p.name}Profile" class="nav-link ${isRatings ? 'for-scroll-observer ' : ''}flex flex-col items-center px-2 py-1 rounded-md text-[10px] text-slate-300 hover:text-white transition-colors"><span class="fi fi-${p.flag} rounded-sm"></span><span class="mt-0.5">${p.name}</span></a>`).join('\n      ')}
    </div>
  </nav>`
}

export const footer = `
  <footer class="px-6 py-12 text-center text-slate-500 text-sm">
    <p>
      *This is an unofficial fan site and is not affiliated with Hera, Hera's Invitational, or the event organizers.
    </p>
  </footer>
`
