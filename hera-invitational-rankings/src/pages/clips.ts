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
            <div id="filter-clips-new" data-sort="new" title="New" class="sort-all-clips active-sort-all cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-sm">
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
  return clips.filter((clip) => sortAfter.includes(clip.profile_id ));
}

export const sortClips = async (sortAfter: SortAfter[] | 'new' | 'popular' | 'random', clips?: IClipsDbItem[]): Promise<IClipsDbItem[] | undefined> => {
  const backupClips: string | null = localStorage.getItem('clips')
  let clipsForuse: IClipsDbItem[] = []
  let sort: 'new' | 'popular' | 'random' = 'new'
  if(clips) return [...clips].sort((a, b) => new Date(b.clip_created_at).getTime() - new Date(a.clip_created_at).getTime())
  else if (backupClips) {
    if(sortAfter === 'new' || sortAfter === 'popular' || sortAfter === 'random') {
      sort = sortAfter
      clipsForuse = JSON.parse(backupClips)
    } else if (!sortAfter.length) {
      clipsForuse = JSON.parse(backupClips)
    } else {
      clipsForuse = filterClips(sortAfter, JSON.parse(backupClips))
      const sortAllNewButton = document.querySelector<HTMLDivElement>('#filter-clips-new')
      const sortAllPopularButton = document.querySelector<HTMLDivElement>('#filter-clips-popular')
      if (!sortAllNewButton || !sortAllPopularButton) {
        console.log("Sort all buttons not loaded. Sorting after default: new")
      } else if(sortAllPopularButton.classList.contains('active-sort-all')) sort = 'popular'
      // If the new button contains active-sort-all - ignore this check because it's new as default
      else sort = 'random'
    }
  } else {
    console.info("Couldn't find clips. Fetching...")
    clipsForuse = await fetchTwitchClips()
  }
  switch (sort) {
    case 'new':
      return [...clipsForuse].sort((a, b) => new Date(b.clip_created_at).getTime() - new Date(a.clip_created_at).getTime())
    case 'popular':
      return [...clipsForuse].sort((a, b) => b.view_count - a.view_count)
    case 'random':
      return [...clipsForuse].sort(() => Math.random() - 0.5)
  
    default: [...clipsForuse].sort(() => Math.random() - 0.5)
      break;
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
            <div class="avatar"><img src="/${clip.twitch_name}-avatar.png"/></div>
            <div class="details">
              <h3 class="clip-name" title="${clip.title}">${clip.title}</h3>
              <p class="broadcaster">${clip.twitch_name}</p>
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
    button.addEventListener('click', async () => {
      const sort = button.getAttribute('data-sort') as 'new' | 'popular'
      
      if(button.classList.contains('active-sort-all')) {
        const sortedClips = await sortClips('random')
        if(!sortedClips) return console.error('clips returned undefined from sorting when getting argument random')
        await insertClips(sortedClips)
        button.classList.remove('active-sort-all')
      } else if(!sortAllNewButton || !sortAllPopularButton) {
        console.error('sort all buttons or one of them is undefined')
        const clips = await sortClips('random')
        if (!clips) return console.error('sortAll event listener -> one of them undefined -> sorted clips came back undefined')
        await insertClips(clips)
      } else if (sortAllNewButton.classList.contains('active-sort-all') || sortAllPopularButton.classList.contains('active-sort-all')) {
        sortAllNewButton.classList.toggle('active-sort-all')
        sortAllPopularButton.classList.toggle('active-sort-all')
        const clips = await sortClips(sort)
        if (!clips) return console.error('sortAll event listener -> one of them contains active-sort-all -> sorted clips came back undefined')
        await insertClips(clips)
      } else {
        button.classList.add('active-sort-all')
        const clips = await sortClips(sort)
        if (!clips) return console.error('sortAll event listener -> one of them contains active-sort-all -> sorted clips came back undefined')
        await insertClips(clips)
      }        
    })
  })

  for (const element of sortButtons) {
    element.addEventListener('click', async (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const button = target.closest(".sortable-clips")
      button?.classList.toggle('active-sort')
      const activeFilteredPlayers = document.querySelectorAll('.active-sort')
      const playerNamesForSorting: SortAfter[] = []
      for (const element of activeFilteredPlayers) {
        playerNamesForSorting.push(element.getAttribute('data-sort') as SortAfter)
      }
      const clips = await sortClips(playerNamesForSorting)
      if(!clips) return console.error("clips from sorting is undefined from event listener", element.getAttribute('data-sort'))
      await insertClips(clips)
    })
  }
}