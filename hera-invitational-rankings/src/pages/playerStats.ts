import { footer } from "../shared/components"
import '../stats.css'
import '../style.css'
import type { IPlayerHeatmapSource, IPlayerStatDBItem } from "../types"

const loadPlayerStatPage = (playerStat: IPlayerStatDBItem, heatmap: IPlayerHeatmapSource[]) => {
  console.log(playerStat)
  const mostPlayedCiv = playerStat.player_civ_stats.reduce((best, civ) => civ.games_played > best.games_played ? civ : best)
  const mostPlayedCivWinrate = ((mostPlayedCiv.wins / mostPlayedCiv.games_played)*100).toFixed(1)
  const mostPlayedCivMaps = playerStat.player_civ_map_stats_view.filter(combo => combo.civ_name === mostPlayedCiv.civilizations.name)
  const bestMapForMostPlayedCiv = mostPlayedCivMaps.reduce((map, best) => map.winrate > best.winrate ? map : best).map_name.replace('_', ' ')
  const bestCivMaaps = playerStat.player_civ_map_stats_view.filter(combo => combo.civ_name === playerStat.player_best_civ[0].civilizations.name)
  const bestMapForBestCiv = bestCivMaaps.reduce((map,best) => map.winrate > best.winrate ? map : best).map_name.replace('_', ' ')
  const lookup = new Map();
  
  for (const row of heatmap) {
    lookup.set(`${row.civ_name}__${row.map_name}`, row);
  }
  const civs = [...new Set(heatmap.map(r => r.civ_name))];
  const maps = [...new Set(heatmap.map(r => r.map_name))];

  
  // *These functions are for when every player has a good amount of games on so that the confidence don't make everything red*
  // const maxGames = Math.max(...heatmap.map(c => c.games_played));
  // const normalize = (score: number, min = 40, max = 70) => {
  //   return Math.min(1, Math.max(0, (score - min) / (max - min)));
  // };
  // const score = (combo: IPlayerHeatmapSource | undefined) => {
    
  //   if(!combo) return 0
  //   const bayes = bayesianWinrate(combo.winrate, combo.games_played);

  //   const confidence =
  //     Math.log(combo.games_played + 1) /
  //     Math.log(maxGames + 1);

  //   return bayes * confidence;
  // };

  // const getHeatColor = (cell: IPlayerHeatmapSource | undefined) => {
  //   if (!cell || cell.games_played === 0) {
  //     return "rgba(148, 163, 184, 0.15)"; // slate-400/15
  //   }
  //   const SATURATION_GAMES = 20;
  //   const k = 10;
  //   const score = bayesianWinrate(cell.winrate, cell.games_played) * (cell.games_played / (cell.games_played + SATURATION_GAMES))
  //   const t = Math.min(1, Math.max(0, score / 100));

  //   const hue = t * 120;

  //   return `hsl(${hue}, 70%, 45%)`;
  // };

  const getCellStyle = (cell: IPlayerHeatmapSource | undefined) => {
    if (!cell || cell?.games_played === 0) {
      const bg = "rgba(148,163,184,0.15)"
      const text = 'white'
      return { bg, text }
    } 
    const winrate = cell ? cell.winrate : 0;
    const games = cell ? cell.games_played : 0;
    const hue = winrate >= 55 ? 120 : winrate >= 45 ? 60 : 0;

    const confidence = games / (games + 10);

    const bg = `hsla(${hue}, 80%, 45%, ${1 - (0.3 + confidence * 0.7)})`;

    const text = winrate < 45 ? "#ffffff" : "#0f172a"; // white on red

    return { bg, text };  
  }

  return `
    <header id="header" class="relative pt-12 pb-10 px-6 text-center bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      <!-- Subtle dot pattern overlay -->
      <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 20px 20px;"></div>
      <!-- Bottom edge glow -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
      <h1 class="relative z-10 text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
        <a href="/statistics.html">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
            ${playerStat.name}
          </span> Statistics
        </a>
      </h1>
      <p class="relative z-10 text-slate-400 text-sm mb-6">Statistics between June 1st to present</p>
      <p class="relative z-10 text-slate-400 text-sm mb-6">This is a preview, but complete stats for Day9. Working on the rest...</p>
    </header>
    <section class="px-4 md:px-8 mt-4 space-y-8 max-w-5xl mx-auto pb-8">

      <article class="bg-slate-900 rounded-xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
        <div class="p-6 md:p-8">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="profile-image-container shrink-0 w-32 md:w-48">
              <img class="player-profile-picture w-full h-56 object-cover rounded-full shadow-md" src="${imageUrls[playerStat.PlayerStatistics.twitch]}" alt="${playerStat.name}" />
            </div>
            <div class="flex-1 flex justify-center items-center min-w-0">
              <h2 class="text-4xl font-bold text-white mb-3">${playerStat.PlayerStatistics.username}</h2>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div class="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-800">
              <span class="block text-2xl font-bold text-amber-500">${mostPlayedCiv.civilizations.name}</span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-star text-slate-500 mr-1.5"></i>Most played Civ</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-800">
              <span class="block text-2xl font-bold text-white">${mostPlayedCiv.games_played}</span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-crosshairs text-slate-500 mr-1.5"></i>Ranked 1v1</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-800">
              <span class="block text-2xl font-bold text-white">${mostPlayedCivWinrate} %</span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-percentage text-slate-500 mr-1.5"></i>Win Rate</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-800">
              <span class="block text-2xl font-bold">${bestMapForMostPlayedCiv}</span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-bolt text-slate-500 mr-1.5"></i>Best map for this Civ</span>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div class="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-800">
              <span class="block text-2xl font-bold text-amber-500">${playerStat.player_best_civ[0].civilizations.name}</span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-star text-slate-500 mr-1.5"></i>Best Civ</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-800">
              <span class="block text-2xl font-bold text-white">${playerStat.player_best_civ[0].games_played}</span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-crosshairs text-slate-500 mr-1.5"></i>Ranked 1v1</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-800">
              <span class="block text-2xl font-bold text-white">${playerStat.player_best_civ[0].winrate} %</span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-percentage text-slate-500 mr-1.5"></i>Win Rate</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-800">
              <span class="block text-2xl font-bold">${bestMapForBestCiv}</span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-bolt text-slate-500 mr-1.5"></i>Best map for this Civ</span>
            </div>
          </div>
        </div>
      </article>
    </section>
    <section class="px-4 md:px-8 mt-4 space-y-8 max-w-5xl mx-auto pb-8">
      <article class="bg-slate-900 p-8 flex justify-center rounded-xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
        <div class="w-[450px] h-[360px]">
          <canvas id="pie-chart-civ-usage"></canvas>
        </div>
        <div class="w-[450px] h-[360px] content-center">
          <canvas id="bar-chart-civ-winrate"></canvas>
        </div>
      </article>
    </section>
    <section class="px-4 md:px-8 mt-4 space-y-8 max-w-5xl mx-auto pb-8">
      <article class="bg-slate-900 p-8 flex justify-center rounded-xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
        <div class="w-[450px] h-[360px]">
          <canvas id="pie-chart-map-matches"></canvas>
        </div>
        <div class="w-[450px] h-[360px] content-center">
          <canvas id="bar-chart-map-winrate"></canvas>
        </div>
      </article>
    </section>
    <section class="px-4 md:px-8 mt-4 space-y-8 max-w-5xl mx-auto pb-8">
      <article class="bg-slate-900 p-8 flex justify-center rounded-xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
        <table class="heatmap">
          <thead>
            <tr>
              <th>Civ / Map</th>
              ${maps.map(m => `<th>${m.replace('_', ' ')}</th>`).join("")}
            </tr>
          </thead>

          <tbody>
            ${civs.map(civ => `
              <tr>
                <td class="font-bold">${civ}</td>

                ${maps.map(map => {
                  const cell: IPlayerHeatmapSource | undefined = lookup.get(`${civ}__${map}`);
                  const { bg, text } = getCellStyle(cell)
                  
                  return `
                    <td
                      style="background:${bg};color: ${text}"
                      class="text-center font-semibold"
                    >
                      ${
                        cell ? cell.games_played === 0 ? "—" : `${cell.winrate.toFixed(1)}% (${cell.games_played})` : "—"
                      }
                    </td>
                  `;
                }).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </article>
    </section>
    ${footer}
  `
}

export default loadPlayerStatPage

const imageUrls = {
  'grubby': '/grubby-profile-picture.jpg',
  'day9tv': '/day9tv-profile-picture.webp',
  'followdeathnote': '/followdeathnote-profile-picture.jpg',
  'knoff': '/knoff-profile-picture.png',
  'singsing': '/singsing-profile-picture.webp',
  'uthermalsc2': '/uthermalsc2-profile-picture.jpg',
  'x5_pig': '/x5_pig-profile-picture.jpg',
  'ahmpy': '/ahmpy-profile-picture.png',
  'yamatocannon': '/yamatocannon-profile-picture.jpg',
  'iyouxin': '/iyouxin-profile-picture.png',
  'lowkotv': '/lowkotv-profile-picture.jpg',
  'mrllamasc': '/mrllamasc-profile-picture.webp',
  'captainlance9': '/captainlance9-profile-picture.jpg',
  'thespiffingbrit': '/thespiffingbrit-profile-picture.webp',
  'pestily': '/pestily-profile-picture.jpg',
  'ohtofu': '/ohtofu-profile-picture.jpg',
  'aquafps': '/aquafps-profile-picture.webp',
  'atrioc': '/atrioc-profile-picture.webp',
  'wagamamatv': '/wagamamatv-profile-picture.jpg',
  'jabo': '/jabo-profile-picture.jpg'
}

