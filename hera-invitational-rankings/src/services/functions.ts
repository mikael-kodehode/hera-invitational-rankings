import { fetchPlayerData } from "./api";
import { Links, PlayerIDFromName, StreamerNameFromProfileID, StreamerSocials } from "../types";
import type { DatabaseItem } from "../types";
  
export const initiateListeners = () => {
  const GrubbyButton = document.querySelector('#GrubbyButton');
  const Day9Button = document.querySelector('#Day9Button');
  // const AtriocButton = document.querySelector('#AtriocButton');
  const DeathnoteButton = document.querySelector('#DeathnoteButton');
  const GunnarButton = document.querySelector('#GunnarButton');
  const CooperTVButton = document.querySelector('#CooperTVButton');
  const KnoffButton = document.querySelector('#KnoffButton');
  const SingSingButton = document.querySelector('#SingSingButton');
  const UthermalButton = document.querySelector('#UthermalButton');
  const PiGButton = document.querySelector('#PiGButton');
  const YamatoCannonButton = document.querySelector('#YamatoCannonButton');

  const GrubbyProfile = document.querySelector("#GrubbyProfile")
  const Day9Profile = document.querySelector("#Day9Profile")
  // const AtriocProfile = document.querySelector("#AtriocProfile")
  const DeathnoteProfile = document.querySelector("#DeathnoteProfile")
  const GunnarProfile = document.querySelector("#GunnarProfile")
  const CooperTVProfile = document.querySelector("#CooperTVProfile")
  const KnoffProfile = document.querySelector("#KnoffProfile")
  const SingSingProfile = document.querySelector("#SingSingProfile")
  const UthermalProfile = document.querySelector("#UthermalProfile")
  const PiGProfile = document.querySelector("#PiGProfile")
  const YamatoCannonProfile = document.querySelector("#YamatoCannonProfile")

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
    UthermalProfile?.setAttribute("hidden", "true")
    PiGProfile?.setAttribute("hidden","true")
    YamatoCannonProfile?.setAttribute("hidden","true")

    GrubbyButton?.classList.remove("active-streamer-article")
    Day9Button?.classList.remove("active-streamer-article")
    // AtriocButton?.classList.remove("active-streamer-article")
    DeathnoteButton?.classList.remove("active-streamer-article")
    GunnarButton?.classList.remove("active-streamer-article")
    CooperTVButton?.classList.remove("active-streamer-article")
    KnoffButton?.classList.remove("active-streamer-article")
    SingSingButton?.classList.remove("active-streamer-article")
    UthermalButton?.classList.remove("active-streamer-article")
    PiGButton?.classList.remove("active-streamer-article")
    YamatoCannonButton?.classList.remove("active-streamer-article")

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
    UthermalButton?.addEventListener('click', () => {
      if(UthermalProfile) activateProfile(UthermalProfile, UthermalButton)
    });
    PiGButton?.addEventListener('click', () => {
      if(PiGProfile) activateProfile(PiGProfile, PiGButton)
    });
    YamatoCannonButton?.addEventListener('click', () => {
      if(YamatoCannonProfile) activateProfile(YamatoCannonProfile, YamatoCannonButton)
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

  } catch {
    throw new Error("Adding listeners failed"); 
  }
};

export const insertPlayerData = async () => {
  const grubbyMatches = document.querySelector("#grubby-matches")
  const grubbyWinPercentage = document.querySelector("#grubby-win-percentage")
  const grubbyRating = document.querySelector("#grubby-rating")
  const grubbyStreak = document.querySelector("#grubby-streak")

  const day9Matches = document.querySelector("#day9-matches")
  const day9WinPercentage = document.querySelector("#day9-win-percentage")
  const day9Rating = document.querySelector("#day9-rating")
  const day9Streak = document.querySelector("#day9-streak")

  // const atriocMatches = document.querySelector("#atrioc-matches")
  // const atriocWinPercentage = document.querySelector("#atrioc-win-percentage")
  // const atriocRating = document.querySelector("#atrioc-rating")
  // const atriocStreak = document.querySelector("#atrioc-streak")
  
  const deathnoteMatches = document.querySelector("#deathnote-matches")
  const deathnoteWinPercentage = document.querySelector("#deathnote-win-percentage")
  const deathnoteRating = document.querySelector("#deathnote-rating")
  const deathnoteStreak = document.querySelector("#deathnote-streak")
  
  const gunnarMatches = document.querySelector("#gunnar-matches")
  const gunnarWinPercentage = document.querySelector("#gunnar-win-percentage")
  const gunnarRating = document.querySelector("#gunnar-rating")
  const gunnarStreak = document.querySelector("#gunnar-streak")
  
  const coopertvMatches = document.querySelector("#coopertv-matches")
  const coopertvWinPercentage = document.querySelector("#coopertv-win-percentage")
  const coopertvRating = document.querySelector("#coopertv-rating")
  const coopertvStreak = document.querySelector("#coopertv-streak")
  
  const knoffMatches = document.querySelector("#knoff-matches")
  const knoffWinPercentage = document.querySelector("#knoff-win-percentage")
  const knoffRating = document.querySelector("#knoff-rating")
  const knoffStreak = document.querySelector("#knoff-streak")
  
  const singsingMatches = document.querySelector("#singsing-matches")
  const singsingWinPercentage = document.querySelector("#singsing-win-percentage")
  const singsingRating = document.querySelector("#singsing-rating")
  const singsingStreak = document.querySelector("#singsing-streak")
  
  const uthermalMatches = document.querySelector("#uthermal-matches")
  const uthermalWinPercentage = document.querySelector("#uthermal-win-percentage")
  const uthermalRating = document.querySelector("#uthermal-rating")
  const uthermalStreak = document.querySelector("#uthermal-streak")
  
  const pigMatches = document.querySelector("#pig-matches")
  const pigWinPercentage = document.querySelector("#pig-win-percentage")
  const pigRating = document.querySelector("#pig-rating")
  const pigStreak = document.querySelector("#pig-streak")
  
  const yamatocannonMatches = document.querySelector("#yamatocannon-matches")
  const yamatocannonWinPercentage = document.querySelector("#yamatocannon-win-percentage")
  const yamatocannonRating = document.querySelector("#yamatocannon-rating")
  const yamatocannonStreak = document.querySelector("#yamatocannon-streak")

  try {
    const data = await initiatePlayerData()
  
    if(grubbyMatches) grubbyMatches.innerHTML = data[PlayerIDFromName.Grubby].matches_played.toString()
    if(grubbyStreak) grubbyStreak.innerHTML = data[PlayerIDFromName.Grubby].streak.toString()
    if(grubbyRating) grubbyRating.innerHTML = data[PlayerIDFromName.Grubby].rating.toString()
    if(grubbyWinPercentage) grubbyWinPercentage.innerHTML = data[PlayerIDFromName.Grubby].win_percentage.toString()
  
    if(day9Matches) day9Matches.innerHTML = data[PlayerIDFromName.Day9].matches_played.toString()
    if(day9Streak) day9Streak.innerHTML = data[PlayerIDFromName.Day9].streak.toString()
    if(day9Rating) day9Rating.innerHTML = data[PlayerIDFromName.Day9].rating.toString()
    if(day9WinPercentage) day9WinPercentage.innerHTML = data[PlayerIDFromName.Day9].win_percentage.toString()
  
    // if(atriocMatches) atriocMatches.innerHTML = data[PlayerIDFromName.Atrioc].matches_played.toString()
    // if(atriocStreak) atriocStreak.innerHTML = data[PlayerIDFromName.Atrioc].streak.toString()
    // if(atriocRating) atriocRating.innerHTML = data[PlayerIDFromName.Atrioc].rating.toString()
    // if(atriocWinPercentage) atriocWinPercentage.innerHTML = data[PlayerIDFromName.Atrioc].win_percentage.toString()
    
    if(deathnoteMatches) deathnoteMatches.innerHTML = data[PlayerIDFromName.Deathnote].matches_played.toString()
    if(deathnoteStreak) deathnoteStreak.innerHTML = data[PlayerIDFromName.Deathnote].streak.toString()
    if(deathnoteRating) deathnoteRating.innerHTML = data[PlayerIDFromName.Deathnote].rating.toString()
    if(deathnoteWinPercentage) deathnoteWinPercentage.innerHTML = data[PlayerIDFromName.Deathnote].win_percentage.toString()
    
    if(gunnarMatches) gunnarMatches.innerHTML = data[PlayerIDFromName.Gunnar].matches_played.toString()
    if(gunnarStreak) gunnarStreak.innerHTML = data[PlayerIDFromName.Gunnar].streak.toString()
    if(gunnarRating) gunnarRating.innerHTML = data[PlayerIDFromName.Gunnar].rating.toString()
    if(gunnarWinPercentage) gunnarWinPercentage.innerHTML = data[PlayerIDFromName.Gunnar].win_percentage.toString()
  
    if(coopertvMatches) coopertvMatches.innerHTML = data[PlayerIDFromName.CooperTV].matches_played.toString()
    if(coopertvStreak) coopertvStreak.innerHTML = data[PlayerIDFromName.CooperTV].streak.toString()
    if(coopertvRating) coopertvRating.innerHTML = data[PlayerIDFromName.CooperTV].rating.toString()
    if(coopertvWinPercentage) coopertvWinPercentage.innerHTML = data[PlayerIDFromName.CooperTV].win_percentage.toString()
  
    if(knoffMatches) knoffMatches.innerHTML = data[PlayerIDFromName.Knoff].matches_played.toString()
    if(knoffStreak) knoffStreak.innerHTML = data[PlayerIDFromName.Knoff].streak.toString()
    if(knoffRating) knoffRating.innerHTML = data[PlayerIDFromName.Knoff].rating.toString()
    if(knoffWinPercentage) knoffWinPercentage.innerHTML = data[PlayerIDFromName.Knoff].win_percentage.toString()
    
    if(singsingMatches) singsingMatches.innerHTML = data[PlayerIDFromName.SingSing].matches_played.toString()
    if(singsingStreak) singsingStreak.innerHTML = data[PlayerIDFromName.SingSing].streak.toString()
    if(singsingRating) singsingRating.innerHTML = data[PlayerIDFromName.SingSing].rating.toString()
    if(singsingWinPercentage) singsingWinPercentage.innerHTML = data[PlayerIDFromName.SingSing].win_percentage.toString()
  
    if(uthermalMatches) uthermalMatches.innerHTML = data[PlayerIDFromName.Uthermal].matches_played.toString()
    if(uthermalStreak) uthermalStreak.innerHTML = data[PlayerIDFromName.Uthermal].streak.toString()
    if(uthermalRating) uthermalRating.innerHTML = data[PlayerIDFromName.Uthermal].rating.toString()
    if(uthermalWinPercentage) uthermalWinPercentage.innerHTML = data[PlayerIDFromName.Uthermal].win_percentage.toString()
    
    if(pigMatches) pigMatches.innerHTML = data[PlayerIDFromName.PiG].matches_played.toString()
    if(pigStreak) pigStreak.innerHTML = data[PlayerIDFromName.PiG].streak.toString()
    if(pigRating) pigRating.innerHTML = data[PlayerIDFromName.PiG].rating.toString()
    if(pigWinPercentage) pigWinPercentage.innerHTML = data[PlayerIDFromName.PiG].win_percentage.toString()
    
    if(yamatocannonMatches) yamatocannonMatches.innerHTML = data[PlayerIDFromName.YamatoCannon].matches_played.toString()
    if(yamatocannonStreak) yamatocannonStreak.innerHTML = data[PlayerIDFromName.YamatoCannon].streak.toString()
    if(yamatocannonRating) yamatocannonRating.innerHTML = data[PlayerIDFromName.YamatoCannon].rating.toString()
    if(yamatocannonWinPercentage) yamatocannonWinPercentage.innerHTML = data[PlayerIDFromName.YamatoCannon].win_percentage.toString()


      fillRatingTable(data)
  } catch {
    throw new Error("Insert data failed");
    
  }
}

export const fillRatingTable = (playerData: Record<string, DatabaseItem>) => {
  const ratingTable = document.querySelector("#ratings-table")
  const playerArray = Object.values(playerData)
  const sortedPlayerArrayAfterRating = [...playerArray].sort((a, b) => b.rating - a.rating);
  for (const player of sortedPlayerArrayAfterRating) {

    const name = StreamerNameFromProfileID[player.profile_id]
    const trElement = document.createElement("tr")
    trElement.innerHTML = `
      <td class="rating-table-name-column"><span class="fi fi-${player.nationality}"></span>  ${getStreamerName(player)}</td>
      <td>${player.rating}</td>
      <td>${player.win_percentage} %</td>
      <td>${player.matches_played}</td>
      <td>
        <a href='${Links.twitch}${StreamerSocials[name].twitch}'><i class="fa-brands fa-twitch"></i>
        ${(player.live)? 
          `<span class="live-indicator">
            <span class="live-dot"></span>
            LIVE
          </span>` : ''
        }
      </td>
    `
    ratingTable?.appendChild(trElement)
  }
}
export const initiatePlayerData = async () => {
  const playerData = await fetchPlayerData()
  if(!playerData) throw new Error("playerData falsy",)
  const players = playerData.reduce((accumulator, currentItem) => {
    accumulator[currentItem.profile_id] = currentItem;
    return accumulator;
  }, {} as Record<string, typeof playerData[number]>);
  return players
}

export const getStreamerName = (profile: DatabaseItem, defaultName: string = "Unknown"): string => {
  const idAsNumber = Number(profile.profile_id);
  if(!StreamerNameFromProfileID[idAsNumber]) return defaultName 
  if(StreamerNameFromProfileID[idAsNumber] === profile.username) return profile.username
  else return StreamerNameFromProfileID[idAsNumber] + ` (${profile.username})`
};   