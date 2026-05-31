import { footer, header } from '../shared/components';
import '../style.css'

import 'flag-icons/css/flag-icons.min.css';

const root = document.querySelector("#app")
export const loadHome = () => {
  if(!root) return
  root.innerHTML = `
  <!-- Icon Bar (Sidebar - hidden on small screens) -->
    <nav class="page-nav w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
      <a href="/" id="nav-ratings" class="w3-bar-item w3-button nav-link" >
        <i class="fa fa-trophy w3-xxlarge"></i>
        <br/><br/>
        RATINGS
      </a>
      <li id="nav-profiles-icon" class="w3-bar-item nav-link">
        <i class="fa fa-user w3-xxlarge"></i>
      </li>
       <a href="#GrubbyProfile" id="GrubbyButton" class="streamer-article w3-bar-item w3-button nav-link">
        GRUBBY
      </a>
      <a href="#Day9Profile" id="Day9Button" class="streamer-article w3-bar-item w3-button nav-link">
        DAY9
      </a>
      <a href="#DeathnoteProfile" id="DeathnoteButton" class="streamer-article w3-bar-item w3-button nav-link">
        DEATHNOTE
      </a>
      <a href="#GunnarProfile" id="GunnarButton" class="streamer-article w3-bar-item w3-button nav-link">
        GUNNAR
      </a>
      <a href="#KnoffProfile" id="KnoffButton" class="streamer-article w3-bar-item w3-button nav-link">
        KNOFF
      </a>
      <a href="#SingSingProfile" id="SingSingButton" class="streamer-article w3-bar-item w3-button nav-link">
        SINGSING
      </a>
      <a href="#uThermalProfile" id="uThermalButton" class="streamer-article w3-bar-item w3-button nav-link">
        UTHERMAL
      </a>
      <a href="#PiGProfile" id="PiGButton" class="streamer-article w3-bar-item w3-button nav-link">
        PIG
      </a>
      <a href="#AhmpyProfile" id="AhmpyButton" class="streamer-article w3-bar-item w3-button nav-link">
        AHMPY
      </a>
      <a href="#YamatoCannonProfile" id="YamatoCannonButton" class="streamer-article w3-bar-item w3-button nav-link">
        YAMATOCANNON
      </a>
      <a href="#LowkoProfile" id="LowkoButton" class="streamer-article w3-bar-item w3-button nav-link">
        LOWKO
      </a>
      <a href="/clips.html" id="nav-clips" class="w3-bar-item w3-button nav-link clips-button" >
        <i class="fa fa-play w3-xxlarge"></i>
        <br/><br/>
        TWITCH CLIPS
      </a>
    </nav>

    <!-- Navbar on small screens (Hidden on medium and large screens) -->
    <nav class="w3-bottom w3-hide-large w3-hide-medium" id="myNavbar">
      <div class="w3-bar w3-black w3-center w3-small">
        <a href="/" id="nav-mobile-ratings" class="nav-link w3-bar-item active-page-nav" style="width:25% !important">Ratings</a>
        <a href="#GrubbyProfile" class="nav-link w3-bar-item" style="width:25% !important">Grubby</a>
        <a href="#Day9Profile" class="nav-link w3-bar-item" style="width:25% !important">Day9</a>
        <a href="#DeathnoteProfile" class="nav-link w3-bar-item" style="width:25% !important">Deathnote</a>
        <a href="#GunnarProfile" class="nav-link w3-bar-item" style="width:25% !important">Gunnar</a>
        <a href="#KnoffProfile" class="nav-link w3-bar-item" style="width:25% !important">Knoff</a>
        <a href="#SingSingProfile" class="nav-link w3-bar-item" style="width:25% !important">SingSing</a>
        <a href="#uThermalProfile" class="nav-link w3-bar-item" style="width:25% !important">uThermal</a>
        <a href="#PiGProfile" class="nav-link w3-bar-item" style="width:25% !important">PiG</a>
        <a href="#AhmpyProfile" class="nav-link w3-bar-item" style="width:25% !important">Ahmpy</a>
        <a href="#YamatoCannonProfile" class="nav-link w3-bar-item" style="width:25% !important">YamatoCannon</a>
        <a href="#LowkoProfile" class="nav-link w3-bar-item" style="width:25% !important">LowKo</a>
        <a href="/clips.html" id="twitch-mobile-clips-button" class="nav-link w3-bar-item clips-button" style="width:25% !important" onClick="stateChangeClipsButtons" >Twitch Clips</a>
      </div>
    </nav>
    <!-- Icon Bar (Sidebar - hidden on small screens) -->
  
    <!-- Page Content -->
    <div class="" id="main">
      <!-- Header/Home -->
      ${header}
      <div class="table-container for-scroll-observer" id="nav-ratings" >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th class="sortable asc" data-sort="rating">Rating</th>
              <th class="sortable collapse-win-percentage" data-sort="win_percentage">W%</th>
              <th class="sortable collapse-streak" data-sort="streak">Streak</th>
              <th class="sortable" data-sort="matches_played">1v1</th>
              <th class="sortable" data-sort="live"></th>
            </tr>
            </thead>
            <tbody id="ratings-table">
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>
      </div>

      <div class="w3-content w3-justify w3-padding-64 hidden" id="home">
        <article id="GrubbyProfile" class="player-profile for-scroll-observer">
          <h3>Grubby</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="grubby-profile-info"></div>
            </div>
            <div class="profile-image-container">
              <img class="player-profile-picture" src="/grubby-profile-picture.jpg"/>
            </div>
          </div>
          <ul class="streamer-links-ul">
            <li title="https://www.youtube.com/FollowGrubby">
              <a href="https://www.youtube.com/FollowGrubby" target="_blank">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li title="https://www.twitch.tv/grubby">
              <a href="https://www.twitch.tv/grubby" target="_blank">
                <i class="fa-brands fa-twitch"></i> 
              </a>
            </li>
            <li title="https://www.aoe2insights.com/user/1819870">
              <a href="https://www.aoe2insights.com/user/1819870" target="_blank">
                <img  src="/aoeinsights-logo.webp" /> 
              </a>
            </li>
            <li title="https://en.wikipedia.org/wiki/Grubby">
              <a href="https://en.wikipedia.org/wiki/Grubby" target="_blank">
                <i class="fa-brands fa-wikipedia-w"></i> 
              </a>
            </li>
            <li title="https://liquipedia.net/warcraft/Grubby">
              <a href="https://liquipedia.net/warcraft/Grubby" target="_blank">
                <img src="/liquipedia_icon_menu.png" />
              </a>
            </li>
            <li title="https://discord.gg/grubby">
              <a href="https://discord.gg/grubby" target="_blank">
                <i class="fa-brands fa-discord"></i> 
              </a>
            </li>
            <li title="http://instagram.com/followgrubby">
              <a href="http://instagram.com/followgrubby" target="_blank">
                <i class="fa-brands fa-instagram"></i> 
              </a>
            </li>
            <li title="https://www.tiktok.com/@grubbytiktok">
              <a href="https://www.tiktok.com/@grubbytiktok" target="_blank">
                <i class="fa-brands fa-tiktok"></i> 
              </a>
            </li>
          </ul>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="grubby-matches" class="w3-xlarge"></span><br>
              Ranked matches 1v1
            </div>
            <div class="w3-quarter w3-section">
              <span id="grubby-win-percentage" class="w3-xlarge"></span><span class="w3-xlarge"> %</span><br>
              Win percentage
            </div>
            <div class="w3-quarter w3-section">
              <span id="grubby-rating" class="w3-xlarge"></span><br>
              Rating
            </div>
            <div class="w3-quarter w3-section">
              <span id="grubby-streak" class="w3-xlarge"></span><br>
              Streak
            </div>
          </div>
          <h3>Trivia</h3>
          <div id="grubby-trivia" class="player-trivia-container"></div>
        </article>
        
        <article id="Day9Profile" class="player-profile for-scroll-observer">
          <h3>Day9</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="day9-profile-info"></div>
            </div>
            <div class="profile-image-container">
              <img class="player-profile-picture" src="/day9-profile-picture.webp"/>
            </div>
          </div>
          <ul class="streamer-links-ul">
            <li title="https://www.youtube.com/day9tv">
              <a href="https://www.youtube.com/day9tv" target="_blank">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li title="https://www.twitch.tv/day9">
              <a href="https://www.twitch.tv/day9" target="_blank">
                <i class="fa-brands fa-twitch"></i>
              </a>
            </li>
            <li title="https://www.aoe2insights.com/user/2065858">
              <a href="https://www.aoe2insights.com/user/2065858" target="_blank">
                <img  src="/aoeinsights-logo.webp" />
              </a>
            </li>
            <li title="https://en.wikipedia.org/wiki/Sean_Plott">
              <a href="https://en.wikipedia.org/wiki/Sean_Plott" target="_blank">
                <i class="fa-brands fa-wikipedia-w"></i> 
              </a>
            </li>
            <li title="https://liquipedia.net/starcraft/Day(9)">
              <a href="https://liquipedia.net/starcraft/Day(9)" target="_blank">
                <img src="/liquipedia_icon_menu.png" />
              </a>
            </li>
            <li title="https://day9.tv/">
              <a href="https://day9.tv/" target="_blank">
                <img src="/day9tv-web-logo.webp" />
              </a>
            </li>
            <li title="https://discordapp.com/invite/day9tv">
              <a href="https://discordapp.com/invite/day9tv" target="_blank">
                <i class="fa-brands fa-discord"></i> 
              </a>
            </li>
            <li title="https://www.reddit.com/r/day9">
              <a href="https://www.reddit.com/r/day9" target="_blank">
                <img src="/iconmonstr-reddit-5.png" />
              </a>
            </li>
          </ul>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="day9-matches" class="w3-xlarge"></span><br>
              Ranked matches 1v1
            </div>
            <div class="w3-quarter w3-section">
              <span id="day9-win-percentage" class="w3-xlarge"></span><span class="w3-xlarge"> %</span><br>
              Win percentage
            </div>
            <div class="w3-quarter w3-section">
              <span id="day9-rating" class="w3-xlarge"></span><br>
              Rating
            </div>
            <div class="w3-quarter w3-section">
              <span id="day9-streak" class="w3-xlarge"></span><br>
              Streak
            </div>
          </div>
          <h3>Trivia</h3>
          <div id="day9-trivia" class="player-trivia-container"></div>
        </article>

        <article id="DeathnoteProfile" class="player-profile for-scroll-observer" >
          <h3>Deathnote</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="deathnote-profile-info"></div>
            </div>
            <div class="profile-image-container">
              <img class="player-profile-picture" src="/deathnote-profile-picture.jpg"/>
            </div>
          </div>
          <ul class="streamer-links-ul">
            <li title="https://www.youtube.com/channel/UChGsaIBM_pEKkdXjYcJdpzA">
              <a href="https://www.youtube.com/channel/UChGsaIBM_pEKkdXjYcJdpzA" target="_blank">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li title="https://www.twitch.tv/followdeathnote">
              <a href="https://www.twitch.tv/followdeathnote" target="_blank">
                <i class="fa-brands fa-twitch"></i>
              </a>
            </li>
            <li title="https://www.aoe2insights.com/user/6481045">
              <a href="https://www.aoe2insights.com/user/6481045" target="_blank">
                <img src="/aoeinsights-logo.webp" /> 
              </a>
            </li>
            <li title="https://liquipedia.net/warcraft/Deathnote">
              <a href="https://liquipedia.net/warcraft/Deathnote" target="_blank">
                <img src="/liquipedia_icon_menu.png" /> 
              </a>
            </li>
          </ul>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="deathnote-matches" class="w3-xlarge"></span><br>
              Ranked matches 1v1
            </div>
            <div class="w3-quarter w3-section">
              <span id="deathnote-win-percentage" class="w3-xlarge"></span><span class="w3-xlarge"> %</span><br>
              Win percentage
            </div>
            <div class="w3-quarter w3-section">
              <span id="deathnote-rating" class="w3-xlarge"></span><br>
              Rating
            </div>
            <div class="w3-quarter w3-section">
              <span id="deathnote-streak" class="w3-xlarge"></span><br>
              Streak
            </div>
          </div>
          <h3>Trivia</h3>
          <div id="deathnote-trivia" class="player-trivia-container"></div>
        </article>

        <article id="GunnarProfile" class="player-profile for-scroll-observer" >
          <h3>Gunnar</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="gunnar-profile-info"></div>
            </div>
            <div class="profile-image-container">
              <img class="player-profile-picture" src="/gunnar-profile-picture.webp"/>
            </div>
          </div>
          <ul class="streamer-links-ul">
            <li title="https://www.youtube.com/GunnarDota">
              <a href="https://www.youtube.com/GunnarDota" target="_blank">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li title="https://www.twitch.tv/gunnar">
              <a href="https://www.twitch.tv/gunnar" target="_blank">
                <i class="fa-brands fa-twitch"></i>
              </a>
            </li>
            <li title="https://www.aoe2insights.com/user/7304675">
              <a href="https://www.aoe2insights.com/user/7304675" target="_blank">
                <img  src="/aoeinsights-logo.webp" />
              </a>
            </li>
            <li title="https://liquipedia.net/dota2/Gunnar">
              <a href="https://liquipedia.net/dota2/Gunnar" target="_blank">
                <img src="/liquipedia_icon_menu.png" />
              </a>
            </li>
            <li title="https://www.instagram.com/nico_lopez114">
              <a href="https://www.instagram.com/nico_lopez114" target="_blank">
                <i class="fa-brands fa-instagram"></i> 
              </a>
            </li>
            <li title="https://tiktok.com/@gunnardota">
              <a href="https://tiktok.com/@gunnardota" target="_blank">
                <i class="fa-brands fa-tiktok"></i> 
              </a>
            </li>
          </ul>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="gunnar-matches" class="w3-xlarge"></span><br>
              Ranked matches 1v1
            </div>
            <div class="w3-quarter w3-section">
              <span id="gunnar-win-percentage" class="w3-xlarge"></span><span class="w3-xlarge"> %</span><br>
              Win percentage
            </div>
            <div class="w3-quarter w3-section">
              <span id="gunnar-rating" class="w3-xlarge"></span><br>
              Rating
            </div>
            <div class="w3-quarter w3-section">
              <span id="gunnar-streak" class="w3-xlarge"></span><br>
              Streak
            </div>
          </div>
          <h3>Trivia</h3>
          <div id="gunnar-trivia" class="player-trivia-container"></div>
        </article>

        <article id="KnoffProfile" class="player-profile for-scroll-observer" >
          <h3>Knoff</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="knoff-profile-info"></div>
            </div>
            <div class="profile-image-container">
              <img class="player-profile-picture" src="/knoff-profile-picture.png"/>
            </div>
          </div>
          <ul class="streamer-links-ul">
            <li title="https://www.youtube.com/@campknoff">
              <a href="https://www.youtube.com/@campknoff" target="_blank">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li title="https://www.twitch.tv/knoff">
              <a href="https://www.twitch.tv/knoff" target="_blank">
                <i class="fa-brands fa-twitch"></i>
              </a>
            </li>
            <li title="https://www.aoe2insights.com/user/228122">
              <a href="https://www.aoe2insights.com/user/228122" target="_blank">
                <img  src="/aoeinsights-logo.webp" />
              </a>
            </li>
            <li title="https://liquipedia.net/warcraft/KnOfF">
              <a href="https://liquipedia.net/warcraft/KnOfF" target="_blank">
                <img src="/liquipedia_icon_menu.png" />
              </a>
            </li>
            <li title="https://www.campknoff.com/">
              <a href="https://www.campknoff.com/" target="_blank">
                <img src="/campknoff.webp" />
              </a>
            </li>
            <li title="https://discord.gg/5aKRjMyGRa">
              <a href="https://discord.gg/5aKRjMyGRa" target="_blank">
                <i class="fa-brands fa-discord"></i>
              </a>
            </li>
            <li title="https://www.instagram.com/ptknopf/">
              <a href="https://www.instagram.com/ptknopf/" target="_blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="knoff-matches" class="w3-xlarge"></span><br>
              Ranked matches 1v1
            </div>
            <div class="w3-quarter w3-section">
              <span id="knoff-win-percentage" class="w3-xlarge"></span><span class="w3-xlarge"> %</span><br>
              Win percentage
            </div>
            <div class="w3-quarter w3-section">
              <span id="knoff-rating" class="w3-xlarge"></span><br>
              Rating
            </div>
            <div class="w3-quarter w3-section">
              <span id="knoff-streak" class="w3-xlarge"></span><br>
              Streak
            </div>
          </div>
          <h3>Trivia</h3>
          <div id="knoff-trivia" class="player-trivia-container"></div>
        </article>

        <article id="SingSingProfile" class="player-profile for-scroll-observer" >
          <h3>SingSing</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="singsing-profile-info"></div>
            </div>
            <div class="profile-image-container">
              <img class="player-profile-picture" src="/singsing-profile-picture.webp"/>
            </div>
          </div>
          <ul class="streamer-links-ul">
            <li title="https://www.youtube.com/channel/UC6c3OP2fWzaH5Nq5kh4m_SA">
              <a href="https://www.youtube.com/channel/UC6c3OP2fWzaH5Nq5kh4m_SA" target="_blank">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li title="https://www.twitch.tv/singsing">
              <a href="https://www.twitch.tv/singsing" target="_blank">
                <i class="fa-brands fa-twitch"></i>
              </a>
            </li>
            <li title="https://www.aoe2insights.com/user/255573">
              <a href="https://www.aoe2insights.com/user/255573" target="_blank">
                <img  src="/aoeinsights-logo.webp" />
              </a>
            </li>
            <li title="https://liquipedia.net/dota2/SingSing">
              <a href="https://liquipedia.net/dota2/SingSing" target="_blank">
                <img src="/liquipedia_icon_menu.png" />
              </a>
            </li>
            <li title="https://www.instagram.com/wehsing">
              <a href="https://www.instagram.com/wehsing" target="_blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li title="https://www.tiktok.com/@singsingclips">
              <a href="https://www.tiktok.com/@singsingclips" target="_blank">
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </li>
          </ul>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="singsing-matches" class="w3-xlarge"></span><br>
              Ranked matches 1v1
            </div>
            <div class="w3-quarter w3-section">
              <span id="singsing-win-percentage" class="w3-xlarge"></span><span class="w3-xlarge"> %</span><br>
              Win percentage
            </div>
            <div class="w3-quarter w3-section">
              <span id="singsing-rating" class="w3-xlarge"></span><br>
              Rating
            </div>
            <div class="w3-quarter w3-section">
              <span id="singsing-streak" class="w3-xlarge"></span><br>
              Streak
            </div>
          </div>
          <h3>Trivia</h3>
          <div id="singsing-trivia" class="player-trivia-container"></div>
        </article>

        <article id="uThermalProfile" class="player-profile for-scroll-observer" >
          <h3>uThermal</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="uthermal-profile-info"></div>
            </div>
            <div class="profile-image-container">
              <img class="player-profile-picture" src="/uthermal-profile-picture.jpg"/>
            </div>
          </div>
          <ul class="streamer-links-ul">
            <li title="https://www.youtube.com/uthermal">
              <a href="https://www.youtube.com/uthermal" target="_blank">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li title="https://www.twitch.tv/uthermalsc2">
              <a href="https://www.twitch.tv/uthermalsc2" target="_blank">
                <i class="fa-brands fa-twitch"></i>
              </a>
            </li>
            <li title="https://www.aoe2insights.com/user/4473383">
              <a href="https://www.aoe2insights.com/user/4473383" target="_blank">
                <img  src="/aoeinsights-logo.webp" />
              </a>
            </li>
            <li title="https://liquipedia.net/starcraft2/UThermal">
              <a href="https://liquipedia.net/starcraft2/UThermal" target="_blank">
                <img src="/liquipedia_icon_menu.png" />
              </a>
            </li>
            <li title="https://discord.com/invite/0sOOTkUVcpQxHvTs">
              <a href="https://discord.com/invite/0sOOTkUVcpQxHvTs" target="_blank">
                <i class="fa-brands fa-discord"></i>
              </a>
            </li>
            <li title="https://www.instagram.com/marcxd_">
              <a href="https://www.instagram.com/marcxd_" target="_blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="uthermal-matches" class="w3-xlarge"></span><br>
              Ranked matches 1v1
            </div>
            <div class="w3-quarter w3-section">
              <span id="uthermal-win-percentage" class="w3-xlarge"></span><span class="w3-xlarge"> %</span><br>
              Win percentage
            </div>
            <div class="w3-quarter w3-section">
              <span id="uthermal-rating" class="w3-xlarge"></span><br>
              Rating
            </div>
            <div class="w3-quarter w3-section">
              <span id="uthermal-streak" class="w3-xlarge"></span><br>
              Streak
            </div>
          </div>
          <h3>Trivia</h3>
          <div id="uthermal-trivia" class="player-trivia-container"></div>
        </article>

          <article id="PiGProfile" class="player-profile for-scroll-observer" >
          <h3>PiG</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="pig-profile-info"></div>
            </div>
            <div class="profile-image-container">
              <img class="player-profile-picture" src="/pig-profile-picture.jpg"/>
            </div>
          </div>
          <ul class="streamer-links-ul">
            <li title="https://www.youtube.com/PiGstarcraft">
              <a href="https://www.youtube.com/PiGstarcraft" target="_blank">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li title="https://www.twitch.tv/x5_pig">
              <a href="https://www.twitch.tv/x5_pig" target="_blank">
                <i class="fa-brands fa-twitch"></i>
              </a>
            </li>
            <li title="https://www.aoe2insights.com/user/5735770">
              <a href="https://www.aoe2insights.com/user/5735770" target="_blank">
                <img  src="/aoeinsights-logo.webp" />
              </a>
            </li>
            <li title="https://liquipedia.net/starcraft2/PiG">
              <a href="https://liquipedia.net/starcraft2/PiG" target="_blank">
                <img src="/liquipedia_icon_menu.png" />
              </a>
            </li>
            <li title="https://www.pigstarcraft.com/">
              <a href="https://www.pigstarcraft.com/" target="_blank">
                <img src="/pig-web-logo.png" />
              </a>
            </li>
            <li title="https://www.patreon.com/cw/PiGSC2">
              <a href="https://www.patreon.com/cw/PiGSC2" target="_blank">
                <i class="fa-brands fa-patreon"></i>
              </a>
            </li>
            <li title="https://discord.gg/SkhbzCM">
              <a href="https://discord.gg/SkhbzCM" target="_blank">
                <i class="fa-brands fa-discord"></i>
              </a>
            </li>
          </ul>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="pig-matches" class="w3-xlarge"></span><br>
              Ranked matches 1v1
            </div>
            <div class="w3-quarter w3-section">
              <span id="pig-win-percentage" class="w3-xlarge"></span><span class="w3-xlarge"> %</span><br>
              Win percentage
            </div>
            <div class="w3-quarter w3-section">
              <span id="pig-rating" class="w3-xlarge"></span><br>
              Rating
            </div>
            <div class="w3-quarter w3-section">
              <span id="pig-streak" class="w3-xlarge"></span><br>
              Streak
            </div>
          </div>
          <h3>Trivia</h3>
          <div id="pig-trivia" class="player-trivia-container"></div>
        </article>

          <article id="AhmpyProfile" class="player-profile for-scroll-observer" >
          <h3>Ahmpy</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="ahmpy-profile-info"></div>
            </div>
            <div class="profile-image-container">
              <img class="player-profile-picture" src="/ahmpy-profile-picture.png"/>
            </div>
          </div>
          <ul class="streamer-links-ul">
            <li title="https://www.youtube.com/@Ahmpy">
              <a href="https://www.youtube.com/@Ahmpy" target="_blank">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li title="https://www.twitch.tv/ahmpy">
              <a href="https://www.twitch.tv/ahmpy" target="_blank">
                <i class="fa-brands fa-twitch"></i>
              </a>
            </li>
            <li title="https://www.aoe2insights.com/user/25478303">
              <a href="https://www.aoe2insights.com/user/25478303" target="_blank">
                <img  src="/aoeinsights-logo.webp" />
              </a>
            </li>
          </ul>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="ahmpy-matches" class="w3-xlarge"></span><br>
              Ranked matches 1v1
            </div>
            <div class="w3-quarter w3-section">
              <span id="ahmpy-win-percentage" class="w3-xlarge"></span><span class="w3-xlarge"> %</span><br>
              Win percentage
            </div>
            <div class="w3-quarter w3-section">
              <span id="ahmpy-rating" class="w3-xlarge"></span><br>
              Rating
            </div>
            <div class="w3-quarter w3-section">
              <span id="ahmpy-streak" class="w3-xlarge"></span><br>
              Streak
            </div>
          </div>
          <h3>Trivia</h3>
          <div id="ahmpy-trivia" class="player-trivia-container"></div>
        </article>

        <article id="YamatoCannonProfile" class="player-profile for-scroll-observer" >
          <h3>YamatoCannon</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="yamatocannon-profile-info"></div>
            </div>
            <div class="profile-image-container">
              <img class="player-profile-picture" src="/yamatocannon-profile-picture.jpg"/>
            </div>
          </div>
          <ul class="streamer-links-ul">
            <li title="https://www.youtube.com/channel/UCRRfSRlDq2ma7xp_8HYvYeA">
              <a href="https://www.youtube.com/channel/UCRRfSRlDq2ma7xp_8HYvYeA" target="_blank">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li title="https://www.twitch.tv/yamatocannon">
              <a href="https://www.twitch.tv/yamatocannon" target="_blank">
                <i class="fa-brands fa-twitch"></i>
              </a>
            </li>
            <li title="https://www.aoe2insights.com/user/25503675">
              <a href="https://www.aoe2insights.com/user/25503675" target="_blank">
                <img  src="/aoeinsights-logo.webp" />
              </a>
            </li>
            <li title="https://liquipedia.net/leagueoflegends/YamatoCannon">
              <a href="https://liquipedia.net/leagueoflegends/YamatoCannon" target="_blank">
                <img src="/liquipedia_icon_menu.png" />
              </a>
            </li>
            <li title="https://discord.gg/ycsdVJJuFP">
              <a href="https://discord.gg/ycsdVJJuFP" target="_blank">
                <i class="fa-brands fa-discord"></i>
              </a>
            </li>
            <li title="https://www.instagram.com/yamatocannon1/">
              <a href="https://www.instagram.com/yamatocannon1/" target="_blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="yamatocannon-matches" class="w3-xlarge"></span><br>
              Ranked matches 1v1
            </div>
            <div class="w3-quarter w3-section">
              <span id="yamatocannon-win-percentage" class="w3-xlarge"></span><span class="w3-xlarge"> %</span><br>
              Win percentage
            </div>
            <div class="w3-quarter w3-section">
              <span id="yamatocannon-rating" class="w3-xlarge"></span><br>
              Rating
            </div>
            <div class="w3-quarter w3-section">
              <span id="yamatocannon-streak" class="w3-xlarge"></span><br>
              Streak
            </div>
          </div>
          <h3>Trivia</h3>
          <div id="yamatocannon-trivia" class="player-trivia-container"></div>
        </article>

        <article id="LowkoProfile" class="player-profile for-scroll-observer" >
          <h3>LowKo</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="lowko-profile-info"></div>
            </div>
            <div class="profile-image-container">
              <img class="player-profile-picture" src="/lowko-profile-picture.jpg"/>
            </div>
          </div>
          <ul class="streamer-links-ul">
            <li title="https://www.youtube.com/morelowko">
              <a href="https://www.youtube.com/morelowko" target="_blank">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li title="https://www.twitch.tv/lowkotv">
              <a href="https://www.twitch.tv/lowkotv" target="_blank">
                <i class="fa-brands fa-twitch"></i>
              </a>
            </li>
            <li title="https://www.aoe2insights.com/user/338838">
              <a href="https://www.aoe2insights.com/user/338838" target="_blank">
                <img  src="/aoeinsights-logo.webp" />
              </a>
            </li>
            <li title="https://liquipedia.net/starcraft2/Lowko">
              <a href="https://liquipedia.net/starcraft2/Lowko" target="_blank">
                <img src="/liquipedia_icon_menu.png" />
              </a>
            </li>
            <li title="http://patreon.com/lowkotv">
              <a href="http://patreon.com/lowkotv" target="_blank">
                <i class="fa-brands fa-patreon"></i>
              </a>
            </li>
            <li title="https://discord.gg/lowkotv">
              <a href="https://discord.gg/lowkotv" target="_blank">
                <i class="fa-brands fa-discord"></i>
              </a>
            </li>
            <li title="http://instagram.com/lowkotv">
              <a href="http://instagram.com/lowkotv" target="_blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="lowko-matches" class="w3-xlarge"></span><br>
              Ranked matches 1v1
            </div>
            <div class="w3-quarter w3-section">
              <span id="lowko-win-percentage" class="w3-xlarge"></span><span class="w3-xlarge"> %</span><br>
              Win percentage
            </div>
            <div class="w3-quarter w3-section">
              <span id="lowko-rating" class="w3-xlarge"></span><br>
              Rating
            </div>
            <div class="w3-quarter w3-section">
              <span id="lowko-streak" class="w3-xlarge"></span><br>
              Streak
            </div>
          </div>
          <h3>Trivia</h3>
          <div id="lowko-trivia" class="player-trivia-container"></div>
        </article>
      </div>
      ${footer}
      <!-- END PAGE CONTENT -->
    </div>
  `
} 
