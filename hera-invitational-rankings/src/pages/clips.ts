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
