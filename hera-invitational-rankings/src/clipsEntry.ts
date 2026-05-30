import { loadClips } from "./pages/clips";
import { insertClips, initSidebarToggle } from "./shared/functions";
loadClips();
insertClips();
initSidebarToggle()

// Grabbing DOM Elements safely with strict casting
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
    
    if(!iframeContainer) return console.error("Clip player container not loaded", iframeContainer)

    // Add layout class to fade the container into view
    modal.classList.add('is-active');
    if(!clipId) return console.error("clipId falsy", clipId)
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

// CLOSE MODAL FUNCTION
export const closeModal = () => {
  if(!modal) return console.log(modal)
  if (iframeContainer) iframeContainer.innerHTML = ""  

  modal.classList.remove('is-active');

} 

// Attach listener actions to trigger close commands
closeBtn?.addEventListener('click', closeModal)
modal?.addEventListener('click', closeModal)