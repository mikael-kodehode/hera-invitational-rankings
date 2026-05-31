import { fetchPlayerData } from "./api";
import { Links } from "../types";
import type { IDatabaseItem } from "../types";

let currentSortColumn = 'rating';
let isAscending = false;
let internalPlayerData: Record<string, IDatabaseItem> = {};

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

  ratingTable.innerHTML = "";
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
    return 0;
  });

  for (let i = 0; i < playerArray.length; i++) {
    const player = playerArray[i];
    const tr = document.createElement("tr");
    const rank = i + 1;
    const rankHtml = rank === 1
      ? '<span class="text-amber-400 font-bold" title="1st"><i class="fa fa-trophy"></i></span>'
      : rank === 2
      ? '<span class="text-slate-300 font-bold" title="2nd"><i class="fa fa-medal"></i></span>'
      : rank === 3
      ? '<span class="text-amber-700 font-bold" title="3rd"><i class="fa fa-medal"></i></span>'
      : `<span class="text-slate-400 font-medium">${rank}</span>`

    tr.className = 'hover:bg-slate-800/50 transition-colors border-b border-slate-800 last:border-b-0';
    tr.innerHTML = `
      <td class="px-4 py-3 text-center text-sm w-10">${rankHtml}</td>
      <td class="rating-table-name-column px-4 py-3 text-center">
        <div class="inline-block text-left w-[160px]">
          <div class="flex items-center gap-2">
            <span class="fi fi-${player.nationality} rounded-sm shadow-sm"></span>
            <div class="truncate">
              <div class="font-semibold text-slate-100 truncate">${player.name}</div>
              <div class="text-xs text-slate-400 truncate">${player.username}</div>
            </div>
          </div>
        </div>
      </td>
      <td class="px-4 py-3 text-center font-bold text-amber-400">${player.rating}</td>
      <td class="collapse-win-percentage px-4 py-3 text-center text-slate-300">${player.win_percentage}%</td>
      <td class="collapse-streak px-4 py-3 text-center">
        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${player.streak > 0 ? 'bg-emerald-900/30 text-emerald-400' : player.streak < 0 ? 'bg-red-900/30 text-red-400' : 'bg-slate-800 text-slate-400'}">
          ${player.streak > 0 ? '+' : ''}${player.streak}
        </span>
      </td>
      <td class="px-4 py-3 text-center text-slate-300">${player.matches_played}</td>
      <td class="live-tracker-td px-4 py-3 text-center min-w-[110px] overflow-visible">
        <span class="relative inline-block">
          <a href='${Links.twitch}${player.twitch}' target='_blank' title="Watch ${player.name} on Twitch" class="text-slate-400 hover:text-purple-400 transition-colors">
            <i class="fa-brands fa-twitch text-lg"></i>
          </a>
          ${player.live
            ? `<span class="absolute left-full top-1/2 -translate-y-1/2 ml-3 inline-flex items-center gap-1 text-red-500 text-[10px] font-bold whitespace-nowrap"><span class="live-dot"></span>LIVE</span>`
            : ''}
        </span>
      </td>`
    ratingTable.appendChild(tr);
  }
}

export const handleTableSort = (columnKey: string) => {
  if (currentSortColumn === columnKey) {
    isAscending = !isAscending;
  } else {
    currentSortColumn = columnKey;
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

export const initiateListeners = () => {
  document.querySelector('thead')?.addEventListener('click', (event) => {
    const sortKey = (event.target as HTMLElement).getAttribute('data-sort');
    if (sortKey) handleTableSort(sortKey);
  });
}
