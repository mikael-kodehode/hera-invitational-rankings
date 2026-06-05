import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

import './style.css'

import { desktopSidebar, mobileNav, renderPlayerProfile, toggleButton } from './shared/components'
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
        <a href="/"><span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">Hera's</span> Invitational Rankings<a/>
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
    <section id="ratings" class="for-scroll-observer px-4 md:px-8 mt-8 mb-12">
      <div class="max-w-5xl mx-auto bg-slate-900 rounded-xl shadow-xl border border-slate-800 overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div class="flex">  
            <h2 class="text-lg font-semibold text-slate-100 flex items-center gap-2">
              <i class="fa fa-trophy text-amber-500"></i>
              Leaderboard 
            </h2>

	          <svg fill="#fff" id="refresh-leaderboard" class="icon refresh" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m23.8995816 10.3992354c0 .1000066-.1004184.1000066-.1004184.2000132 0 0 0 .1000066-.1004184.1000066-.1004184.1000066-.2008369.2000132-.3012553.2000132-.1004184.1000066-.3012552.1000066-.4016736.1000066h-6.0251046c-.6025105 0-1.0041841-.4000264-1.0041841-1.00006592 0-.60003954.4016736-1.00006591 1.0041841-1.00006591h3.5146443l-2.8117154-2.60017136c-.9037657-.90005932-1.9079498-1.50009886-3.0125523-1.90012523-2.0083682-.70004614-4.2175733-.60003954-6.12552305.30001977-2.0083682.90005932-3.41422594 2.50016478-4.11715481 4.5002966-.20083682.50003295-.80334728.80005275-1.30543933.60003954-.50209205-.10000659-.80334728-.70004613-.60251046-1.20007909.90376569-2.60017136 2.71129707-4.60030318 5.12133891-5.70037568 2.41004184-1.20007909 5.12133894-1.30008569 7.63179914-.40002637 1.4058578.50003296 2.7112971 1.30008569 3.7154812 2.40015819l3.0125523 2.70017795v-3.70024386c0-.60003955.4016736-1.00006591 1.0041841-1.00006591s1.0041841.40002636 1.0041841 1.00006591v6.00039545.10000662c0 .1000066 0 .2000132-.1004184.3000197zm-3.1129707 3.7002439c-.5020921-.2000132-1.1046025.1000066-1.3054394.6000396-.4016736 1.1000725-1.0041841 2.200145-1.9079497 3.0001977-1.4058578 1.5000989-3.5146444 2.3001516-5.623431 2.3001516-2.10878662 0-4.11715482-.8000527-5.72384938-2.4001582l-2.81171548-2.6001714h3.51464435c.60251046 0 1.0041841-.4000263 1.0041841-1.0000659 0-.6000395-.40167364-1.0000659-1.0041841-1.0000659h-6.0251046c-.10041841 0-.10041841 0-.20083682 0s-.10041841 0-.20083682 0c0 0-.10041841 0-.10041841.1000066-.10041841 0-.20083682.1000066-.20083682.2000132s0 .1000066-.10041841.1000066c0 .1000066-.10041841.1000066-.10041841.2000132v.2000131.1000066 6.0003955c0 .6000395.40167364 1.0000659 1.0041841 1.0000659s1.0041841-.4000264 1.0041841-1.0000659v-3.7002439l2.91213389 2.8001846c1.80753138 2.0001318 4.31799163 3.0001977 7.02928871 3.0001977 2.7112971 0 5.2217573-1.0000659 7.1297071-2.9001911 1.0041841-1.0000659 1.9079498-2.3001516 2.4100418-3.7002439.1004185-.6000395-.2008368-1.2000791-.7029288-1.3000857z" transform=""/></svg>          
          </div>
          ${toggleButton}        
        </div>
        <div class="w-full overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-slate-800 text-slate-300 text-xs uppercase tracking-wider">
                <!-- STICKY HEADER # -->
                <th class="sticky left-0 z-20 bg-slate-800 px-4 py-3 text-center font-semibold w-10">#</th>
                
                <!-- STICKY HEADER PLAYER -->
                <th class="sticky left-10 z-20 bg-slate-800 px-4 py-3 text-center font-semibold shadow-[4px_0_8px_-4px_rgba(0,0,0,0.3)]">
                  <div class="inline-block text-left max-w-[120px]">Player</div>
                </th>
                
                <!-- REST OF SCROLLABLE HEADERS -->
                <th class="primary-stat sortable desc px-4 py-3 text-center font-semibold cursor-pointer hover:text-white" data-sort="highest_rating">Peak (behind)</th>
                <th class="primary-stat sortable collapse-win-percentage px-4 py-3 text-center font-semibold cursor-pointer hover:text-white" data-sort="win_percentage">W%</th>
                <th class="primary-stat sortable collapse-streak px-4 py-3 text-center font-semibold cursor-pointer hover:text-white" data-sort="streak">Streak</th>
                <th class="primary-stat mobile-var px-4 py-3 text-center font-semibold cursor-pointer hover:text-white text-slate-300 text-xs uppercase tracking-wider" id="mobile-var-th">
                  <span id="mobile-var-label">Streak</span>
                </th>
                <th class="primary-stat sortable px-4 py-3 text-center font-semibold cursor-pointer hover:text-white" data-sort="matches_played">1v1</th>
                <!-- SECONDARY STATS -->
                <th class="primary-stat hidden sortable px-4 py-3 text-center font-semibold cursor-pointer hover:text-white">Fav Civs</th>
                <th class="primary-stat hidden sortable px-4 py-3 text-center font-semibold cursor-pointer hover:text-white">Best Civ</th>
                <th class="primary-stat hidden sortable px-4 py-3 text-center font-semibold cursor-pointer hover:text-white">Best Map</th>
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
