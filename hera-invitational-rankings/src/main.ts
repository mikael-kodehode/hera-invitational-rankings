import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

import './style.css'

import { desktopSidebar, mobileNav } from './shared/components'
import { initiateListeners, initiateObservers, insertPlayerData, initSidebarToggle } from './shared/functions'
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
      <div class="max-w-5xl mx-auto bg-slate-900 rounded-2xl shadow-xl border border-slate-800 overflow-hidden">
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
                <th class="sortable asc px-4 py-3 text-center font-semibold cursor-pointer hover:text-white" data-sort="rating">Rating</th>
                <th class="sortable collapse-win-percentage px-4 py-3 text-center font-semibold cursor-pointer hover:text-white" data-sort="win_percentage">W%</th>
                <th class="sortable collapse-streak px-4 py-3 text-center font-semibold cursor-pointer hover:text-white" data-sort="streak">Streak</th>
                <th class="sortable px-4 py-3 text-center font-semibold cursor-pointer hover:text-white" data-sort="matches_played">1v1</th>
                <th class="sortable px-4 py-3 text-center font-semibold cursor-pointer hover:text-white min-w-[110px]" data-sort="live">Stream</th>
              </tr>
            </thead>
            <tbody id="ratings-table" class="divide-y divide-slate-800">
              <tr><td colspan="7" class="px-4 py-8 text-center text-slate-400">
                <div class="animate-pulse flex justify-center gap-2">
                  <div class="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <div class="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <div class="w-2 h-2 bg-slate-400 rounded-full"></div>
                </div>
              </td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Player Profiles -->
    <div id="home" class="px-4 md:px-8 space-y-8 max-w-5xl mx-auto pb-8">

      <!-- Grubby -->
      <article id="GrubbyProfile" class="player-profile for-scroll-observer bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
        <div class="p-6 md:p-8">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="profile-image-container shrink-0 w-32 md:w-48">
              <img class="player-profile-picture w-full h-56 object-cover rounded-xl shadow-md" src="/grubby-profile-picture.jpg" alt="Grubby" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-2xl font-bold text-white mb-3">Grubby</h3>
              <div id="grubby-profile-info" class="text-slate-300 leading-relaxed"></div>
              <ul class="streamer-links-ul flex flex-wrap gap-3 mt-4">
                <li><a href="https://www.youtube.com/FollowGrubby" target="_blank" title="YouTube" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-youtube text-red-500"></i></a></li>
                <li><a href="https://www.twitch.tv/grubby" target="_blank" title="Twitch" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-twitch text-purple-500"></i></a></li>
                <li><a href="https://www.aoe2insights.com/user/1819870" target="_blank" title="AoE2 Insights" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/aoeinsights-logo.webp" class="w-5 h-5 object-contain" alt="AoE2 Insights" /></a></li>
                <li><a href="https://en.wikipedia.org/wiki/Grubby" target="_blank" title="Wikipedia" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-wikipedia-w"></i></a></li>
                <li><a href="https://liquipedia.net/warcraft/Grubby" target="_blank" title="Liquipedia" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/liquipedia_icon_menu.png" class="w-5 h-5 object-contain" alt="Liquipedia" /></a></li>
                <li><a href="https://discord.gg/grubby" target="_blank" title="Discord" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-discord text-indigo-500"></i></a></li>
                <li><a href="http://instagram.com/followgrubby" target="_blank" title="Instagram" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-instagram text-pink-500"></i></a></li>
                <li><a href="https://www.tiktok.com/@grubbytiktok" target="_blank" title="TikTok" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-tiktok"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="grubby-matches" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-crosshairs text-slate-500 mr-1.5"></i>Ranked 1v1</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="grubby-win-percentage" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-percentage text-slate-500 mr-1.5"></i>Win Rate</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="grubby-rating" class="block text-2xl font-bold text-amber-500"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-star text-slate-500 mr-1.5"></i>Rating</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="grubby-streak" class="block text-2xl font-bold"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-bolt text-slate-500 mr-1.5"></i>Streak</span>
            </div>
          </div>
          <h4 class="mt-6 mb-3 text-sm font-semibold text-slate-400 uppercase tracking-wide">Trivia</h4>
          <div id="grubby-trivia" class="player-trivia-container text-slate-300 leading-relaxed"></div>
        </div>
      </article>

      <!-- Day9 -->
      <article id="Day9Profile" class="player-profile for-scroll-observer bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
        <div class="p-6 md:p-8">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="profile-image-container shrink-0 w-32 md:w-48">
              <img class="player-profile-picture w-full h-56 object-cover rounded-xl shadow-md" src="/day9-profile-picture.webp" alt="Day9" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-2xl font-bold text-white mb-3">Day9</h3>
              <div id="day9-profile-info" class="text-slate-300 leading-relaxed"></div>
              <ul class="streamer-links-ul flex flex-wrap gap-3 mt-4">
                <li><a href="https://www.youtube.com/day9tv" target="_blank" title="YouTube" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-youtube text-red-500"></i></a></li>
                <li><a href="https://www.twitch.tv/day9" target="_blank" title="Twitch" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-twitch text-purple-500"></i></a></li>
                <li><a href="https://www.aoe2insights.com/user/2065858" target="_blank" title="AoE2 Insights" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/aoeinsights-logo.webp" class="w-5 h-5 object-contain" alt="AoE2 Insights" /></a></li>
                <li><a href="https://en.wikipedia.org/wiki/Sean_Plott" target="_blank" title="Wikipedia" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-wikipedia-w"></i></a></li>
                <li><a href="https://liquipedia.net/starcraft/Day(9)" target="_blank" title="Liquipedia" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/liquipedia_icon_menu.png" class="w-5 h-5 object-contain" alt="Liquipedia" /></a></li>
                <li><a href="https://day9.tv/" target="_blank" title="Day9.tv" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/day9tv-web-logo.webp" class="w-5 h-5" alt="Day9.tv" /></a></li>
                <li><a href="https://discordapp.com/invite/day9tv" target="_blank" title="Discord" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-discord text-indigo-500"></i></a></li>
                <li><a href="https://www.reddit.com/r/day9" target="_blank" title="Reddit" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/iconmonstr-reddit-5.png" class="w-5 h-5" alt="Reddit" /></a></li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="day9-matches" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-crosshairs text-slate-500 mr-1.5"></i>Ranked 1v1</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="day9-win-percentage" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-percentage text-slate-500 mr-1.5"></i>Win Rate</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="day9-rating" class="block text-2xl font-bold text-amber-500"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-star text-slate-500 mr-1.5"></i>Rating</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="day9-streak" class="block text-2xl font-bold"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-bolt text-slate-500 mr-1.5"></i>Streak</span>
            </div>
          </div>
          <h4 class="mt-6 mb-3 text-sm font-semibold text-slate-400 uppercase tracking-wide">Trivia</h4>
          <div id="day9-trivia" class="player-trivia-container text-slate-300 leading-relaxed"></div>
        </div>
      </article>

      <!-- Deathnote -->
      <article id="DeathnoteProfile" class="player-profile for-scroll-observer bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
        <div class="p-6 md:p-8">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="profile-image-container shrink-0 w-32 md:w-48">
              <img class="player-profile-picture w-full h-56 object-cover rounded-xl shadow-md" src="/deathnote-profile-picture.jpg" alt="Deathnote" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-2xl font-bold text-white mb-3">Deathnote</h3>
              <div id="deathnote-profile-info" class="text-slate-300 leading-relaxed"></div>
              <ul class="streamer-links-ul flex flex-wrap gap-3 mt-4">
                <li><a href="https://www.youtube.com/channel/UChGsaIBM_pEKkdXjYcJdpzA" target="_blank" title="YouTube" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-youtube text-red-500"></i></a></li>
                <li><a href="https://www.twitch.tv/followdeathnote" target="_blank" title="Twitch" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-twitch text-purple-500"></i></a></li>
                <li><a href="https://www.aoe2insights.com/user/6481045" target="_blank" title="AoE2 Insights" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/aoeinsights-logo.webp" class="w-5 h-5 object-contain" alt="AoE2 Insights" /></a></li>
                <li><a href="https://liquipedia.net/warcraft/Deathnote" target="_blank" title="Liquipedia" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/liquipedia_icon_menu.png" class="w-5 h-5 object-contain" alt="Liquipedia" /></a></li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="deathnote-matches" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-crosshairs text-slate-500 mr-1.5"></i>Ranked 1v1</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="deathnote-win-percentage" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-percentage text-slate-500 mr-1.5"></i>Win Rate</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="deathnote-rating" class="block text-2xl font-bold text-amber-500"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-star text-slate-500 mr-1.5"></i>Rating</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="deathnote-streak" class="block text-2xl font-bold"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-bolt text-slate-500 mr-1.5"></i>Streak</span>
            </div>
          </div>
          <h4 class="mt-6 mb-3 text-sm font-semibold text-slate-400 uppercase tracking-wide">Trivia</h4>
          <div id="deathnote-trivia" class="player-trivia-container text-slate-300 leading-relaxed"></div>
        </div>
      </article>

      <!-- Gunnar -->
      <article id="GunnarProfile" class="player-profile for-scroll-observer bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
        <div class="p-6 md:p-8">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="profile-image-container shrink-0 w-32 md:w-48">
              <img class="player-profile-picture w-full h-56 object-cover rounded-xl shadow-md" src="/gunnar-profile-picture.webp" alt="Gunnar" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-2xl font-bold text-white mb-3">Gunnar</h3>
              <div id="gunnar-profile-info" class="text-slate-300 leading-relaxed"></div>
              <ul class="streamer-links-ul flex flex-wrap gap-3 mt-4">
                <li><a href="https://www.youtube.com/GunnarDota" target="_blank" title="YouTube" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-youtube text-red-500"></i></a></li>
                <li><a href="https://www.twitch.tv/gunnar" target="_blank" title="Twitch" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-twitch text-purple-500"></i></a></li>
                <li><a href="https://www.aoe2insights.com/user/7304675" target="_blank" title="AoE2 Insights" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/aoeinsights-logo.webp" class="w-5 h-5 object-contain" alt="AoE2 Insights" /></a></li>
                <li><a href="https://liquipedia.net/dota2/Gunnar" target="_blank" title="Liquipedia" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/liquipedia_icon_menu.png" class="w-5 h-5 object-contain" alt="Liquipedia" /></a></li>
                <li><a href="https://www.instagram.com/nico_lopez114" target="_blank" title="Instagram" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-instagram text-pink-500"></i></a></li>
                <li><a href="https://tiktok.com/@gunnardota" target="_blank" title="TikTok" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-tiktok"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="gunnar-matches" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-crosshairs text-slate-500 mr-1.5"></i>Ranked 1v1</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="gunnar-win-percentage" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-percentage text-slate-500 mr-1.5"></i>Win Rate</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="gunnar-rating" class="block text-2xl font-bold text-amber-500"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-star text-slate-500 mr-1.5"></i>Rating</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="gunnar-streak" class="block text-2xl font-bold"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-bolt text-slate-500 mr-1.5"></i>Streak</span>
            </div>
          </div>
          <h4 class="mt-6 mb-3 text-sm font-semibold text-slate-400 uppercase tracking-wide">Trivia</h4>
          <div id="gunnar-trivia" class="player-trivia-container text-slate-300 leading-relaxed"></div>
        </div>
      </article>

      <!-- Knoff -->
      <article id="KnoffProfile" class="player-profile for-scroll-observer bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
        <div class="p-6 md:p-8">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="profile-image-container shrink-0 w-32 md:w-48">
              <img class="player-profile-picture w-full h-56 object-cover rounded-xl shadow-md" src="/knoff-profile-picture.png" alt="Knoff" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-2xl font-bold text-white mb-3">Knoff</h3>
              <div id="knoff-profile-info" class="text-slate-300 leading-relaxed"></div>
              <ul class="streamer-links-ul flex flex-wrap gap-3 mt-4">
                <li><a href="https://www.youtube.com/@campknoff" target="_blank" title="YouTube" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-youtube text-red-500"></i></a></li>
                <li><a href="https://www.twitch.tv/knoff" target="_blank" title="Twitch" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-twitch text-purple-500"></i></a></li>
                <li><a href="https://www.aoe2insights.com/user/228122" target="_blank" title="AoE2 Insights" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/aoeinsights-logo.webp" class="w-5 h-5 object-contain" alt="AoE2 Insights" /></a></li>
                <li><a href="https://liquipedia.net/warcraft/KnOfF" target="_blank" title="Liquipedia" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/liquipedia_icon_menu.png" class="w-5 h-5 object-contain" alt="Liquipedia" /></a></li>
                <li><a href="https://www.campknoff.com/" target="_blank" title="Camp Knoff" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/campknoff.webp" class="w-5 h-5" alt="Camp Knoff" /></a></li>
                <li><a href="https://discord.gg/5aKRjMyGRa" target="_blank" title="Discord" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-discord text-indigo-500"></i></a></li>
                <li><a href="https://www.instagram.com/ptknopf/" target="_blank" title="Instagram" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-instagram text-pink-500"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="knoff-matches" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-crosshairs text-slate-500 mr-1.5"></i>Ranked 1v1</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="knoff-win-percentage" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-percentage text-slate-500 mr-1.5"></i>Win Rate</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="knoff-rating" class="block text-2xl font-bold text-amber-500"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-star text-slate-500 mr-1.5"></i>Rating</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="knoff-streak" class="block text-2xl font-bold"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-bolt text-slate-500 mr-1.5"></i>Streak</span>
            </div>
          </div>
          <h4 class="mt-6 mb-3 text-sm font-semibold text-slate-400 uppercase tracking-wide">Trivia</h4>
          <div id="knoff-trivia" class="player-trivia-container text-slate-300 leading-relaxed"></div>
        </div>
      </article>

      <!-- SingSing -->
      <article id="SingSingProfile" class="player-profile for-scroll-observer bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
        <div class="p-6 md:p-8">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="profile-image-container shrink-0 w-32 md:w-48">
              <img class="player-profile-picture w-full h-56 object-cover rounded-xl shadow-md" src="/singsing-profile-picture.webp" alt="SingSing" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-2xl font-bold text-white mb-3">SingSing</h3>
              <div id="singsing-profile-info" class="text-slate-300 leading-relaxed"></div>
              <ul class="streamer-links-ul flex flex-wrap gap-3 mt-4">
                <li><a href="https://www.youtube.com/channel/UC6c3OP2fWzaH5Nq5kh4m_SA" target="_blank" title="YouTube" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-youtube text-red-500"></i></a></li>
                <li><a href="https://www.twitch.tv/singsing" target="_blank" title="Twitch" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-twitch text-purple-500"></i></a></li>
                <li><a href="https://www.aoe2insights.com/user/255573" target="_blank" title="AoE2 Insights" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/aoeinsights-logo.webp" class="w-5 h-5 object-contain" alt="AoE2 Insights" /></a></li>
                <li><a href="https://liquipedia.net/dota2/SingSing" target="_blank" title="Liquipedia" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/liquipedia_icon_menu.png" class="w-5 h-5 object-contain" alt="Liquipedia" /></a></li>
                <li><a href="https://www.instagram.com/wehsing" target="_blank" title="Instagram" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-instagram text-pink-500"></i></a></li>
                <li><a href="https://www.tiktok.com/@singsingclips" target="_blank" title="TikTok" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-tiktok"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="singsing-matches" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-crosshairs text-slate-500 mr-1.5"></i>Ranked 1v1</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="singsing-win-percentage" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-percentage text-slate-500 mr-1.5"></i>Win Rate</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="singsing-rating" class="block text-2xl font-bold text-amber-500"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-star text-slate-500 mr-1.5"></i>Rating</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="singsing-streak" class="block text-2xl font-bold"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-bolt text-slate-500 mr-1.5"></i>Streak</span>
            </div>
          </div>
          <h4 class="mt-6 mb-3 text-sm font-semibold text-slate-400 uppercase tracking-wide">Trivia</h4>
          <div id="singsing-trivia" class="player-trivia-container text-slate-300 leading-relaxed"></div>
        </div>
      </article>

      <!-- uThermal -->
      <article id="uThermalProfile" class="player-profile for-scroll-observer bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
        <div class="p-6 md:p-8">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="profile-image-container shrink-0 w-32 md:w-48">
              <img class="player-profile-picture w-full h-56 object-cover rounded-xl shadow-md" src="/uthermal-profile-picture.jpg" alt="uThermal" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-2xl font-bold text-white mb-3">uThermal</h3>
              <div id="uthermal-profile-info" class="text-slate-300 leading-relaxed"></div>
              <ul class="streamer-links-ul flex flex-wrap gap-3 mt-4">
                <li><a href="https://www.youtube.com/uthermal" target="_blank" title="YouTube" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-youtube text-red-500"></i></a></li>
                <li><a href="https://www.twitch.tv/uthermalsc2" target="_blank" title="Twitch" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-twitch text-purple-500"></i></a></li>
                <li><a href="https://www.aoe2insights.com/user/4473383" target="_blank" title="AoE2 Insights" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/aoeinsights-logo.webp" class="w-5 h-5 object-contain" alt="AoE2 Insights" /></a></li>
                <li><a href="https://liquipedia.net/starcraft2/UThermal" target="_blank" title="Liquipedia" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/liquipedia_icon_menu.png" class="w-5 h-5 object-contain" alt="Liquipedia" /></a></li>
                <li><a href="https://discord.com/invite/0sOOTkUVcpQxHvTs" target="_blank" title="Discord" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-discord text-indigo-500"></i></a></li>
                <li><a href="https://www.instagram.com/marcxd_" target="_blank" title="Instagram" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-instagram text-pink-500"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="uthermal-matches" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-crosshairs text-slate-500 mr-1.5"></i>Ranked 1v1</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="uthermal-win-percentage" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-percentage text-slate-500 mr-1.5"></i>Win Rate</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="uthermal-rating" class="block text-2xl font-bold text-amber-500"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-star text-slate-500 mr-1.5"></i>Rating</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="uthermal-streak" class="block text-2xl font-bold"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-bolt text-slate-500 mr-1.5"></i>Streak</span>
            </div>
          </div>
          <h4 class="mt-6 mb-3 text-sm font-semibold text-slate-400 uppercase tracking-wide">Trivia</h4>
          <div id="uthermal-trivia" class="player-trivia-container text-slate-300 leading-relaxed"></div>
        </div>
      </article>

      <!-- PiG -->
      <article id="PiGProfile" class="player-profile for-scroll-observer bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
        <div class="p-6 md:p-8">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="profile-image-container shrink-0 w-32 md:w-48">
              <img class="player-profile-picture w-full h-56 object-cover rounded-xl shadow-md" src="/pig-profile-picture.jpg" alt="PiG" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-2xl font-bold text-white mb-3">PiG</h3>
              <div id="pig-profile-info" class="text-slate-300 leading-relaxed"></div>
              <ul class="streamer-links-ul flex flex-wrap gap-3 mt-4">
                <li><a href="https://www.youtube.com/PiGstarcraft" target="_blank" title="YouTube" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-youtube text-red-500"></i></a></li>
                <li><a href="https://www.twitch.tv/x5_pig" target="_blank" title="Twitch" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-twitch text-purple-500"></i></a></li>
                <li><a href="https://www.aoe2insights.com/user/5735770" target="_blank" title="AoE2 Insights" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/aoeinsights-logo.webp" class="w-5 h-5 object-contain" alt="AoE2 Insights" /></a></li>
                <li><a href="https://liquipedia.net/starcraft2/PiG" target="_blank" title="Liquipedia" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/liquipedia_icon_menu.png" class="w-5 h-5 object-contain" alt="Liquipedia" /></a></li>
                <li><a href="https://www.pigstarcraft.com/" target="_blank" title="PiG" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/pig-web-logo.png" class="w-5 h-5" alt="PiG" /></a></li>
                <li><a href="https://www.patreon.com/cw/PiGSC2" target="_blank" title="Patreon" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-patreon text-orange-500"></i></a></li>
                <li><a href="https://discord.gg/SkhbzCM" target="_blank" title="Discord" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-discord text-indigo-500"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="pig-matches" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-crosshairs text-slate-500 mr-1.5"></i>Ranked 1v1</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="pig-win-percentage" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-percentage text-slate-500 mr-1.5"></i>Win Rate</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="pig-rating" class="block text-2xl font-bold text-amber-500"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-star text-slate-500 mr-1.5"></i>Rating</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="pig-streak" class="block text-2xl font-bold"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-bolt text-slate-500 mr-1.5"></i>Streak</span>
            </div>
          </div>
          <h4 class="mt-6 mb-3 text-sm font-semibold text-slate-400 uppercase tracking-wide">Trivia</h4>
          <div id="pig-trivia" class="player-trivia-container text-slate-300 leading-relaxed"></div>
        </div>
      </article>

      <!-- Ahmpy -->
      <article id="AhmpyProfile" class="player-profile for-scroll-observer bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
        <div class="p-6 md:p-8">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="profile-image-container shrink-0 w-32 md:w-48">
              <img class="player-profile-picture w-full h-56 object-cover rounded-xl shadow-md" src="/ahmpy-profile-picture.png" alt="Ahmpy" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-2xl font-bold text-white mb-3">Ahmpy</h3>
              <div id="ahmpy-profile-info" class="text-slate-300 leading-relaxed"></div>
              <ul class="streamer-links-ul flex flex-wrap gap-3 mt-4">
                <li><a href="https://www.youtube.com/@Ahmpy" target="_blank" title="YouTube" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-youtube text-red-500"></i></a></li>
                <li><a href="https://www.twitch.tv/ahmpy" target="_blank" title="Twitch" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-twitch text-purple-500"></i></a></li>
                <li><a href="https://www.aoe2insights.com/user/25478303" target="_blank" title="AoE2 Insights" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/aoeinsights-logo.webp" class="w-5 h-5 object-contain" alt="AoE2 Insights" /></a></li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="ahmpy-matches" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-crosshairs text-slate-500 mr-1.5"></i>Ranked 1v1</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="ahmpy-win-percentage" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-percentage text-slate-500 mr-1.5"></i>Win Rate</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="ahmpy-rating" class="block text-2xl font-bold text-amber-500"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-star text-slate-500 mr-1.5"></i>Rating</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="ahmpy-streak" class="block text-2xl font-bold"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-bolt text-slate-500 mr-1.5"></i>Streak</span>
            </div>
          </div>
          <h4 class="mt-6 mb-3 text-sm font-semibold text-slate-400 uppercase tracking-wide">Trivia</h4>
          <div id="ahmpy-trivia" class="player-trivia-container text-slate-300 leading-relaxed"></div>
        </div>
      </article>

      <!-- YamatoCannon -->
      <article id="YamatoCannonProfile" class="player-profile for-scroll-observer bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
        <div class="p-6 md:p-8">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="profile-image-container shrink-0 w-32 md:w-48">
              <img class="player-profile-picture w-full h-56 object-cover rounded-xl shadow-md" src="/yamatocannon-profile-picture.jpg" alt="YamatoCannon" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-2xl font-bold text-white mb-3">YamatoCannon</h3>
              <div id="yamatocannon-profile-info" class="text-slate-300 leading-relaxed"></div>
              <ul class="streamer-links-ul flex flex-wrap gap-3 mt-4">
                <li><a href="https://www.youtube.com/channel/UCRRfSRlDq2ma7xp_8HYvYeA" target="_blank" title="YouTube" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-youtube text-red-500"></i></a></li>
                <li><a href="https://www.twitch.tv/yamatocannon" target="_blank" title="Twitch" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-twitch text-purple-500"></i></a></li>
                <li><a href="https://www.aoe2insights.com/user/25503675" target="_blank" title="AoE2 Insights" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/aoeinsights-logo.webp" class="w-5 h-5 object-contain" alt="AoE2 Insights" /></a></li>
                <li><a href="https://liquipedia.net/leagueoflegends/YamatoCannon" target="_blank" title="Liquipedia" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/liquipedia_icon_menu.png" class="w-5 h-5 object-contain" alt="Liquipedia" /></a></li>
                <li><a href="https://discord.gg/ycsdVJJuFP" target="_blank" title="Discord" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-discord text-indigo-500"></i></a></li>
                <li><a href="https://www.instagram.com/yamatocannon1/" target="_blank" title="Instagram" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-instagram text-pink-500"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="yamatocannon-matches" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-crosshairs text-slate-500 mr-1.5"></i>Ranked 1v1</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="yamatocannon-win-percentage" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-percentage text-slate-500 mr-1.5"></i>Win Rate</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="yamatocannon-rating" class="block text-2xl font-bold text-amber-500"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-star text-slate-500 mr-1.5"></i>Rating</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="yamatocannon-streak" class="block text-2xl font-bold"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-bolt text-slate-500 mr-1.5"></i>Streak</span>
            </div>
          </div>
          <h4 class="mt-6 mb-3 text-sm font-semibold text-slate-400 uppercase tracking-wide">Trivia</h4>
          <div id="yamatocannon-trivia" class="player-trivia-container text-slate-300 leading-relaxed"></div>
        </div>
      </article>

      <!-- Lowko -->
      <article id="LowkoProfile" class="player-profile for-scroll-observer bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
        <div class="p-6 md:p-8">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="profile-image-container shrink-0 w-32 md:w-48">
              <img class="player-profile-picture w-full h-56 object-cover rounded-xl shadow-md" src="/lowko-profile-picture.jpg" alt="LowKo" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-2xl font-bold text-white mb-3">LowKo</h3>
              <div id="lowko-profile-info" class="text-slate-300 leading-relaxed"></div>
              <ul class="streamer-links-ul flex flex-wrap gap-3 mt-4">
                <li><a href="https://www.youtube.com/morelowko" target="_blank" title="YouTube" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-youtube text-red-500"></i></a></li>
                <li><a href="https://www.twitch.tv/lowkotv" target="_blank" title="Twitch" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-twitch text-purple-500"></i></a></li>
                <li><a href="https://www.aoe2insights.com/user/338838" target="_blank" title="AoE2 Insights" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/aoeinsights-logo.webp" class="w-5 h-5 object-contain" alt="AoE2 Insights" /></a></li>
                <li><a href="https://liquipedia.net/starcraft2/Lowko" target="_blank" title="Liquipedia" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><img src="/liquipedia_icon_menu.png" class="w-5 h-5 object-contain" alt="Liquipedia" /></a></li>
                <li><a href="http://patreon.com/lowkotv" target="_blank" title="Patreon" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-patreon text-orange-500"></i></a></li>
                <li><a href="https://discord.gg/lowkotv" target="_blank" title="Discord" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-discord text-indigo-500"></i></a></li>
                <li><a href="http://instagram.com/lowkotv" target="_blank" title="Instagram" class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-sm"><i class="fa-brands fa-instagram text-pink-500"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="lowko-matches" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-crosshairs text-slate-500 mr-1.5"></i>Ranked 1v1</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="lowko-win-percentage" class="block text-2xl font-bold text-white"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-percentage text-slate-500 mr-1.5"></i>Win Rate</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="lowko-rating" class="block text-2xl font-bold text-amber-500"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-star text-slate-500 mr-1.5"></i>Rating</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
              <span id="lowko-streak" class="block text-2xl font-bold"></span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-bolt text-slate-500 mr-1.5"></i>Streak</span>
            </div>
          </div>
          <h4 class="mt-6 mb-3 text-sm font-semibold text-slate-400 uppercase tracking-wide">Trivia</h4>
          <div id="lowko-trivia" class="player-trivia-container text-slate-300 leading-relaxed"></div>
        </div>
      </article>
    </div>

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
  console.log('loaded')
});
