import { fetchTwitchClips } from '../shared/api';
import type { IClipsDbItem, SortAfter } from '../types';
import { footer, header, desktopSidebar, mobileNav } from '../shared/components';
import '../style.css'
import '../clips.css'
import 'flag-icons/css/flag-icons.min.css';

export const loadClips = () => {
  const root = document.querySelector("#clips-app");

  if (!root) return;

  root.innerHTML = `
  ${desktopSidebar('clips')}
  ${mobileNav('clips')}

    <!-- Main Content -->
    <div id="main" class="pb-20 md:pb-0 min-h-screen flex flex-col" style="margin-left: 63px;">
      ${header}
      <section id="gallery-section" class="select-none px-4 md:px-8 py-8 flex-1">
        <div class="gallery-container">
          <div class="relative z-10 flex items-center pb-3 gap-4 flex-wrap w-1/4 items-end">
            <div id="filter-clips-new" data-sort="new" title="New" class="sort-all-clips active-sort-all-desc cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
              <i class="fa-regular fa-clock"></i>
            </div>
            <div id="filter-clips-popular" data-sort="popular" title="Popular" class="sort-all-clips cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
              <i class="fa-solid fa-fire"></i>
            </div>
          </div>
          <div class="justify-center relative z-10 flex items-end pb-3 gap-3 flex-wrap">
            <div id="filter-clips-Grubby" data-sort="grubby" title="Grubby" class="sortable-clips cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
                <span class="hidden sm:inline">Grubby</span>
              </div>
            <div id="filter-clips-Day9" data-sort="day9tv" title="Day9" class="sortable-clips cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
                <span class="hidden sm:inline">Day9</span>
              </div>
            <div id="filter-clips-Deathnote" data-sort="followdeathnote" title="Deathnote" class="sortable-clips cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
                <span class="hidden sm:inline">Deathnote</span>
              </div>
            <div id="filter-clips-Gunnar" data-sort="gunnar" title="Gunnar" class="sortable-clips cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
                <span class="hidden sm:inline">Gunnar</span>
              </div>
            <div id="filter-clips-Knoff" data-sort="knoff" title="Knoff" class="sortable-clips cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
                <span class="hidden sm:inline">Knoff</span>
              </div>
            <div id="filter-clips-SingSing" data-sort="singsing" title="SingSing" class="sortable-clips cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
                <span class="hidden sm:inline">SingSing</span>
              </div>
            <div id="filter-clips-uThermal" data-sort="uthermalsc2" title="uThermal" class="sortable-clips cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
                <span class="hidden sm:inline">uThermal</span>
              </div>
            <div id="filter-clips-PiG" data-sort="x5_pig" title="PiG" class="sortable-clips cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
                <span class="hidden sm:inline">PiG</span>
              </div>
            <div id="filter-clips-Ahmpy" data-sort="ahmpy" title="Ahmpy" class="sortable-clips cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
                <span class="hidden sm:inline">Ahmpy</span>
              </div>
            <div id="filter-clips-YamatoCannon" data-sort="yamatocannon" title="YamatoCannon" class="sortable-clips cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
                <span class="hidden sm:inline">YamatoCannon</span>
              </div>
            <div id="filter-clips-LowKo" data-sort="lowkotv" title="LowKo" class="sortable-clips cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
                <span class="hidden sm:inline">LowKo</span>
              </div>
            <div id="filter-clips-iyouxin" data-sort="iyouxin" title="iyouxin" class="sortable-clips cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
              <span class="hidden sm:inline">iyouxin</span>
            </div>
          </div>
          <div id="clips-grid" class="clips-grid"></div>
        </div>
      </section>

      <div id="video-modal" class="modal-overlay">
        <div class="modal-content">
          <button type="button" id="close-modal" class="modal-close-btn">&times;</button>
          <div id="iframe-container" class="iframe-container"></div>
        </div>
      </div>

      ${footer}
    </div>
  `
}

export const invokeFetchClip = async () => {
  const data = await fetchTwitchClips()
  localStorage.setItem('clips', JSON.stringify(data))
  return data
}

const filterClips = (sortAfter: SortAfter[], clips: IClipsDbItem[]) => {
  console.log('sortAfter', sortAfter)
  console.log('clips', clips)
  return clips.filter((clip) => sortAfter.includes(clip.twitch_name))
}

export const sortClips = async (clips?: IClipsDbItem[]) => {

  const backupClips: string | null = localStorage.getItem('clips')
  
  const activeFilteredPlayers = document.querySelectorAll('.active-sort')
  const playerNamesForSorting: SortAfter[] = Array.from(activeFilteredPlayers)
    .map(node => node.getAttribute('data-sort') as SortAfter | null)
    .filter((sort): sort is SortAfter => sort !== null);

  let sort: 'new-desc' | 'new-asc' | 'popular-desc' | 'popular-asc' | 'random' | undefined = undefined
  let clipsForUse: IClipsDbItem[] = []
  if(clips) return [...clips].sort((a, b) => new Date(b.clip_created_at).getTime() - new Date(a.clip_created_at).getTime())
  if (backupClips) {
    if (!playerNamesForSorting.length) {
      clipsForUse = JSON.parse(backupClips)
    } else {
      clipsForUse = filterClips(playerNamesForSorting, JSON.parse(backupClips))
    }
  } else {
    console.info("Couldn't find clips. Fetching...")
    clipsForUse = await fetchTwitchClips()
  }
  const sortAllNewButton = document.querySelector<HTMLDivElement>('#filter-clips-new')
  const sortAllPopularButton = document.querySelector<HTMLDivElement>('#filter-clips-popular')
  if (!sortAllNewButton || !sortAllPopularButton) {
    console.log("Sort all buttons not loaded. Sorting after default: new")
  } else if (sortAllNewButton.classList.contains('active-sort-all-desc')) sort = 'new-desc'
  else if (sortAllPopularButton.classList.contains('active-sort-all-desc')) sort = 'popular-desc'
  else if (sortAllNewButton.classList.contains('active-sort-all-asc')) sort = 'new-asc'
  else if (sortAllPopularButton.classList.contains('active-sort-all-asc')) sort = 'popular-asc'
  else { console.log('random');sort = 'random'}
  switch (sort) {
    case 'new-desc':
      return insertClips([...clipsForUse].sort((a, b) => new Date(b.clip_created_at).getTime() - new Date(a.clip_created_at).getTime()))
    case 'new-asc':
      return insertClips([...clipsForUse].sort((a, b) => new Date(a.clip_created_at).getTime() - new Date(b.clip_created_at).getTime()))
    case 'popular-desc':
      return insertClips([...clipsForUse].sort((a, b) => b.view_count - a.view_count))
    case 'popular-asc':
      return insertClips([...clipsForUse].sort((a, b) => a.view_count - b.view_count))
    case 'random':
      return insertClips([...clipsForUse].sort(() => Math.random() - 0.5))
  
    default:
      console.log('default')
      return insertClips([...clipsForUse].sort(() => Math.random() - 0.5))
  } 
}

export const insertClips = async (clips: IClipsDbItem[]) => {
  const clipGrid = document.querySelector<HTMLDivElement>('#clips-grid')
  clipGrid ? clipGrid.innerHTML = '' : ''
  if (!clipGrid) return

  for (const clip of clips) {
    const card = document.createElement('div')
    const pastDate = new Date(clip.clip_created_at);
    const currentDate = new Date();
    const diffInMs = currentDate.getTime() - pastDate.getTime();
    const daysAgo = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
    card.innerHTML =
      `
        <div class="clip-card">
          <button data-clip-id="${clip.twitch_clip_id}" class="thumbnail-wrapper">
            <img class="thumbnail" src="${clip.thumbnail_url}" alt="Clip Thumbnail">
            <div class="badge view-count">${clip.view_count} views</div>
            <div class="badge age">${!daysAgo ? 'Today' : daysAgo === 1 ? 'Yesterday' : `${daysAgo} days ago`}</div>
            <div class="badge duration">0:${clip.duration_seconds < 10 ? `0` : ''}${Math.floor(clip.duration_seconds)}</div>
          </button>
          <div class="clip-info">
            <div class="avatar"><img src="/${clip.twitch_id}-avatar.png"/></div>
            <div class="details">
              <h3 class="clip-name" title="${clip.title}">${clip.title}</h3>
              <p class="broadcaster">${clip.twitch_id}</p>
            </div>
          </div>
        </div>
      `
    clipGrid.appendChild(card)
  }
}

export const initiateSortingListeners = () => {
  const sortAllClipsButtons: NodeListOf<HTMLDivElement> = document.querySelectorAll('.sort-all-clips')
  const sortButtons: NodeListOf<HTMLDivElement> = document.querySelectorAll(".sortable-clips")
  const sortAllNewButton = document.querySelector<HTMLDivElement>('#filter-clips-new')
  const sortAllPopularButton = document.querySelector<HTMLDivElement>('#filter-clips-popular')


  sortAllClipsButtons.forEach(button => {
    button.addEventListener('click', () => {
      if(button.classList.contains('active-sort-all-desc')) {
        button.classList.remove('active-sort-all-desc')
        button.classList.add('active-sort-all-asc')
        sortClips()
      } else if (button.classList.contains('active-sort-all-asc')) {
        button.classList.remove('active-sort-all-asc')
        sortClips()
      } else if (!sortAllNewButton || !sortAllPopularButton) {
        console.error('sort all buttons or one of them is undefined')
        sortClips()
      } else {//if (sortAllNewButton.classList.contains('active-sort-all-desc') || sortAllPopularButton.classList.contains('active-sort-all-desc') || sortAllNewButton.classList.contains('active-sort-all-asc') || sortAllPopularButton.classList.contains('active-sort-all-asc')) {
        sortAllNewButton.classList.remove('active-sort-all-desc')
        sortAllPopularButton?.classList.remove('active-sort-all-desc')
        sortAllNewButton?.classList.remove('active-sort-all-asc')
        sortAllPopularButton?.classList.remove('active-sort-all-asc')
        button.classList.add('active-sort-all-desc')
        sortClips()
      }
    })
  })

  sortButtons.forEach(element => {
    element.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const button = target.closest(".sortable-clips")
      button?.classList.toggle('active-sort')
      sortClips()
    })
  }) 
}
