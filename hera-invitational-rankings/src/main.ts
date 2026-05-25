import './style.css'
import { initiateListeners, insertPlayerData } from './services/functions'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <head>
    <title>W3.CSS Template</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  </head>
  <body class="w3-black">

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
      <header class="w3-container w3-padding-32 w3-center w3-black" id="header">
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
        <h2>Invited players</h2
        <div class="hidden main-content" id="om-content">
        <nav class="" id="playerProfileNav">
          <li class="" id="GrubbyButton">Grubby</li>
          <li class="" id="Day9Button">Day9</li>
          <li class="" id="AtriocButton">Atrioc</li>
        </nav>
        <article id="GrubbyProfile" class="player-profile">
          <h3>Grubby</h3>
          <p class="">
            Jeg heter Mikael Ødegaard. Etter mer enn 2500 arbeidstimer med service og kundekontakt har jeg blitt erfaren i profesjonell kommunikasjon og blitt opptatt av å tilfredsstille folks behov. <br> <br>På grunn av min generasjon har jeg hatt en kjærlighet for data siden jeg var 5 år gammel. Spillene var simplere, men mer imponerende. <br><br>Gjennom hele barndommen hjalp min far meg med å lage ting i Excel. Tabeller og planer etc. Så da jeg fikk min første laptop som 13 år begynte jeg selv med å lage modeller og tabeller i Excel.
          </p>
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
          <p class="">
            Jeg heter Mikael Ødegaard. Etter mer enn 2500 arbeidstimer med service og kundekontakt har jeg blitt erfaren i profesjonell kommunikasjon og blitt opptatt av å tilfredsstille folks behov. <br> <br>På grunn av min generasjon har jeg hatt en kjærlighet for data siden jeg var 5 år gammel. Spillene var simplere, men mer imponerende. <br><br>Gjennom hele barndommen hjalp min far meg med å lage ting i Excel. Tabeller og planer etc. Så da jeg fikk min første laptop som 13 år begynte jeg selv med å lage modeller og tabeller i Excel.
          </p>
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
          <p class="">
            Jeg heter Mikael Ødegaard. Etter mer enn 2500 arbeidstimer med service og kundekontakt har jeg blitt erfaren i profesjonell kommunikasjon og blitt opptatt av å tilfredsstille folks behov. <br> <br>På grunn av min generasjon har jeg hatt en kjærlighet for data siden jeg var 5 år gammel. Spillene var simplere, men mer imponerende. <br><br>Gjennom hele barndommen hjalp min far meg med å lage ting i Excel. Tabeller og planer etc. Så da jeg fikk min første laptop som 13 år begynte jeg selv med å lage modeller og tabeller i Excel.
          </p>
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
      </div>

      <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="ratings" hidden >
        <table>
          <thead>
            <tr>
              <th></th>
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