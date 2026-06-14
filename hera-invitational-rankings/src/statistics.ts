import loadPlayerStatPage from "./pages/playerStats";
// import loadOverallStatPage from "./pages/overallStats";
import { getCivStats } from "./shared/api";
import { desktopSidebar, mobileNav } from "./shared/components";
import { initSidebarToggle } from "./shared/functions";
import type { IPlayerStatDBItem } from "./types";
import './style.css'
import './stats.css'

const path = window.location.pathname
export const playerStats = (await getCivStats() as IPlayerStatDBItem[]).sort((a,b) => a.name.localeCompare(b.name))
if(path === '/statistics.html') {
  const root = document.querySelector("#stats-app");
  if (root) {
    root.innerHTML = `
    ${desktopSidebar('stats')}
    ${mobileNav('stats')}
    <main id="statistics-main" class="ml-[143px]">
    </main>
    `
  }
  await loadPlayerStatPage(playerStats[0], playerStats)
  initSidebarToggle()
}
// const overallStats = await getOverallStats()
// loadOverallStatPage(overallStats!)
