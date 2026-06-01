import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

import './style.css'

import { desktopSidebar, mobileNav, renderPlayerProfile } from './shared/components'
import { players } from './shared/players'
import { initiateListeners, initiateObservers, insertPlayerData, initSidebarToggle, initMobileStatCycle } from './shared/functions'
import 'flag-icons/css/flag-icons.min.css';

injectSpeedInsights();
inject()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${desktopSidebar('ratings')}
  ${mobileNav('ratings')}

  <!-- Main Content -->
  <div id="main" class="pb-20 md:pb-0">

    <!-- Header -->
    <header id="header" class="relative pt-12 pb-10 px-6 text-center bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
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

    <!-- Leaderboard Table -->
    <section id="ratings" class="px-4 md:px-8 mt-8 mb-12">
      <div class="max-w-5xl mx-auto bg-slate-900 rounded-xl shadow-xl border border-slate-800 overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <h2 class="text-lg font-semibold text-slate-100 flex items-center gap-2">
            <i class="fa fa-trophy text-amber-500"></i>
            Leaderboard
          </h2>

        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-slate-800 text-slate-300 text-xs uppercase tracking-wider">
                <th class="px-4 py-3 text-center font-semibold w-10">#</th>
                <th class="px-4 py-3 text-center font-semibold"><div class="inline-block text-left w-[160px]">Player</div></th>
                <th class="sortable desc px-4 py-3 text-center font-semibold cursor-pointer hover:text-white" data-sort="rating">Rating</th>
                <th class="sortable collapse-win-percentage px-4 py-3 text-center font-semibold cursor-pointer hover:text-white" data-sort="win_percentage">W%</th>
                <th class="sortable collapse-streak px-4 py-3 text-center font-semibold cursor-pointer hover:text-white" data-sort="streak">Streak</th>
                <th class="mobile-var px-4 py-3 text-center font-semibold cursor-pointer hover:text-white text-slate-300 text-xs uppercase tracking-wider" id="mobile-var-th">
                  <span id="mobile-var-label">Streak</span>
                </th>
                <th class="sortable px-4 py-3 text-center font-semibold cursor-pointer hover:text-white" data-sort="matches_played">1v1</th>
                <th class="sortable px-4 py-3 text-center font-semibold cursor-pointer hover:text-white min-w-[110px]" data-sort="live">Stream</th>
              </tr>
            </thead>
            <tbody id="ratings-table" class="divide-y divide-slate-800">
              <tr class="loading-row"><td colspan="7" class="px-4 py-12 text-center text-slate-400">
                <i class="fa fa-spinner fa-spin text-2xl text-amber-400"></i>
                <p class="mt-2 text-sm text-slate-500">Loading player data...</p>
              </td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Player Profiles -->
    <section id="home" class="px-4 md:px-8 space-y-8 max-w-5xl mx-auto pb-8">
      ${players.map(renderPlayerProfile).join('\n      ')}
    </section>

    <!-- Footer -->
    <footer class="max-w-5xl mx-auto px-4 md:px-8 py-8 text-center text-slate-500 text-sm">
      <p>*This is an unofficial fan site and is not affiliated with Hera, Hera's Invitational, or the event organizers.</p>
    </footer>

  </div>
`

document.addEventListener('DOMContentLoaded', () => {
  initiateListeners();
  insertPlayerData();
  initiateObservers();
  initSidebarToggle();
  initMobileStatCycle();
  console.info('loaded')
});
