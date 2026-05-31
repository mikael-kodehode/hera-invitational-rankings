import { loadClips, insertClips } from "./pages/clips";
import { initSidebarToggle } from "./shared/functions";

loadClips();
insertClips();
initSidebarToggle()

const closeBtn = document.querySelector<HTMLButtonElement>("#close-modal")
const iframeContainer = document.querySelector<HTMLDivElement>("#iframe-container")
const gallerySection = document.querySelector<HTMLElement>("#gallery-section")
const modal = document.querySelector<HTMLDivElement>("#video-modal")

window.addEventListener('keydown', (event: KeyboardEvent) => {
  if(!modal?.classList.contains('is-active')) return
  if(event.key === 'Escape') closeModal()
})

gallerySection?.addEventListener('click', (event: MouseEvent) => {
  const thumbnail = event.target as HTMLElement;
  if (thumbnail && modal) {
    const clipId = (thumbnail as HTMLImageElement).dataset.clipid;
    if(!clipId) return
    const parentDomain = window.location.hostname;

    if(!iframeContainer) return

    modal.classList.add('is-active');
    if(!clipId) return
    iframeContainer.innerHTML = `
      <iframe
        id="clip-iframe"
        src="https://clips.twitch.tv/embed?clip=${clipId}&parent=${parentDomain}"
        height="100%"
        width="100%"
        allowfullscreen>
      </iframe>
    `
  }
});

export const closeModal = () => {
  if(!modal) return
  if (iframeContainer) iframeContainer.innerHTML = ""

  modal.classList.remove('is-active');
}

closeBtn?.addEventListener('click', closeModal)
modal?.addEventListener('click', closeModal)
