import { inject } from '@vercel/analytics';
import './style.css'

import { initiateListeners, insertPlayerData } from './services/functions'
import 'flag-icons/css/flag-icons.min.css';

inject()
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
      <li id="nav-ratings" class="w3-bar-item w3-button active-page-nav">
        <i class="fa fa-trophy w3-xxlarge"></i>
        <p>RATINGS</p>
      </li>
      <li id="nav-home" class="w3-bar-item w3-button ">
        <i class="fa fa-user w3-xxlarge"></i>
        <p>Profiles</p>
      </li>
    </nav>

    <!-- Navbar on small screens (Hidden on medium and large screens) -->
    <div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
      <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
        <a id="small-screen-nav-home" class="w3-bar-item w3-button" style="width:25% !important">HOME</a>
        <a id="small-screen-nav-ratings" class="w3-bar-item w3-button" style="width:25% !important">RATINGS</a>
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

          <a href="https://twitch.tv/hera" target="_blank">
            <i class="fa-brands fa-twitch"></i> Twitch
          </a>

          <a href="https://discord.gg/invite/fpheyyUCg9" target="_blank">
            <i class="fa-brands fa-discord"></i> Discord
          </a>

          <a href="https://x.com/Hera_Aoe" target="_blank">
            <i class="fa-brands fa-x"></i> Hera_Aoe
          </a>
        </div>
      </header>

      <div class="w3-content w3-justify w3-padding-64" id="home" hidden>
        <nav class="nav-streamer-article container-flex" id="playerProfileNav">
          <div>
            <div class="active-streamer-article w3-button" id="GrubbyButton">Grubby</div>
            <div class="w3-button profile-nav-button" id="Day9Button">Day9</div>
            <div class="w3-button profile-nav-button" id="DeathnoteButton">Deathnote</div>
            <div class="w3-button profile-nav-button" id="GunnarButton">Gunnar</div>
            <div class="w3-button profile-nav-button" id="CooperTVButton">CooperTV</div>
            <div class="w3-button profile-nav-button" id="KnoffButton">Knoff</div>
            <div class="w3-button profile-nav-button" id="SingSingButton">SingSing</div>
            <div class="w3-button profile-nav-button" id="uThermalButton">uThermal</div>
            <div class="w3-button profile-nav-button" id="PiGButton">PiG</div>
            <div class="w3-button profile-nav-button" id="YamatoCannonButton">YamatoCannon</div>
            <div class="w3-button profile-nav-button" id="AhmpyButton">Ahmpy</div>
          </div>
        </nav>

        <article id="GrubbyProfile" class="player-profile">
          <h3>Grubby</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="grubby-profile-info"></div>
              <ul class="streamer-links-ul">
                <li>
                  <a href="https://www.youtube.com/FollowGrubby" target="_blank">
                    <i class="fa-brands fa-youtube"></i> Youtube
                  </a>
                </li>
                <li>
                  <a href="https://www.twitch.tv/grubby" target="_blank">
                    <i class="fa-brands fa-twitch"></i> Twitch
                  </a>
                </li>
                <li>
                  <a href="https://www.aoe2insights.com/user/1819870" target="_blank">
                    <img class="aoe-insights-logo" src="https://www.aoe2insights.com/static/images/logo.webp" /> AoE2 Insights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img class="player-profile-picture" src="/grubby-profile-picture.jpg"/>
            </div>
          </div>
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
        
        <article id="Day9Profile" class="player-profile" hidden>
          <h3>Day9</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="day9-profile-info"></div>
              <ul class="streamer-links-ul">
                <li>
                  <a href="https://www.youtube.com/day9tv" target="_blank">
                    <i class="fa-brands fa-youtube"></i> Youtube
                  </a>
                </li>
                <li>
                  <a href="https://www.twitch.tv/day9" target="_blank">
                    <i class="fa-brands fa-twitch"></i> Twitch
                  </a>
                </li>
                <li>
                  <a href="https://www.aoe2insights.com/user/2065858" target="_blank">
                    <img class="aoe-insights-logo" src="https://www.aoe2insights.com/static/images/logo.webp" /> AoE2 Insights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img class="player-profile-picture" src="/day9-profile-picture.webp"/>
            </div>
          </div>
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

        <article id="DeathnoteProfile" class="player-profile" hidden>
          <h3>Deathnote</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="deathnote-profile-info"></div>
              <ul class="streamer-links-ul">
                <li>
                  <a href="https://www.youtube.com/channel/UChGsaIBM_pEKkdXjYcJdpzA" target="_blank">
                    <i class="fa-brands fa-youtube"></i> Youtube
                  </a>
                </li>
                <li>
                  <a href="https://www.twitch.tv/followdeathnote" target="_blank">
                    <i class="fa-brands fa-twitch"></i> Twitch
                  </a>
                </li>
                <li>
                  <a href="https://www.aoe2insights.com/user/6481045" target="_blank">
                    <img class="aoe-insights-logo" src="https://www.aoe2insights.com/static/images/logo.webp" /> AoE2 Insights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img class="player-profile-picture" src="/deathnote-profile-picture.jpg"/>
            </div>
          </div>
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

        <article id="GunnarProfile" class="player-profile" hidden>
          <h3>Gunnar</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="gunnar-profile-info"></div>
              <ul class="streamer-links-ul">
                <li>
                  <a href="https://www.youtube.com/GunnarDota" target="_blank">
                    <i class="fa-brands fa-youtube"></i> Youtube
                  </a>
                </li>
                <li>
                  <a href="https://www.twitch.tv/gunnar" target="_blank">
                    <i class="fa-brands fa-twitch"></i> Twitch
                  </a>
                </li>
                <li>
                  <a href="https://www.aoe2insights.com/user/7304675" target="_blank">
                    <img class="aoe-insights-logo" src="https://www.aoe2insights.com/static/images/logo.webp" /> AoE2 Insights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img class="player-profile-picture" src="/gunnar-profile-picture.webp"/>
            </div>
          </div>
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

        <article id="CooperTVProfile" class="player-profile" hidden>
          <h3>CooperTV</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="coopertv-profile-info"></div>
              <ul class="streamer-links-ul">
                <li>
                  <a href="https://www.youtube.com/channel/UC1tTkPsQy_eSv4_9-ka-3GQ" target="_blank">
                    <i class="fa-brands fa-youtube"></i> Youtube
                  </a>
                </li>
                <li>
                  <a href="https://www.twitch.tv/coopertv" target="_blank">
                    <i class="fa-brands fa-twitch"></i> Twitch
                  </a>
                </li>
                <li>
                  <a href="https://www.aoe2insights.com/user/705858" target="_blank">
                    <img class="aoe-insights-logo" src="https://www.aoe2insights.com/static/images/logo.webp" /> AoE2 Insights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img class="player-profile-picture" src="/coopertv-profile-picture.png"/>
            </div>
          </div>
          <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
              <span id="coopertv-matches" class="w3-xlarge"></span><br>
              Ranked matches 1v1
            </div>
            <div class="w3-quarter w3-section">
              <span id="coopertv-win-percentage" class="w3-xlarge"></span><span class="w3-xlarge"> %</span><br>
              Win percentage
            </div>
            <div class="w3-quarter w3-section">
              <span id="coopertv-rating" class="w3-xlarge"></span><br>
              Rating
            </div>
            <div class="w3-quarter w3-section">
              <span id="coopertv-streak" class="w3-xlarge"></span><br>
              Streak
            </div>
          </div>
          <h3>Trivia</h3>
          <div id="coopertv-trivia" class="player-trivia-container"></div>
        </article>

        <article id="KnoffProfile" class="player-profile" hidden>
          <h3>Knoff</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="knoff-profile-info"></div>
              <ul class="streamer-links-ul">
                <li>
                  <a href="https://www.youtube.com/@campknoff" target="_blank">
                    <i class="fa-brands fa-youtube"></i> Youtube
                  </a>
                </li>
                <li>
                  <a href="https://www.twitch.tv/knoff" target="_blank">
                    <i class="fa-brands fa-twitch"></i> Twitch
                  </a>
                </li>
                <li>
                  <a href="https://www.aoe2insights.com/user/228122" target="_blank">
                    <img class="aoe-insights-logo" src="https://www.aoe2insights.com/static/images/logo.webp" /> AoE2 Insights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img class="player-profile-picture" src="/knoff-profile-picture.png"/>
            </div>
          </div>
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

        <article id="SingSingProfile" class="player-profile" hidden>
          <h3>SingSing</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="singsing-profile-info"></div>
              <ul class="streamer-links-ul">
                <li>
                  <a href="https://www.youtube.com/channel/UC6c3OP2fWzaH5Nq5kh4m_SA" target="_blank">
                    <i class="fa-brands fa-youtube"></i> Youtube
                  </a>
                </li>
                <li>
                  <a href="https://www.twitch.tv/singsing" target="_blank">
                    <i class="fa-brands fa-twitch"></i> Twitch
                  </a>
                </li>
                <li>
                  <a href="https://www.aoe2insights.com/user/255573" target="_blank">
                    <img class="aoe-insights-logo" src="https://www.aoe2insights.com/static/images/logo.webp" /> AoE2 Insights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img class="player-profile-picture" src="/singsing-profile-picture.webp"/>
            </div>
          </div>
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

        <article id="uThermalProfile" class="player-profile" hidden>
          <h3>uThermal</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="uthermal-profile-info"></div>
              <ul class="streamer-links-ul">
                <li>
                  <a href="https://www.youtube.com/uthermal" target="_blank">
                    <i class="fa-brands fa-youtube"></i> Youtube
                  </a>
                </li>
                <li>
                  <a href="https://www.twitch.tv/uthermalsc2" target="_blank">
                    <i class="fa-brands fa-twitch"></i> Twitch
                  </a>
                </li>
                <li>
                  <a href="https://www.aoe2insights.com/user/4473383" target="_blank">
                    <img class="aoe-insights-logo" src="https://www.aoe2insights.com/static/images/logo.webp" /> AoE2 Insights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img class="player-profile-picture" src="/uthermal-profile-picture.jpg"/>
            </div>
          </div>
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

         <article id="PiGProfile" class="player-profile" hidden>
          <h3>PiG</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="pig-profile-info"></div>
              <ul class="streamer-links-ul">
                <li>
                  <a href="https://www.youtube.com/PiGstarcraft" target="_blank">
                    <i class="fa-brands fa-youtube"></i> Youtube
                  </a>
                </li>
                <li>
                  <a href="https://www.twitch.tv/x5_pig" target="_blank">
                    <i class="fa-brands fa-twitch"></i> Twitch
                  </a>
                </li>
                <li>
                  <a href="https://www.aoe2insights.com/user/5735770" target="_blank">
                    <img class="aoe-insights-logo" src="https://www.aoe2insights.com/static/images/logo.webp" /> AoE2 Insights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img class="player-profile-picture" src="/pig-profile-picture.jpg"/>
            </div>
          </div>
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

          <article id="AhmpyProfile" class="player-profile" hidden>
          <h3>Ahmpy</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="ahmpy-profile-info"></div>
              <ul class="streamer-links-ul">
                <li>
                  <a href="https://www.youtube.com/@Ahmpy" target="_blank">
                    <i class="fa-brands fa-youtube"></i> Youtube
                  </a>
                </li>
                <li>
                  <a href="https://www.twitch.tv/ahmpy" target="_blank">
                    <i class="fa-brands fa-twitch"></i> Twitch
                  </a>
                </li>
                <li>
                  <a href="https://www.aoe2insights.com/user/25478303" target="_blank">
                    <img class="aoe-insights-logo" src="https://www.aoe2insights.com/static/images/logo.webp" /> AoE2 Insights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img class="player-profile-picture" src="/ahmpy-profile-picture.png"/>
            </div>
          </div>
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

        <article id="YamatoCannonProfile" class="player-profile" hidden>
          <h3>YamatoCannon</h3>
          <div class="player-intro-container">
            <div class="player-info-links-container">
              <div id="yamatocannon-profile-info"></div>
              <ul class="streamer-links-ul">
                <li>
                  <a href="https://www.youtube.com/channel/UCRRfSRlDq2ma7xp_8HYvYeA" target="_blank">
                    <i class="fa-brands fa-youtube"></i> Youtube
                  </a>
                </li>
                <li>
                  <a href="https://www.twitch.tv/yamatocannon" target="_blank">
                    <i class="fa-brands fa-twitch"></i> Twitch
                  </a>
                </li>
                <li>
                  <a href="https://www.aoe2insights.com/user/25503675" target="_blank">
                    <img class="aoe-insights-logo" src="https://www.aoe2insights.com/static/images/logo.webp" /> AoE2 Insights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img class="player-profile-picture" src="/yamatocannon-profile-picture.jpg"/>
            </div>
          </div>
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
     </div>

      <div class="table-container" id="ratings" >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th class="sortable asc" data-sort="rating">Rating</th>
              <th class="sortable" data-sort="win_percentage">Win %</th>
              <th class="sortable" data-sort="streak">Streak</th>
              <th class="sortable" data-sort="matches_played">Ranked matches 1v1</th>
              <th class="sortable" data-sort="live">Watch</th>
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