import loadPlayerStatPage from "./pages/playerStats";
import loadOverallStatPage from "./pages/overallStats";
import { getCivStats, getOverallStats } from "./shared/api";
import { initSidebarToggle, initiatePlayerStatListeners } from "./shared/functions";
import type { IPlayerStatDBItem } from "./types";
import './style.css'
import './stats.css'
import 'flag-icons/css/flag-icons.min.css';
import { createOverallCharts } from "./shared/charts";

const root = document.querySelector("#stats-app");
if (root) {
  root.innerHTML = `
    <nav class="page-nav fixed top-0 left-0 h-full hidden md:flex flex-col items-center py-3 bg-slate-900 border-r border-slate-700 z-50 overflow-hidden">
      <a href="/" id="nav-stats-sidebar" class="nav-link flex flex-col items-center gap-1.5 py-3 px-2 rounded-lg text-slate-300 hover:text-white transition-colors" title="Ratings">
        <div class="nav-icon-pill w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-colors hover:bg-slate-700 hover:text-white">
          <i class="fa fa-trophy"></i>
        </div>
        <span class="text-[10px] uppercase tracking-wider font-medium">Ratings</span>
      </a>
      <a href="/clips.html" id="nav-clips" class="nav-link flex flex-col items-center gap-1.5 py-3 px-2 rounded-lg text-slate-300 hover:text-white transition-colors" title="Twitch Clips">
        <div class="nav-icon-pill w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-colors hover:bg-slate-700 hover:text-white">
          <i class="fa fa-play"></i>
        </div>
        <span class="text-[10px] uppercase tracking-wider font-medium">Clips</span>
      </a>
      <a href="/statistics.html" id="nav-stats" class="active-page-nav nav-link flex flex-col items-center gap-1.5 py-3 px-2 rounded-lg text-slate-300 hover:text-white transition-colors" title="Statistics">
        <div class="nav-icon-pill w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-colors hover:bg-slate-700 hover:text-white">
          <i class="fa fa-chart-simple"></i>
        </div>
        <span class="text-[10px] uppercase tracking-wider font-medium">Statistics</span>
      </a>
      <div class="w-full flex flex-col flex-1 min-h-0">
        <div class="px-3 pt-4 pb-1">
          <div class="text-[10px] uppercase tracking-wider font-semibold text-slate-500 text-center">Each Stat</div>
        </div>
        <section class="flex-1 overflow-y-auto w-full px-2 space-y-1">
          <a id="Grubby" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-nl rounded-sm shrink-0"></span><span class="pointer-events-none">Grubby</span></a>
          <a id="Day9" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-us rounded-sm shrink-0"></span><span class="pointer-events-none">Day9</span></a>
          <a id="Deathnote" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-ru rounded-sm shrink-0"></span><span class="pointer-events-none">Deathnote</span></a>
          <a id="Knoff" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-se rounded-sm shrink-0"></span><span class="pointer-events-none">Knoff</span></a>
          <a id="SingSing" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-nl rounded-sm shrink-0"></span><span class="pointer-events-none">SingSing</span></a>
          <a id="uThermal" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-nl rounded-sm shrink-0"></span><span class="pointer-events-none">uThermal</span></a>
          <a id="PiG" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-au rounded-sm shrink-0"></span><span class="pointer-events-none">PiG</span></a>
          <a id="Ahmpy" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-us rounded-sm shrink-0"></span><span class="pointer-events-none">Ahmpy</span></a>
          <a id="YamatoCannon" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-se rounded-sm shrink-0"></span><span class="pointer-events-none">YamatoCannon</span></a>
          <a id="iyouxin" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-ua rounded-sm shrink-0"></span><span class="pointer-events-none">iyouxin</span></a>
          <a id="LowKo" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-nl rounded-sm shrink-0"></span><span class="pointer-events-none">LowKo</span></a>
          <a id="MrLlamaSC" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-us rounded-sm shrink-0"></span><span class="pointer-events-none">MrLlamaSC</span></a>
          <a id="CaptainLance" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-us rounded-sm shrink-0"></span><span class="pointer-events-none">CaptainLance</span></a>
          <a id="The Spiffing Brit" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-gb rounded-sm shrink-0"></span><span class="pointer-events-none">The Spiffing Brit</span></a>
          <a id="Pestily" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-au rounded-sm shrink-0"></span><span class="pointer-events-none">Pestily</span></a>
          <a id="OhTofu" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-ca rounded-sm shrink-0"></span><span class="pointer-events-none">OhTofu</span></a>
          <a id="AquaFPS" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-us rounded-sm shrink-0"></span><span class="pointer-events-none">AquaFPS</span></a>
          <a id="Atrioc" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-us rounded-sm shrink-0"></span><span class="pointer-events-none">Atrioc</span></a>
          <a id="Wagamama" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-se rounded-sm shrink-0"></span><span class="pointer-events-none">Wagamama</span></a>
          <a id="Jabo" class="cursor-pointer streamer-article stat-nav-link flex items-center gap-1.5 py-2 px-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"><span class="pointer-events-none fi fi-gb rounded-sm shrink-0"></span><span class="pointer-events-none">Jabo</span></a>
        </section>
          </div>
      <button id="sidebar-toggle" class="sidebar-toggle w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors mt-auto mb-1 shrink-0" title="Toggle sidebar">
        <i class="fa fa-chevron-left text-xs sidebar-toggle-icon"></i>
      </button>
    </naV>

    <main id="statistics-main" class="ml-[143px]">
      <header id="header" class="relative pt-12 pb-10 px-6 text-center bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
        <!-- Subtle dot pattern overlay -->
        <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 20px 20px;"></div>
        <!-- Bottom edge glow -->
        <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
        <h1 class="relative z-10 text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
          <a href="/statistics.html">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
              Total
            </span> statistics over the invitees
          </a>
        </h1>
        <p class="relative z-10 text-slate-400 text-sm mb-6">Statistics between June 1st to present</p>
      </header>
    </main>
  `
}
  const playerStats = (await getCivStats() as IPlayerStatDBItem[])
  if(!playerStats) console.log('Player stats data is falsy', playerStats)
  export const playerStatsSorted = playerStats.sort((a,b) => a.name.localeCompare(b.name))
  const overallStats = await getOverallStats()
  if(overallStats) loadOverallStatPage(overallStats)
  else loadPlayerStatPage()
  initiatePlayerStatListeners(playerStats)
  initSidebarToggle()
  createOverallCharts(playerStats)
