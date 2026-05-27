import { fetchPlayerData } from "./api";
import { Links } from "../types";
import type { DatabaseItem } from "../types";
import { grubbyProfileInfo, grubbyTrivia } from "../profiles/grubby";
import { day9ProfileInfo, day9Trivia } from "../profiles/day9";
import { deathnoteProfileInfo, deathnoteTrivia } from "../profiles/deathnote";
import { gunnarProfileInfo, gunnarTrivia } from "../profiles/gunnar";
import { coopertvProfileInfo, coopertvTrivia } from "../profiles/coopertv";
import { knoffProfileInfo, knoffTrivia } from "../profiles/knoff";
import { singsingProfileInfo, singsingTrivia } from "../profiles/singsing";
import { uthermalProfileInfo, uthermalTrivia } from "../profiles/uthermal";
import { pigProfileInfo, pigTrivia } from "../profiles/pig";
import { yamatocannonProfileInfo, yamatocannonTrivia } from "../profiles/yamatocannon";
import { ahmpyProfileInfo, ahmpyTrivia } from "../profiles/ahmpy";
  
export const initiateListeners = () => {
  const GrubbyButton = document.querySelector('#GrubbyButton');
  const Day9Button = document.querySelector('#Day9Button');
  // const AtriocButton = document.querySelector('#AtriocButton');
  const DeathnoteButton = document.querySelector('#DeathnoteButton');
  const GunnarButton = document.querySelector('#GunnarButton');
  const CooperTVButton = document.querySelector('#CooperTVButton');
  const KnoffButton = document.querySelector('#KnoffButton');
  const SingSingButton = document.querySelector('#SingSingButton');
  const uThermalButton = document.querySelector('#uThermalButton');
  const PiGButton = document.querySelector('#PiGButton');
  const YamatoCannonButton = document.querySelector('#YamatoCannonButton');
  const AhmpyButton = document.querySelector('#AhmpyButton');

  const GrubbyProfile = document.querySelector("#GrubbyProfile")
  const Day9Profile = document.querySelector("#Day9Profile")
  // const AtriocProfile = document.querySelector("#AtriocProfile")
  const DeathnoteProfile = document.querySelector("#DeathnoteProfile")
  const GunnarProfile = document.querySelector("#GunnarProfile")
  const CooperTVProfile = document.querySelector("#CooperTVProfile")
  const KnoffProfile = document.querySelector("#KnoffProfile")
  const SingSingProfile = document.querySelector("#SingSingProfile")
  const uThermalProfile = document.querySelector("#uThermalProfile")
  const PiGProfile = document.querySelector("#PiGProfile")
  const YamatoCannonProfile = document.querySelector("#YamatoCannonProfile")
  const AhmpyProfile = document.querySelector("#AhmpyProfile")

  //const GrubbyProfileInfo = document.querySelector("#grubby-profile-info")

  const homeContainer = document.querySelector("#home")
  const ratingsContainer = document.querySelector("#ratings")
  const navHomeButton = document.querySelector("#nav-home")
  const navRatingsButton = document.querySelector("#nav-ratings")
  const smallScreenNavHomeButton = document.querySelector("#small-screen-nav-home")
  const smallScreenNavRatingsButton = document.querySelector("#small-screen-nav-ratings")

  const activateProfile = (profile: Element, profileButton: Element) => {
    GrubbyProfile?.setAttribute("hidden", "true")
    Day9Profile?.setAttribute("hidden", "true")
    // AtriocProfile?.setAttribute("hidden","true")
    DeathnoteProfile?.setAttribute("hidden", "true")
    GunnarProfile?.setAttribute("hidden", "true")
    CooperTVProfile?.setAttribute("hidden","true")
    KnoffProfile?.setAttribute("hidden", "true")
    SingSingProfile?.setAttribute("hidden","true")
    uThermalProfile?.setAttribute("hidden", "true")
    PiGProfile?.setAttribute("hidden","true")
    YamatoCannonProfile?.setAttribute("hidden","true")
    AhmpyProfile?.setAttribute("hidden","true")

    GrubbyButton?.classList.remove("active-streamer-article")
    Day9Button?.classList.remove("active-streamer-article")
    // AtriocButton?.classList.remove("active-streamer-article")
    DeathnoteButton?.classList.remove("active-streamer-article")
    GunnarButton?.classList.remove("active-streamer-article")
    CooperTVButton?.classList.remove("active-streamer-article")
    KnoffButton?.classList.remove("active-streamer-article")
    SingSingButton?.classList.remove("active-streamer-article")
    uThermalButton?.classList.remove("active-streamer-article")
    PiGButton?.classList.remove("active-streamer-article")
    YamatoCannonButton?.classList.remove("active-streamer-article")
    AhmpyButton?.classList.remove("active-streamer-article")

    profileButton.classList.add("active-streamer-article")
    profile.removeAttribute("hidden")
  };

  const activatePage = (page: Element) => {
    homeContainer?.setAttribute("hidden", "true")
    ratingsContainer?.setAttribute("hidden", "true")
    navHomeButton?.classList.remove("active-page-nav")
    navRatingsButton?.classList.remove("active-page-nav")
    homeContainer?.classList.remove("active-page")
    ratingsContainer?.classList.remove("active-page")

    page.classList.add("active-page")
    page.removeAttribute("hidden")
    
    if(homeContainer?.classList.contains("active-page")) navHomeButton?.classList.add("active-page-nav")
    else navRatingsButton?.classList.add("active-page-nav")
  }

  try {
    GrubbyButton?.addEventListener('click', () => {
      if(GrubbyProfile) activateProfile(GrubbyProfile, GrubbyButton)
    });
    Day9Button?.addEventListener('click', () => {
      if(Day9Profile) activateProfile(Day9Profile, Day9Button)
    });
    // AtriocButton?.addEventListener('click', () => {
    //   if(AtriocProfile) activateProfile(AtriocProfile, AtriocButton)
    // });
    DeathnoteButton?.addEventListener('click', () => {
      if(DeathnoteProfile) activateProfile(DeathnoteProfile, DeathnoteButton)
    });
    GunnarButton?.addEventListener('click', () => {
      if(GunnarProfile) activateProfile(GunnarProfile, GunnarButton)
    });
    CooperTVButton?.addEventListener('click', () => {
      if(CooperTVProfile) activateProfile(CooperTVProfile, CooperTVButton)
    });
    KnoffButton?.addEventListener('click', () => {
      if(KnoffProfile) activateProfile(KnoffProfile, KnoffButton)
    });
    SingSingButton?.addEventListener('click', () => {
      if(SingSingProfile) activateProfile(SingSingProfile, SingSingButton)
    });
    uThermalButton?.addEventListener('click', () => {
      if(uThermalProfile) activateProfile(uThermalProfile, uThermalButton)
    });
    PiGButton?.addEventListener('click', () => {
      if(PiGProfile) activateProfile(PiGProfile, PiGButton)
    });
    YamatoCannonButton?.addEventListener('click', () => {
      if(YamatoCannonProfile) activateProfile(YamatoCannonProfile, YamatoCannonButton)
    });
    AhmpyButton?.addEventListener('click', () => {
      if(AhmpyProfile) activateProfile(AhmpyProfile, AhmpyButton)
    });

    navRatingsButton?.addEventListener('click', () => {
      if(ratingsContainer) activatePage(ratingsContainer)
    })
    navHomeButton?.addEventListener('click', () => {
      if(homeContainer) activatePage(homeContainer)
    })
    smallScreenNavRatingsButton?.addEventListener('click', () => {
      if(ratingsContainer) activatePage(ratingsContainer)
    })
    smallScreenNavHomeButton?.addEventListener('click', () => {
      if(homeContainer) activatePage(homeContainer)
    })

    // Click listener attached to the entire table header element group
    document.querySelector('thead')?.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const sortKey = target.getAttribute('data-sort');
      
      if (sortKey) {
        handleTableSort(sortKey);
      }
    });

  } catch {
    throw new Error("Adding listeners failed"); 
  }
};

export const insertPlayerData = async () => {
  const grubbyProfileInfoElement = document.querySelector("#grubby-profile-info")
  const grubbyTriviaElement = document.querySelector("#grubby-trivia")
  const grubbyMatches = document.querySelector("#grubby-matches")
  const grubbyWinPercentage = document.querySelector("#grubby-win-percentage")
  const grubbyRating = document.querySelector("#grubby-rating")
  const grubbyStreak = document.querySelector("#grubby-streak")

  const day9ProfileInfoElement = document.querySelector("#day9-profile-info")
  const day9TriviaElement = document.querySelector("#day9-trivia")
  const day9Matches = document.querySelector("#day9-matches")
  const day9WinPercentage = document.querySelector("#day9-win-percentage")
  const day9Rating = document.querySelector("#day9-rating")
  const day9Streak = document.querySelector("#day9-streak")

  // const atriocMatches = document.querySelector("#atrioc-matches")
  // const atriocWinPercentage = document.querySelector("#atrioc-win-percentage")
  // const atriocRating = document.querySelector("#atrioc-rating")
  // const atriocStreak = document.querySelector("#atrioc-streak")
  
  const deathnoteProfileInfoElement = document.querySelector("#deathnote-profile-info")
  const deathnoteTriviaElement = document.querySelector("#deathnote-trivia")
  const deathnoteMatches = document.querySelector("#deathnote-matches")
  const deathnoteWinPercentage = document.querySelector("#deathnote-win-percentage")
  const deathnoteRating = document.querySelector("#deathnote-rating")
  const deathnoteStreak = document.querySelector("#deathnote-streak")
  
  const gunnarProfileInfoElement = document.querySelector("#gunnar-profile-info")
  const gunnarTriviaElement = document.querySelector("#gunnar-trivia")
  const gunnarMatches = document.querySelector("#gunnar-matches")
  const gunnarWinPercentage = document.querySelector("#gunnar-win-percentage")
  const gunnarRating = document.querySelector("#gunnar-rating")
  const gunnarStreak = document.querySelector("#gunnar-streak")
  
  const coopertvProfileInfoElement = document.querySelector("#coopertv-profile-info")
  const coopertvTriviaElement = document.querySelector("#coopertv-trivia")
  const coopertvMatches = document.querySelector("#coopertv-matches")
  const coopertvWinPercentage = document.querySelector("#coopertv-win-percentage")
  const coopertvRating = document.querySelector("#coopertv-rating")
  const coopertvStreak = document.querySelector("#coopertv-streak")
  
  const knoffProfileInfoElement = document.querySelector("#knoff-profile-info")
  const knoffTriviaElement = document.querySelector("#knoff-trivia")
  const knoffMatches = document.querySelector("#knoff-matches")
  const knoffWinPercentage = document.querySelector("#knoff-win-percentage")
  const knoffRating = document.querySelector("#knoff-rating")
  const knoffStreak = document.querySelector("#knoff-streak")
  
  const singsingProfileInfoElement = document.querySelector("#singsing-profile-info")
  const singsingTriviaElement = document.querySelector("#singsing-trivia")
  const singsingMatches = document.querySelector("#singsing-matches")
  const singsingWinPercentage = document.querySelector("#singsing-win-percentage")
  const singsingRating = document.querySelector("#singsing-rating")
  const singsingStreak = document.querySelector("#singsing-streak")
  
  const uthermalProfileInfoElement = document.querySelector("#uthermal-profile-info")
  const uthermalTriviaElement = document.querySelector("#uthermal-trivia")
  const uthermalMatches = document.querySelector("#uthermal-matches")
  const uthermalWinPercentage = document.querySelector("#uthermal-win-percentage")
  const uthermalRating = document.querySelector("#uthermal-rating")
  const uthermalStreak = document.querySelector("#uthermal-streak")
  
  const pigProfileInfoElement = document.querySelector("#pig-profile-info")
  const pigTriviaElement = document.querySelector("#pig-trivia")
  const pigMatches = document.querySelector("#pig-matches")
  const pigWinPercentage = document.querySelector("#pig-win-percentage")
  const pigRating = document.querySelector("#pig-rating")
  const pigStreak = document.querySelector("#pig-streak")
  
  const yamatocannonProfileInfoElement = document.querySelector("#yamatocannon-profile-info")
  const yamatocannonTriviaElement = document.querySelector("#yamatocannon-trivia")
  const yamatocannonMatches = document.querySelector("#yamatocannon-matches")
  const yamatocannonWinPercentage = document.querySelector("#yamatocannon-win-percentage")
  const yamatocannonRating = document.querySelector("#yamatocannon-rating")
  const yamatocannonStreak = document.querySelector("#yamatocannon-streak")
  
  const ahmpyProfileInfoElement = document.querySelector("#ahmpy-profile-info")
  const ahmpyTriviaElement = document.querySelector("#ahmpy-trivia")
  const ahmpyMatches = document.querySelector("#ahmpy-matches")
  const ahmpyWinPercentage = document.querySelector("#ahmpy-win-percentage")
  const ahmpyRating = document.querySelector("#ahmpy-rating")
  const ahmpyStreak = document.querySelector("#ahmpy-streak")
  
  try {
    const data = await initiatePlayerData()
    fillRatingTable(data)
    if(grubbyProfileInfoElement) grubbyProfileInfoElement.innerHTML = grubbyProfileInfo
    if(grubbyTriviaElement) grubbyTriviaElement.innerHTML = grubbyTrivia
    if(grubbyMatches) grubbyMatches.innerHTML = data['Grubby'].matches_played.toString()
    if(grubbyStreak) grubbyStreak.innerHTML = data['Grubby'].streak.toString()
    if(grubbyRating) grubbyRating.innerHTML = data['Grubby'].rating.toString()
    if(grubbyWinPercentage) grubbyWinPercentage.innerHTML = data['Grubby'].win_percentage.toString()
  
    if(day9ProfileInfoElement) day9ProfileInfoElement.innerHTML = day9ProfileInfo
    if(day9TriviaElement) day9TriviaElement.innerHTML = day9Trivia
    if(day9Matches) day9Matches.innerHTML = data['Day9'].matches_played.toString()
    if(day9Streak) day9Streak.innerHTML = data['Day9'].streak.toString()
    if(day9Rating) day9Rating.innerHTML = data['Day9'].rating.toString()
    if(day9WinPercentage) day9WinPercentage.innerHTML = data['Day9'].win_percentage.toString()
  
    // if(atriocMatches) atriocMatches.innerHTML = data[PlayerIDFromName.Atrioc].matches_played.toString()
    // if(atriocStreak) atriocStreak.innerHTML = data[PlayerIDFromName.Atrioc].streak.toString()
    // if(atriocRating) atriocRating.innerHTML = data[PlayerIDFromName.Atrioc].rating.toString()
    // if(atriocWinPercentage) atriocWinPercentage.innerHTML = data[PlayerIDFromName.Atrioc].win_percentage.toString()
    
    if(deathnoteProfileInfoElement) deathnoteProfileInfoElement.innerHTML = deathnoteProfileInfo
    if(deathnoteTriviaElement) deathnoteTriviaElement.innerHTML = deathnoteTrivia
    if(deathnoteMatches) deathnoteMatches.innerHTML = data['Deathnote'].matches_played.toString()
    if(deathnoteStreak) deathnoteStreak.innerHTML = data['Deathnote'].streak.toString()
    if(deathnoteRating) deathnoteRating.innerHTML = data['Deathnote'].rating.toString()
    if(deathnoteWinPercentage) deathnoteWinPercentage.innerHTML = data['Deathnote'].win_percentage.toString()
    
    if(gunnarProfileInfoElement) gunnarProfileInfoElement.innerHTML = gunnarProfileInfo
    if(gunnarTriviaElement) gunnarTriviaElement.innerHTML = gunnarTrivia
    if(gunnarMatches) gunnarMatches.innerHTML = data['Gunnar'].matches_played.toString()
    if(gunnarStreak) gunnarStreak.innerHTML = data['Gunnar'].streak.toString()
    if(gunnarRating) gunnarRating.innerHTML = data['Gunnar'].rating.toString()
    if(gunnarWinPercentage) gunnarWinPercentage.innerHTML = data['Gunnar'].win_percentage.toString()
  
    if(coopertvProfileInfoElement) coopertvProfileInfoElement.innerHTML = coopertvProfileInfo
    if(coopertvTriviaElement) coopertvTriviaElement.innerHTML = coopertvTrivia
    if(coopertvMatches) coopertvMatches.innerHTML = data['CooperTV'].matches_played.toString()
    if(coopertvStreak) coopertvStreak.innerHTML = data['CooperTV'].streak.toString()
    if(coopertvRating) coopertvRating.innerHTML = data['CooperTV'].rating.toString()
    if(coopertvWinPercentage) coopertvWinPercentage.innerHTML = data['CooperTV'].win_percentage.toString()
  
    if(knoffProfileInfoElement) knoffProfileInfoElement.innerHTML = knoffProfileInfo
    if(knoffTriviaElement) knoffTriviaElement.innerHTML = knoffTrivia
    if(knoffMatches) knoffMatches.innerHTML = data['Knoff'].matches_played.toString()
    if(knoffStreak) knoffStreak.innerHTML = data['Knoff'].streak.toString()
    if(knoffRating) knoffRating.innerHTML = data['Knoff'].rating.toString()
    if(knoffWinPercentage) knoffWinPercentage.innerHTML = data['Knoff'].win_percentage.toString()
    
    if(singsingProfileInfoElement) singsingProfileInfoElement.innerHTML = singsingProfileInfo
    if(singsingTriviaElement) singsingTriviaElement.innerHTML = singsingTrivia
    if(singsingMatches) singsingMatches.innerHTML = data['SingSing'].matches_played.toString()
    if(singsingStreak) singsingStreak.innerHTML = data['SingSing'].streak.toString()
    if(singsingRating) singsingRating.innerHTML = data['SingSing'].rating.toString()
    if(singsingWinPercentage) singsingWinPercentage.innerHTML = data['SingSing'].win_percentage.toString()
  
    if(uthermalProfileInfoElement) uthermalProfileInfoElement.innerHTML = uthermalProfileInfo
    if(uthermalTriviaElement) uthermalTriviaElement.innerHTML = uthermalTrivia
    if(uthermalMatches) uthermalMatches.innerHTML = data['uThermal'].matches_played.toString()
    if(uthermalStreak) uthermalStreak.innerHTML = data['uThermal'].streak.toString()
    if(uthermalRating) uthermalRating.innerHTML = data['uThermal'].rating.toString()
    if(uthermalWinPercentage) uthermalWinPercentage.innerHTML = data['uThermal'].win_percentage.toString()
    
    if(pigProfileInfoElement) pigProfileInfoElement.innerHTML = pigProfileInfo
    if(pigTriviaElement) pigTriviaElement.innerHTML = pigTrivia
    if(pigMatches) pigMatches.innerHTML = data['PiG'].matches_played.toString()
    if(pigStreak) pigStreak.innerHTML = data['PiG'].streak.toString()
    if(pigRating) pigRating.innerHTML = data['PiG'].rating.toString()
    if(pigWinPercentage) pigWinPercentage.innerHTML = data['PiG'].win_percentage.toString()
    
    if(yamatocannonProfileInfoElement) yamatocannonProfileInfoElement.innerHTML = yamatocannonProfileInfo
    if(yamatocannonTriviaElement) yamatocannonTriviaElement.innerHTML = yamatocannonTrivia
    if(yamatocannonMatches) yamatocannonMatches.innerHTML = data['YamatoCannon'].matches_played.toString()
    if(yamatocannonStreak) yamatocannonStreak.innerHTML = data['YamatoCannon'].streak.toString()
    if(yamatocannonRating) yamatocannonRating.innerHTML = data['YamatoCannon'].rating.toString()
    if(yamatocannonWinPercentage) yamatocannonWinPercentage.innerHTML = data['YamatoCannon'].win_percentage.toString()

    if(ahmpyProfileInfoElement) ahmpyProfileInfoElement.innerHTML = ahmpyProfileInfo
    if(ahmpyTriviaElement) ahmpyTriviaElement.innerHTML = ahmpyTrivia
    if(ahmpyMatches) ahmpyMatches.innerHTML = data['Ahmpy'].matches_played.toString()
    if(ahmpyStreak) ahmpyStreak.innerHTML = data['Ahmpy'].streak.toString()
    if(ahmpyRating) ahmpyRating.innerHTML = data['Ahmpy'].rating.toString()
    if(ahmpyWinPercentage) ahmpyWinPercentage.innerHTML = data['Ahmpy'].win_percentage.toString()

  } catch {
    throw new Error("Insert data failed");
    
  }
}

let currentSortColumn: string = 'rating'; 
let isAscending: boolean = false; // Default to highest rating first (descending)
let internalPlayerData: Record<string, DatabaseItem> = {};

export const fillRatingTable = (playerData: Record<string, DatabaseItem>) => {
  // Store the data globally so our click handlers can access it later
  internalPlayerData = playerData;
  
  // Run the render engine
  try {
    renderEngine();
  } catch (error) {
    console.log(error)
    throw new Error("renderEngine() failed");
    
  }
};

// Isolated rendering function that completely builds/re-builds rows
const renderEngine = () => {
  const ratingTable = document.querySelector("#ratings-table");
  if (!ratingTable) return;

  // Clear existing rows so we don't just append duplicates on top of each other
  ratingTable.innerHTML = "";

  const playerArray = Object.values(internalPlayerData);

  // Sort the array based on the active state before mapping to HTML strings
  playerArray.sort((a, b) => {
    let valueA = a[currentSortColumn as keyof DatabaseItem];
    let valueB = b[currentSortColumn as keyof DatabaseItem];

    // 👇 ADD THIS SPECIAL CHECK FOR BOOLEANS
    if (typeof valueA === 'boolean' && typeof valueB === 'boolean') {
      if (valueA === valueB) return 0; // Both are live or both are offline
      
      // If ascending, we want true (1) first, so invert the standard order
      return isAscending 
        ? (valueA ? -1 : 1)  // true comes first
        : (valueA ? 1 : -1); // false comes first
    } 

    // Keep your existing string comparison logic
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }
    
    // Keep your existing number comparison logic
    if (valueA < valueB) return isAscending ? -1 : 1;
    if (valueA > valueB) return isAscending ? 1 : -1;
    return 0;
  });

  // Loop and append elements matching your exact design structure
  for (const player of playerArray) {
    const trElement = document.createElement("tr");
    
    trElement.innerHTML = `
      <td class="rating-table-name-column"><span class="fi fi-${player.nationality}"></span>  ${player.name} (${player.username})</td>
      <td>${player.rating}</td>
      <td>${player.win_percentage} %</td>
      <td>${player.streak}</td>
      <td>${player.matches_played}</td>
      <td>
        <a href='${Links.twitch}${player.twitch}' target='_blank'><i class="fa-brands fa-twitch"></i></a>
        ${(player.live) ? 
          `<span class="live-indicator">
            <span class="live-dot"></span>
            LIVE
          </span>` : ''
        }
      </td>
    `;
    ratingTable.appendChild(trElement);
  }
};

/**
 * Handles toggling state keys and calling the re-render pipeline
 */
export const handleTableSort = (columnKey: string) => {
  if (currentSortColumn === columnKey) {
    isAscending = !isAscending; // Flip sorting direction
  } else {
    currentSortColumn = columnKey;
  }

  // Update header classes visually
  updateHeaderUI(columnKey);

  // Trigger our optimized render routine
  renderEngine();
};

const updateHeaderUI = (activeColumn: string) => {
  document.querySelectorAll('th.sortable').forEach(th => {
    th.classList.remove('asc', 'desc');
    if (th.getAttribute('data-sort') === activeColumn) {
      th.classList.add(isAscending ? 'asc' : 'desc');
    }
  });
};
export const initiatePlayerData = async () => {
  try {
    const playerData = await fetchPlayerData()
    if(!playerData) throw new Error("playerData falsy",)
    const players = playerData.reduce((accumulator, currentItem) => {
      accumulator[currentItem.name] = currentItem;
      return accumulator;
    }, {} as Record<string, typeof playerData[number]>);
    return players
  } catch (error) {
    throw new Error("InitiatePlayerData() failed");
    
  }
}