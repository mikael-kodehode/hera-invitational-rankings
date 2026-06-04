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

import { players } from './players'

const profileLinks = players.map(p => ({
  name: p.name,
  key: p.key,
  flag: p.flag,
  id: p.key.charAt(0).toUpperCase() + p.key.slice(1) + 'Button'
}))

export const desktopSidebar = (activePage: 'ratings' | 'clips') => {
  const isRatings = activePage === 'ratings'
  const prefix = isRatings ? '#' : '/#'
  return `
  <nav class="page-nav fixed top-0 left-0 h-full hidden md:flex flex-col items-center py-3 bg-slate-900 border-r border-slate-700 z-50 overflow-hidden">
    <a href="${isRatings ? '#ratings' : '/'}" id="nav-ratings" class="nav-link flex flex-col items-center gap-1.5 py-3 px-2 rounded-lg text-slate-300 hover:text-white transition-colors ${isRatings ? 'active-page-nav' : ''}" title="Ratings">
      <div class="nav-icon-pill w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-colors hover:bg-slate-700 hover:text-white">
        <i class="fa fa-trophy"></i>
      </div>
      <span class="text-[10px] uppercase tracking-wider font-medium">Ratings</span>
    </a>
    <a href="/clips.html" id="nav-clips" class="nav-link flex flex-col items-center gap-1.5 py-3 px-2 rounded-lg text-slate-300 hover:text-white transition-colors ${isRatings ? '' : 'active-page-nav'}" title="Twitch Clips">
      <div class="nav-icon-pill w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-colors hover:bg-slate-700 hover:text-white">
        <i class="fa fa-play"></i>
      </div>
      <span class="text-[10px] uppercase tracking-wider font-medium">Clips</span>
    </a>
    <div class="nav-profiles w-full flex flex-col flex-1 min-h-0">
      <div class="px-3 pt-4 pb-1">
        <div class="text-[10px] uppercase tracking-wider font-semibold text-slate-500 text-center">Profiles</div>
      </div>
      <section class="flex-1 overflow-y-auto w-full px-2 space-y-1">
        ${profileLinks.map(p => `<a href="${prefix}${p.key}Profile" id="${p.id}" class="streamer-article nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="fi fi-${p.flag} rounded-sm shrink-0"></span><span>${p.name}</span></a>`).join('\n      ')}
      </section>
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
  <div class="flex items-center min-w-max px-2 py-1.5 gap-1">
    
    <a href="${isRatings ? '#ratings' : '/'}" ${isRatings ? 'id="small-screen-nav-home"' : ''} class="sticky left-0 z-10 bg-slate-950/95 backdrop-blur-sm nav-link ${isRatings ? 'for-scroll-observer ' : ''}flex flex-col items-center px-2 py-1 rounded-md text-[10px] text-slate-300 hover:text-white transition-colors w-[56px] shrink-0">
      <div class="nav-icon-pill w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-colors ${isRatings ? 'bg-amber-500/20 text-amber-400' : ''}">
        <i class="fa fa-trophy text-xs"></i>
      </div>
      <span class="mt-0.5">Ratings</span>
    </a>
    
    <a href="/clips.html" id="nav-mobile-clips" class="sticky left-[56px] z-10 bg-slate-950/95 backdrop-blur-sm nav-link ${isRatings ? '' : 'active-page-nav '}flex flex-col items-center px-2 py-1 rounded-md text-[10px] text-slate-300 hover:text-white transition-colors w-[56px] shrink-0 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.5)] mr-1">
      <div class="nav-icon-pill w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-colors ${isRatings ? '' : 'bg-amber-500/20 text-amber-400'}">
        <i class="fa fa-play text-xs"></i>
      </div>
      <span class="mt-0.5">Clips</span>
    </a>
    
    ${profileLinks.map(p => `
      <a href="${prefix}${p.key}Profile" class="nav-link ${isRatings ? 'for-scroll-observer ' : ''}flex flex-col items-center justify-center px-2 py-1 rounded-md text-[10px] text-slate-300 hover:text-white transition-colors min-w-[52px] shrink-0">
        <span class="fi fi-${p.flag} rounded-sm shadow-sm"></span>
        <span class="mt-1 truncate max-w-[48px] text-center">${p.name}</span>
      </a>
    `).join('\n')}

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

const linkHtml = (l: { url: string, title: string, icon?: string, iconColor?: string, img?: string }) =>
  l.img
    ? `<a href="${l.url}" target="_blank" title="${l.title}" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="${l.img}" class="w-5 h-5 object-contain" alt="${l.title}" /></a>`
    : `<a href="${l.url}" target="_blank" title="${l.title}" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="${l.icon} ${l.iconColor ?? ''}"></i></a>`

export const renderPlayerProfile = (p: { key: string, name: string, image: string, links: { url: string, title: string, icon?: string, iconColor?: string, img?: string }[] }) => `
  <article id="${p.key}Profile" class="player-profile for-scroll-observer bg-slate-900 rounded-xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
    <div class="p-6 md:p-8">
      <div class="flex flex-col md:flex-row gap-6">
        <div class="profile-image-container shrink-0 w-32 md:w-48">
          <img class="player-profile-picture w-full h-56 object-cover rounded-lg shadow-md" src="${p.image}" alt="${p.name}" />
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="text-2xl font-bold text-white mb-3">${p.name}</h3>
          <div id="${p.key}-profile-info" class="text-slate-300 leading-relaxed"></div>
          <ul class="streamer-links-ul flex flex-wrap gap-3 mt-4">
            ${p.links.map(l => `<li>${linkHtml(l)}</li>`).join('\n            ')}
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div class="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-800">
          <span id="${p.key}-matches" class="block text-2xl font-bold text-white"></span>
          <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-crosshairs text-slate-500 mr-1.5"></i>Ranked 1v1</span>
        </div>
        <div class="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-800">
          <span id="${p.key}-win-percentage" class="block text-2xl font-bold text-white"></span>
          <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-percentage text-slate-500 mr-1.5"></i>Win Rate</span>
        </div>
        <div class="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-800">
          <span id="${p.key}-rating" class="block text-2xl font-bold text-amber-500"></span>
          <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-star text-slate-500 mr-1.5"></i>Rating</span>
        </div>
        <div class="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-800">
          <span id="${p.key}-streak" class="block text-2xl font-bold"></span>
          <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-bolt text-slate-500 mr-1.5"></i>Streak</span>
        </div>
      </div>
      <h4 class="mt-6 mb-3 text-sm font-semibold text-slate-400 uppercase tracking-wide">Trivia</h4>
      <div id="${p.key}-trivia" class="player-trivia-container text-slate-300 leading-relaxed"></div>
    </div>
  </article>`
