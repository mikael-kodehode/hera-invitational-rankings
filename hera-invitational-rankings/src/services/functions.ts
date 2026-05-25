import { fetchPlayerData } from "./api";
import { PlayerID } from "../types";
import type { DatabaseItem } from "../types";
  
export const initiateListeners = () => {
  const GrubbyButton = document.querySelector('#GrubbyButton');
  const Day9Button = document.querySelector('#Day9Button');
  const AtriocButton = document.querySelector('#AtriocButton');
  const GrubbyProfile = document.querySelector("#GrubbyProfile")
  const Day9Profile = document.querySelector("#Day9Profile")
  const AtriocProfile = document.querySelector("#AtriocProfile")

  const homeContainer = document.querySelector("#home")
  const ratingsContainer = document.querySelector("#ratings")
  const navHomeButton = document.querySelector("#nav-home")
  const navRatingsButton = document.querySelector("#nav-ratings")

  const activateProfile = (profile: Element) => {
    GrubbyProfile?.setAttribute("hidden", "true")
    Day9Profile?.setAttribute("hidden", "true")
    AtriocProfile?.setAttribute("hidden","true")

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
    console.log(page)
  }
  try {
    GrubbyButton?.addEventListener('click', () => {
      if(GrubbyProfile) activateProfile(GrubbyProfile)
    });
    Day9Button?.addEventListener('click', () => {
      if(Day9Profile) activateProfile(Day9Profile)
    });
    AtriocButton?.addEventListener('click', () => {
      if(AtriocProfile) activateProfile(AtriocProfile)
    });
    navRatingsButton?.addEventListener('click', () => {
      if(ratingsContainer) activatePage(ratingsContainer)
    })
    navHomeButton?.addEventListener('click', () => {
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

  const atriocMatches = document.querySelector("#atrioc-matches")
  const atriocWinPercentage = document.querySelector("#atrioc-win-percentage")
  const atriocRating = document.querySelector("#atrioc-rating")
  const atriocStreak = document.querySelector("#atrioc-streak")

  try {
    const data = await initiatePlayerData()
    console.log(data)
  
    if(grubbyMatches) grubbyMatches.innerHTML = data[PlayerID.Grubby].matches_played.toString()
    if(grubbyStreak) grubbyStreak.innerHTML = data[PlayerID.Grubby].streak.toString()
    if(grubbyRating) grubbyRating.innerHTML = data[PlayerID.Grubby].rating.toString()
    if(grubbyWinPercentage) grubbyWinPercentage.innerHTML = data[PlayerID.Grubby].win_percentage.toString()
  
    if(day9Matches) day9Matches.innerHTML = data[PlayerID.Day9].matches_played.toString()
    if(day9Streak) day9Streak.innerHTML = data[PlayerID.Day9].streak.toString()
    if(day9Rating) day9Rating.innerHTML = data[PlayerID.Day9].rating.toString()
    if(day9WinPercentage) day9WinPercentage.innerHTML = data[PlayerID.Day9].win_percentage.toString()
  
    if(atriocMatches) atriocMatches.innerHTML = data[PlayerID.Atrioc].matches_played.toString()
    if(atriocStreak) atriocStreak.innerHTML = data[PlayerID.Atrioc].streak.toString()
    if(atriocRating) atriocRating.innerHTML = data[PlayerID.Atrioc].rating.toString()
    if(atriocWinPercentage) atriocWinPercentage.innerHTML = data[PlayerID.Atrioc].win_percentage.toString()
  
    fillRatingTable(data)
  } catch {
    throw new Error("Insert data failed");
    
  }
}

export const fillRatingTable = (playerData: Record<string, DatabaseItem>) => {
  const ratingTable = document.querySelector("#ratings-table")
  const playerArray = Object.values(playerData)
  for (const player of playerArray) {
    
    const trElement = document.createElement("tr")
    trElement.innerHTML = `
      <td></td>
      <td>${player.username}</td>
      <td>${player.rating}</td>
      <td>${player.win_percentage} %</td>
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