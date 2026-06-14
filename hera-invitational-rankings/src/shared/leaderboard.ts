import { fetchPlayerData } from "./api";
import { Links } from "../types";
import type { IDatabaseItem } from "../types";
import { insertPlayerData } from "./functions";

let currentSortColumn = 'highest_rating';
let isAscending = false;
let internalPlayerData: Record<string, IDatabaseItem> = {};

const columnSortDefaults: Record<string, boolean> = {
  live: true,
};

export const initiatePlayerData = async () => {
  const playerData = await fetchPlayerData()
  if (!playerData) throw new Error("playerData falsy")
  return playerData.reduce((acc, item) => {
    acc[item.name] = item;
    return acc;
  }, {} as Record<string, IDatabaseItem>)
}

export const fillRatingTable = (playerData: Record<string, IDatabaseItem>) => {
  internalPlayerData = playerData;
  renderEngine()
}

const renderEngine = () => {
  const ratingTable = document.querySelector("#ratings-table");
  if (!ratingTable) return;

  const fragment = document.createDocumentFragment();
  const playerArray = Object.values(internalPlayerData);

  playerArray.sort((a, b) => {
    const valueA = a[currentSortColumn as keyof IDatabaseItem];
    const valueB = b[currentSortColumn as keyof IDatabaseItem];

    if (typeof valueA === 'boolean' && typeof valueB === 'boolean') {
      if (valueA === valueB) return 0;
      return isAscending ? (valueA ? -1 : 1) : (valueA ? 1 : -1);
    }
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }
    if (valueA < valueB) return isAscending ? -1 : 1;
    if (valueA > valueB) return isAscending ? 1 : -1;
    return 0
  });

  
  for (let i = 0; i < playerArray.length; i++) {
    
    const player = playerArray[i];
    const current = player.rating
    const peak = player.highest_rating
    const gap = peak - current;

    let status =
      gap <= 50 ? "good" :
      gap <= 100 ? "medium" :
      "bad";
    const progress = `${gap}%`;
    const tr = document.createElement("tr");
    const rank = i + 1;
    const rankHtml = rank === 1
      ? '<span class="text-amber-400 font-bold" title="1st"><i class="fa fa-trophy"></i></span>'
      : rank === 2
      ? '<span class="text-slate-300 font-bold" title="2nd"><i class="fa fa-medal"></i></span>'
      : rank === 3
      ? '<span class="text-amber-700 font-bold" title="3rd"><i class="fa fa-medal"></i></span>'
      : `<span class="text-slate-400 font-medium">${rank}</span>`
    const winPercentage = player.win_percentage
    let shortenedWP = '0'
    if(winPercentage) shortenedWP = winPercentage.toFixed(2)
    const team = player.team
    tr.className = `${team} hover:bg-slate-800/40 transition-colors`;
    tr.innerHTML = `
      <td class="sticky left-0 z-10 bg-slate-900 px-4 py-3 text-center text-sm w-10 border-b border-slate-800">${rankHtml}</td>
        
        <!-- COLUMN 2: PLAYER NAME (Sticky left-10) -->
        <td class="rating-table-name-column sticky left-10 z-10 bg-slate-900 px-4 py-3 border-b border-slate-800 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.3)]">
          <div class="inline-block text-left max-w-[130px] lg:max-w-[100%]">
            <div class="truncate whitespace-nowrap flex items-center gap-2">
              <span class="fi fi-${player.nationality} rounded-sm shadow-sm" min-w-[18.66px]></span>
              <div class="">
                <div class="font-semibold text-slate-100 truncate"><a href=#${player.twitch}>${player.name}</a></div>
                <div class="text-xs text-slate-400">${player.username}</div>
              </div>
              ${player.live
              ? 
              `<div>
                <div class="text-red-500 text-[10px] font-bold whitespace-nowrap"><span class="live-dot"></span>${player.last_game_streamed}</div>
                <div class="hidden lg:block text-[10px] font-bold whitespace-nowrap">${player.last_stream_title}</span>
              </div>`
              : ''}

            </div>
          </div>
        </td>
        
        <!-- COLUMN 3+: REST OF SCROLLABLE DATA (Unchanged) -->
        <td class="primary-stat px-4 py-3 text-center font-bold">
          <div class="rating-pill ${status}" style="--progress:${progress} overflow-auto">
            <span class="peak">${peak}</span>
            <div>
              (-${peak-current}) 
            </div>
            ${peak-current === 0 ? `<span class="peak-badge"><i class="fa-solid fa-fire fire-icon"></i></span>` : ""}
          </div>
        </td>
        <td class="primary-stat collapse-win-percentage px-4 py-3 text-center text-slate-300">${shortenedWP}%</td>
        <td class="primary-stat collapse-streak px-4 py-3 text-center">
          <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${player.streak > 0 ? 'bg-emerald-900/30 text-emerald-400' : player.streak < 0 ? 'bg-red-900/30 text-red-400' : 'bg-slate-800 text-slate-400'}">
            ${player.streak > 0 ? '+' : ''}${player.streak}
          </span>
        </td>
        <td class="primary-stat mobile-var mobile-var-value px-4 py-3 text-center text-slate-300" data-player="${player.name}">
          <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${player.streak > 0 ? 'bg-emerald-900/30 text-emerald-400' : player.streak < 0 ? 'bg-red-900/30 text-red-400' : 'bg-slate-800 text-slate-400'}">
            ${player.streak > 0 ? '+' : ''}${player.streak}
          </span>
        </td>
        <td class="primary-stat px-4 py-3 text-center text-slate-300">${player.matches_played}</td>
        <td class="live-tracker-td px-4 py-3 text-center min-w-[110px] overflow-visible">
          <span class="relative inline-block">
            <a href='${Links.twitch}${player.twitch}' target='_blank' title="Watch ${player.name} on Twitch" class="text-slate-400 hover:text-purple-400 transition-colors">
              <i class="fa-brands fa-twitch text-lg"></i>
            </a>
          </span>
        </td>`
    fragment.appendChild(tr);
  }

  ratingTable.innerHTML = "";
  ratingTable.appendChild(fragment);
}

export const handleTableSort = (columnKey: string) => {
  if (currentSortColumn === columnKey) {
    isAscending = !isAscending;
  } else {
    currentSortColumn = columnKey;
    isAscending = columnKey in columnSortDefaults ? columnSortDefaults[columnKey] : false;
  }
  updateHeaderUI(columnKey);
  renderEngine();
}

const updateHeaderUI = (activeColumn: string) => {
  document.querySelectorAll('th.sortable').forEach(th => {
    th.classList.remove('asc', 'desc');
    if (th.getAttribute('data-sort') === activeColumn) {
      th.classList.add(isAscending ? 'asc' : 'desc');
    }
  });
}

const mobileStats = ['streak', 'win_percentage', 'matches_played'] as const;
const mobileLabels: Record<string, string> = {
  streak: 'Streak',
  win_percentage: 'W%',
  matches_played: '1v1'
};
let mobileStatIndex = 0;

export const initMobileStatCycle = () => {
  document.getElementById('mobile-var-th')?.addEventListener('click', () => {
    mobileStatIndex = (mobileStatIndex + 1) % mobileStats.length;
    const stat = mobileStats[mobileStatIndex];

    const label = document.getElementById('mobile-var-label');
    if (label) label.textContent = mobileLabels[stat];

    document.querySelectorAll<HTMLElement>('.mobile-var-value').forEach(td => {
      const name = td.getAttribute('data-player');
      if (!name) return;
      const player = internalPlayerData[name];
      if (!player) return;
      const val = player[stat as keyof IDatabaseItem];

      if (stat === 'streak') {
        const num = val as number;
        td.innerHTML = `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${num > 0 ? 'bg-emerald-900/30 text-emerald-400' : num < 0 ? 'bg-red-900/30 text-red-400' : 'bg-slate-800 text-slate-400'}">${num > 0 ? '+' : ''}${num}</span>`;
      } else if (stat === 'win_percentage') {
        td.textContent = `${val}%`;
      } else {
        td.textContent = val?.toString() ?? '';
      }
    });
  });
}

export const initiateListeners = () => {
  document.querySelector('thead')?.addEventListener('click', (event) => {
    const sortKey = (event.target as HTMLElement).getAttribute('data-sort');
    if (sortKey) handleTableSort(sortKey);
  });
  document.querySelector('#refresh-leaderboard')?.addEventListener('click', (event) => {
    const el = event.target as HTMLElement
    el.classList.add('loading')
    insertPlayerData()
  })
}
