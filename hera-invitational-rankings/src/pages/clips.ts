import { fetchTwitchClips } from '../shared/api';
import type { IClipsDbItem } from '../types';
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
    <div id="main" class="pb-20 md:pb-0 min-h-screen flex flex-col">
      ${header}
      <section id="gallery-section" class="px-4 md:px-8 py-8 flex-1">
        <div class="gallery-container">
          <h2 class="gallery-title">New clips</h2>
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

const invokeFetchClip = async () => {
  const data = await fetchTwitchClips()
  return data
}

const sortClips = (clips: IClipsDbItem[], sortAfter: 'new' | 'popular') => {
  if (sortAfter === 'popular') return [...clips].sort((a, b) => b.view_count - a.view_count)
  if (sortAfter === 'new') return [...clips].sort((a, b) => new Date(b.clip_created_at).getTime() - new Date(a.clip_created_at).getTime())
  throw new Error("sortAfter is neither new or popular")
}

export const insertClips = async () => {
  const clips = await invokeFetchClip()
  const newSortedClips = sortClips(clips, 'new')
  const clipGrid = document.querySelector<HTMLDivElement>('#clips-grid')
  if (!clipGrid) return

  for (const clip of newSortedClips) {
    const card = document.createElement('div')
    const pastDate = new Date(clip.clip_created_at);
    const currentDate = new Date();
    const diffInMs = currentDate.getTime() - pastDate.getTime();
    const daysAgo = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
    card.innerHTML =
      `
        <div class="clip-card">
          <button class="thumbnail-wrapper">
            <img data-clipId="${clip.twitch_clip_id}" class="thumbnail" src="${clip.thumbnail_url}" alt="Clip Thumbnail">
            <div class="badge view-count">${clip.view_count} views</div>
            <div class="badge duration">${clip.duration_seconds} s</div>
            <div class="badge age">${!daysAgo ? 'Today' : daysAgo === 1 ? 'Yesterday' : `${daysAgo} days ago`}</div>
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
