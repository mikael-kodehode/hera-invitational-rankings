import loadPlayerStatPage from "./pages/playerStats";
// import loadOverallStatPage from "./pages/overallStats";
import { getCivStats, loadHeatmap } from "./shared/api";
import { desktopSidebar, mobileNav } from "./shared/components";
import { createCharts, initSidebarToggle } from "./shared/functions";
import type { IPlayerStatDBItem } from "./types";
import './style.css'
import './stats.css'

const playerStats = await getCivStats() as IPlayerStatDBItem[]
// const overallStats = await getOverallStats()
const root = document.querySelector("#stats-app");
const day9Stats = playerStats.find(player => player.name === 'Day9')
const heatmap = await loadHeatmap(day9Stats?.id)
if (root && day9Stats) {
  console.log(day9Stats)
  root.innerHTML = `
    ${desktopSidebar('stats')}
    ${mobileNav('stats')}
    <main id="statistics-main" class="ml-[143px]">
      ${loadPlayerStatPage(day9Stats, heatmap)}
    </main>
    `
  requestAnimationFrame(() => {
    createCharts(day9Stats);
  });
}


initSidebarToggle()
//loadOverallStatPage(overallStats!)
