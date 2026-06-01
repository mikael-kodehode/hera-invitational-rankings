import { loadClips, insertClips, initiateSortingListeners, invokeFetchClip, sortClips } from "./pages/clips";
import { initSidebarToggle } from "./shared/functions";

loadClips();
const clips = await invokeFetchClip()
const newSortedClips = await sortClips('new-desc', clips) ?? clips
insertClips(newSortedClips);
initSidebarToggle()
initiateSortingListeners()

const closeBtn = document.querySelector<HTMLButtonElement>("#close-modal")
const iframeContainer = document.querySelector<HTMLDivElement>("#iframe-container")
const gallerySection = document.querySelector<HTMLElement>("#gallery-section")
const modal = document.querySelector<HTMLDivElement>("#video-modal")

window.addEventListener('keydown', (event: KeyboardEvent) => {
  if(!modal?.classList.contains('is-active')) return
  if(event.key === 'Escape') closeModal()
})

gallerySection?.addEventListener('click', (event: MouseEvent) => {
  const btn = (event.target as HTMLElement).closest('[data-clip-id]') as HTMLElement | null;
  if (!btn || !modal || !iframeContainer) return;

  const clipId = btn.dataset.clipId;
  const parentDomain = window.location.hostname;

  modal.classList.add('is-active');
  iframeContainer.innerHTML = `
    <iframe
      id="clip-iframe"
      src="https://clips.twitch.tv/embed?clip=${clipId}&parent=${parentDomain}"
      height="100%"
      width="100%"
      allowfullscreen>
    </iframe>
  `
});

export const closeModal = () => {
  if(!modal) return
  if (iframeContainer) iframeContainer.innerHTML = ""

  modal.classList.remove('is-active');
}

closeBtn?.addEventListener('click', closeModal)
modal?.addEventListener('click', closeModal)
