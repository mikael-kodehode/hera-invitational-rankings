import { footer, header } from '../shared/components';
import '../style.css'
import '../clips.css'

export const loadClips = () => {
  const root = document.querySelector("#clips-app");

  if (!root) return;

  root.innerHTML = `
  <!-- Icon Bar (Sidebar - hidden on small screens) -->
    <nav class="page-nav w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
      <a href="/" id="nav-ratings" class="w3-bar-item w3-button nav-link" >
        <i class="fa fa-trophy w3-xxlarge"></i>
        <br/><br/>
        RATINGS
      </a>
      <li id="nav-profiles-icon" class="w3-bar-item">
        <i class="fa fa-user w3-xxlarge"></i>
      </li>
       <a href="/#GrubbyProfile" id="GrubbyButton" class="streamer-article w3-bar-item w3-button nav-link">
        GRUBBY
      </a>
      <a href="/#Day9Profile" id="Day9Button" class="streamer-article w3-bar-item w3-button nav-link">
        DAY9
      </a>
      <a href="/#DeathnoteProfile" id="DeathnoteButton" class="streamer-article w3-bar-item w3-button nav-link">
        DEATHNOTE
      </a>
      <a href="/#GunnarProfile" id="GunnarButton" class="streamer-article w3-bar-item w3-button nav-link">
        GUNNAR
      </a>
      <a href="/#KnoffProfile" id="KnoffButton" class="streamer-article w3-bar-item w3-button nav-link">
        KNOFF
      </a>
      <a href="/#SingSingProfile" id="SingSingButton" class="streamer-article w3-bar-item w3-button nav-link">
        SINGSING
      </a>
      <a href="/#uThermalProfile" id="uThermalButton" class="streamer-article w3-bar-item w3-button nav-link">
        UTHERMAL
      </a>
      <a href="/#PiGProfile" id="PiGButton" class="streamer-article w3-bar-item w3-button nav-link">
        PIG
      </a>
      <a href="/#AhmpyProfile" id="AhmpyButton" class="streamer-article w3-bar-item w3-button nav-link">
        AHMPY
      </a>
      <a href="/#YamatoCannonProfile" id="YamatoCannonButton" class="streamer-article w3-bar-item w3-button nav-link">
        YAMATOCANNON
      </a>
      <a href="/#LowkoProfile" id="LowkoButton" class="streamer-article w3-bar-item w3-button nav-link">
        LOWKO
      </a>
      <a href="/clips.html" id="nav-clips" class="w3-bar-item w3-button nav-link active-page-nav" >
        <i class="fa fa-play w3-xxlarge"></i>
        <br/><br/>
        TWITCH CLIPS
      </a>
    </nav>

    <!-- Navbar on small screens (Hidden on medium and large screens) -->
    <nav class="w3-bottom w3-hide-large w3-hide-medium" id="myNavbar">
      <div class="w3-bar w3-black w3-center w3-small">
        <a href="/" class="nav-link w3-bar-item" style="width:25% !important">Ratings</a>
        <a href="/#GrubbyProfile" class="nav-link w3-bar-item" style="width:25% !important">Grubby</a>
        <a href="/#Day9Profile" class="nav-link w3-bar-item" style="width:25% !important">Day9</a>
        <a href="/#DeathnoteProfile" class="nav-link w3-bar-item" style="width:25% !important">Deathnote</a>
        <a href="/#GunnarProfile" class="nav-link w3-bar-item" style="width:25% !important">Gunnar</a>
        <a href="/#KnoffProfile" class="nav-link w3-bar-item" style="width:25% !important">Knoff</a>
        <a href="/#SingSingProfile" class="nav-link w3-bar-item" style="width:25% !important">SingSing</a>
        <a href="/#uThermalProfile" class="nav-link w3-bar-item" style="width:25% !important">uThermal</a>
        <a href="/#PiGProfile" class="nav-link w3-bar-item" style="width:25% !important">PiG</a>
        <a href="/#AhmpyProfile" class="nav-link w3-bar-item" style="width:25% !important">Ahmpy</a>
        <a href="/#YamatoCannonProfile" class="nav-link w3-bar-item" style="width:25% !important">YamatoCannon</a>
        <a href="/#LowkoProfile" class="nav-link w3-bar-item" style="width:25% !important">LowKo</a>
        <a href="/clips.html" id="twitch-mobile-clips-button" class=" active-page-nav nav-link w3-bar-item clips-button" style="width:25% !important">Twitch Clips</a>
      </div>
    </nav>
    
    <!-- Icon Bar (Sidebar - hidden on small screens) -->
        <!-- Page Content -->
    <div class="" id="main">
      <!-- Header/Home -->
      ${header}
      <section id="gallery-section">
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
  `
}
