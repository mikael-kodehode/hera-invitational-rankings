import { desktopSidebar, footer, header, mobileNav, overallStatCard } from "../shared/components";
import '../style.css'
import '../stats.css'
import type { IOverallStats } from "../types";
const loadOverallStatPage = async (overallStats: IOverallStats) => {
  return `
  ${desktopSidebar('stats')}
  ${mobileNav('stats')}

    <!-- Main Content -->
    <div id="main" class="pb-20 md:pb-0 min-h-screen flex flex-col">
  ${
      overallStats ? 
      `
      ${header}
      <section class="select-none px-4 md:px-8 py-8 flex-1">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          ${overallStatCard('Total games', overallStats.games_played)}
          ${overallStatCard('Most Played Civ', overallStats.most_played_civ, overallStats.most_played_civ_games)}
          ${overallStatCard('Most Played Map', overallStats.most_played_map, overallStats.most_played_map_games)}
        </div>
      </section>
      <section>
      </section>
      `
      :
      ''
    }
    ${footer}
    </div>
  `
}

export default loadOverallStatPage