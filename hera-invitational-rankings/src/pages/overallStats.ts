import { footer } from "../shared/components";
import '../style.css'
import '../stats.css'
import type { ICivStatsView, IOverallStatsCallResponse } from "../types";

const loadOverallStatPage = async (rawData: IOverallStatsCallResponse) => {
  const mainStatElement = document.querySelector('#statistics-main')
  if(!mainStatElement) throw new Error("Statistic element is not loaded");

  const statsPerCiv = rawData.overallStatsPerCiv
  const overallStats = rawData.overallStats
  const highestWinrate = statsPerCiv
    .filter(i => i.games_played > 3)
    .reduce((best: ICivStatsView | null, civ) => {
      if (!best) return civ;
      return civ.winrate > best.winrate ? civ : best;
  }, null);  
  const mostPopular = statsPerCiv.reduce((best: ICivStatsView | null, civ) => {
    if (!best) return civ;
    return civ.unique_players > best.unique_players ? civ : best;
}, null);



  mainStatElement.innerHTML = `
    <!-- Main Content -->

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
    <section class="select-none px-4 md:px-8 py-8 flex-1">
      <article class="bg-slate-900 rounded-xl shadow-lg border border-slate-800 overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-transform">
        <div class="p-6 md:p-8">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div class="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-800">
              <span class="block text-2xl font-bold text-amber-500">${overallStats.most_played_civ}</span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-star text-slate-500 mr-1.5"></i>Most Games</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-800">
              <span class="block text-2xl font-bold text-amber-500">${mostPopular?.civ_name}</span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-fingerprint text-slate-500 mr-1.5"></i>Most Popular</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-800">
              <span class="block text-2xl font-bold text-amber-500">${highestWinrate?.civ_name}</span>
              <span class="text-xs text-slate-400 uppercase tracking-wide"><i class="fa fa-percentage text-slate-500 mr-1.5"></i>Highest %</span>
            </div>
          </div>
          </div>
        </div>
      </article>
    </section>
    <section>
      <canvas id="overall-bar-games"></canvas>
    </section>


    ${footer}
    </div>
  `
}

export default loadOverallStatPage