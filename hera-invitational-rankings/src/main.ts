import './style.css'

import { initiateListeners, insertPlayerData } from './services/functions'
import 'flag-icons/css/flag-icons.min.css';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <head>
    <title>W3.CSS Template</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  </head>
  <body class="">

    <!-- Icon Bar (Sidebar - hidden on small screens) -->
    <nav class="page-nav w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
      <li id="nav-home" class="w3-bar-item w3-button active-page-nav">
        <i class="fa fa-home w3-xxlarge"></i>
        <p>HOME</p>
      </li>
      <li id="nav-ratings" class="w3-bar-item w3-button">
        <i class="fa fa-user w3-xxlarge"></i>
        <p>RATINGS</p>
      </li>
    </nav>

    <!-- Navbar on small screens (Hidden on medium and large screens) -->
    <div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
      <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
        <a href="#" class="w3-bar-item w3-button" style="width:25% !important">HOME</a>
        <a href="#about" class="w3-bar-item w3-button" style="width:25% !important">ABOUT</a>
        <a href="#photos" class="w3-bar-item w3-button" style="width:25% !important">PHOTOS</a>
        <a href="#contact" class="w3-bar-item w3-button" style="width:25% !important">CONTACT</a>
      </div>
    </div>

    <!-- Page Content -->
    <div class="" id="main">
      <!-- Header/Home -->
      <header class="w3-container w3-padding-32 w3-center" id="header">
        <h1 class="w3-jumbo">Hera's Invitational Rankings</h1>
        <p>Hera's links:</p>

        <div class="some-links-container">
          <a href="https://www.youtube.com/channel/UCeqc9aYVAZcRQq9Ey0x26AQ" target="_blank">
            <i class="fa-brands fa-youtube"></i> Youtube
          </a>

          <a href="https://twitch.tv/yourchannel" target="_blank">
            <i class="fa-brands fa-twitch"></i> Twitch
          </a>

          <a href="https://discord.gg/yourinvite" target="_blank">
            <i class="fa-brands fa-discord"></i> Discord
          </a>

          <a href="https://x.com/Hera_Aoe" target="_blank">
            <i class="fa-brands fa-x"></i> Hera_Aoe
          </a>
        </div>
      </header>

      <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="home">
        <nav class="nav-streamer-article container-flex" id="playerProfileNav">
          <div class="active-streamer-article w3-button" id="GrubbyButton">Grubby</div>
          <div class="w3-button" id="Day9Button">Day9</div>
          <div class="w3-button" id="AtriocButton">Atrioc</div>
          <div class="w3-button" id="DeathnoteButton">Deathnote</div>
          <div class="w3-button" id="GunnarButton">Gunnar</div>
          <div class="w3-button" id="CooperButton">Cooper</div>
          <div class="w3-button" id="KnoffButton">Knoff</div>
          <div class="w3-button" id="SingSingButton">SingSing</div>
        </nav>

        <article id="GrubbyProfile" class="player-profile">
          <h3>Grubby</h3>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="grubby-matches" class="w3-xlarge"></span><br>
              Matches
            </div>
            <div class="w3-quarter w3-section">
              <span id="grubby-win-percentage" class="w3-xlarge"></span><br>
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
        </article>
        
        <article  id="Day9Profile" class="player-profile" hidden>
          <h3>Day9</h3>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="day9-matches" class="w3-xlarge"></span><br>
              Matches
            </div>
            <div class="w3-quarter w3-section">
              <span id="day9-win-percentage" class="w3-xlarge"></span><br>
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
        </article>

        <article  id="AtriocProfile" class="player-profile" hidden>
          <h3>Atrioc</h3>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="atrioc-matches" class="w3-xlarge"></span><br>
              Matches
            </div>
            <div class="w3-quarter w3-section">
              <span id="atrioc-win-percentage" class="w3-xlarge"></span><br>
              Win percentage
            </div>
            <div class="w3-quarter w3-section">
              <span id="atrioc-rating" class="w3-xlarge"></span><br>
              Rating
            </div>
            <div class="w3-quarter w3-section">
              <span id="atrioc-streak" class="w3-xlarge"></span><br>
              Streak
            </div>
          </div>
        </article>

        <article  id="DeathnoteProfile" class="player-profile" hidden>
          <h3>Deathnote</h3>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="deathnote-matches" class="w3-xlarge"></span><br>
              Matches
            </div>
            <div class="w3-quarter w3-section">
              <span id="deathnote-win-percentage" class="w3-xlarge"></span><br>
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
        </article>

        <article  id="GunnarProfile" class="player-profile" hidden>
          <h3>Gunnar</h3>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="gunnar-matches" class="w3-xlarge"></span><br>
              Matches
            </div>
            <div class="w3-quarter w3-section">
              <span id="gunnar-win-percentage" class="w3-xlarge"></span><br>
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
        </article>

        <article  id="CooperProfile" class="player-profile" hidden>
          <h3>Cooper</h3>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="cooper-matches" class="w3-xlarge"></span><br>
              Matches
            </div>
            <div class="w3-quarter w3-section">
              <span id="cooper-win-percentage" class="w3-xlarge"></span><br>
              Win percentage
            </div>
            <div class="w3-quarter w3-section">
              <span id="cooper-rating" class="w3-xlarge"></span><br>
              Rating
            </div>
            <div class="w3-quarter w3-section">
              <span id="cooper-streak" class="w3-xlarge"></span><br>
              Streak
            </div>
          </div>
        </article>

        <article  id="KnoffProfile" class="player-profile" hidden>
          <h3>Knoff</h3>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="knoff-matches" class="w3-xlarge"></span><br>
              Matches
            </div>
            <div class="w3-quarter w3-section">
              <span id="knoff-win-percentage" class="w3-xlarge"></span><br>
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
        </article>

        <article  id="SingSingProfile" class="player-profile" hidden>
          <h3>SingSing</h3>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="singsing-matches" class="w3-xlarge"></span><br>
              Matches
            </div>
            <div class="w3-quarter w3-section">
              <span id="singsing-win-percentage" class="w3-xlarge"></span><br>
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
        </article>
      </div>

      <div class="table-container" id="ratings" hidden >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Win %</th>
            </tr>
          </thead>
          <tbody id="ratings-table">
          </tbody>
        </table>
      </div>

      
      <!-- Footer. This section contains an ad for W3Schools Spaces. You can leave it to support us. -->
      <footer class="w3-content w3-padding-64 w3-text-grey w3-large">
      <p>
        *Disclaimer: The number of matches and win percentage might not be completely accurate due to reasons like infrequent updates.

      <!-- End footer -->
      </footer>

      <!-- END PAGE CONTENT -->
    </div>
  </body>
`
document.addEventListener('DOMContentLoaded', () => {
  initiateListeners();
  insertPlayerData();
  console.log('loaded')
});