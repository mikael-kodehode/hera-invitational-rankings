import { initiatePlayerData, fillRatingTable, initiateListeners, initMobileStatCycle } from "./leaderboard";
import { grubbyProfileInfo, grubbyTrivia } from "./profiles/grubby";
import { day9ProfileInfo, day9Trivia } from "./profiles/day9";
import { deathnoteProfileInfo, deathnoteTrivia } from "./profiles/deathnote";
import { gunnarProfileInfo, gunnarTrivia } from "./profiles/gunnar";
import { knoffProfileInfo, knoffTrivia } from "./profiles/knoff";
import { singsingProfileInfo, singsingTrivia } from "./profiles/singsing";
import { uthermalProfileInfo, uthermalTrivia } from "./profiles/uthermal";
import { pigProfileInfo, pigTrivia } from "./profiles/pig";
import { yamatocannonProfileInfo, yamatocannonTrivia } from "./profiles/yamatocannon";
import { ahmpyProfileInfo, ahmpyTrivia } from "./profiles/ahmpy";
import { lowkoProfileInfo, lowkoTrivia } from "./profiles/lowko";
import { iyouxinProfileInfo, iyouxinTrivia } from "./profiles/iyouxin";

export { initiateListeners, initMobileStatCycle };

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

  const lowkoProfileInfoElement = document.querySelector("#lowko-profile-info")
  const lowkoTriviaElement = document.querySelector("#lowko-trivia")
  const lowkoMatches = document.querySelector("#lowko-matches")
  const lowkoWinPercentage = document.querySelector("#lowko-win-percentage")
  const lowkoRating = document.querySelector("#lowko-rating")
  const lowkoStreak = document.querySelector("#lowko-streak")

  const iyouxinProfileInfoElement = document.querySelector("#iyouxin-profile-info")
  const iyouxinTriviaElement = document.querySelector("#iyouxin-trivia")
  const iyouxinMatches = document.querySelector("#iyouxin-matches")
  const iyouxinWinPercentage = document.querySelector("#iyouxin-win-percentage")
  const iyouxinRating = document.querySelector("#iyouxin-rating")
  const iyouxinStreak = document.querySelector("#iyouxin-streak")

  try {
    const data = await initiatePlayerData()
    fillRatingTable(data)
    if(grubbyProfileInfoElement) grubbyProfileInfoElement.innerHTML = grubbyProfileInfo
    if(grubbyTriviaElement) grubbyTriviaElement.innerHTML = grubbyTrivia
    if(grubbyMatches) grubbyMatches.innerHTML = data['Grubby']?.matches_played?.toString() ?? ''
    if(grubbyStreak) grubbyStreak.innerHTML = data['Grubby']?.streak?.toString() ?? ''
    if(grubbyRating) grubbyRating.innerHTML = data['Grubby']?.rating?.toString() ?? ''
    if(grubbyWinPercentage) grubbyWinPercentage.innerHTML = data['Grubby']?.win_percentage?.toString() ?? ''

    if(day9ProfileInfoElement) day9ProfileInfoElement.innerHTML = day9ProfileInfo
    if(day9TriviaElement) day9TriviaElement.innerHTML = day9Trivia
    if(day9Matches) day9Matches.innerHTML = data['Day9']?.matches_played?.toString() ?? ''
    if(day9Streak) day9Streak.innerHTML = data['Day9']?.streak?.toString() ?? ''
    if(day9Rating) day9Rating.innerHTML = data['Day9']?.rating?.toString() ?? ''
    if(day9WinPercentage) day9WinPercentage.innerHTML = data['Day9']?.win_percentage?.toString() ?? ''

    if(deathnoteProfileInfoElement) deathnoteProfileInfoElement.innerHTML = deathnoteProfileInfo
    if(deathnoteTriviaElement) deathnoteTriviaElement.innerHTML = deathnoteTrivia
    if(deathnoteMatches) deathnoteMatches.innerHTML = data['Deathnote']?.matches_played?.toString() ?? ''
    if(deathnoteStreak) deathnoteStreak.innerHTML = data['Deathnote']?.streak?.toString() ?? ''
    if(deathnoteRating) deathnoteRating.innerHTML = data['Deathnote']?.rating?.toString() ?? ''
    if(deathnoteWinPercentage) deathnoteWinPercentage.innerHTML = data['Deathnote']?.win_percentage?.toString() ?? ''

    if(gunnarProfileInfoElement) gunnarProfileInfoElement.innerHTML = gunnarProfileInfo
    if(gunnarTriviaElement) gunnarTriviaElement.innerHTML = gunnarTrivia
    if(gunnarMatches) gunnarMatches.innerHTML = data['Gunnar']?.matches_played?.toString() ?? ''
    if(gunnarStreak) gunnarStreak.innerHTML = data['Gunnar']?.streak?.toString() ?? ''
    if(gunnarRating) gunnarRating.innerHTML = data['Gunnar']?.rating?.toString() ?? ''
    if(gunnarWinPercentage) gunnarWinPercentage.innerHTML = data['Gunnar']?.win_percentage?.toString() ?? ''

    if(knoffProfileInfoElement) knoffProfileInfoElement.innerHTML = knoffProfileInfo
    if(knoffTriviaElement) knoffTriviaElement.innerHTML = knoffTrivia
    if(knoffMatches) knoffMatches.innerHTML = data['Knoff']?.matches_played?.toString() ?? ''
    if(knoffStreak) knoffStreak.innerHTML = data['Knoff']?.streak?.toString() ?? ''
    if(knoffRating) knoffRating.innerHTML = data['Knoff']?.rating?.toString() ?? ''
    if(knoffWinPercentage) knoffWinPercentage.innerHTML = data['Knoff']?.win_percentage?.toString() ?? ''

    if(singsingProfileInfoElement) singsingProfileInfoElement.innerHTML = singsingProfileInfo
    if(singsingTriviaElement) singsingTriviaElement.innerHTML = singsingTrivia
    if(singsingMatches) singsingMatches.innerHTML = data['SingSing']?.matches_played?.toString() ?? ''
    if(singsingStreak) singsingStreak.innerHTML = data['SingSing']?.streak?.toString() ?? ''
    if(singsingRating) singsingRating.innerHTML = data['SingSing']?.rating?.toString() ?? ''
    if(singsingWinPercentage) singsingWinPercentage.innerHTML = data['SingSing']?.win_percentage?.toString() ?? ''

    if(uthermalProfileInfoElement) uthermalProfileInfoElement.innerHTML = uthermalProfileInfo
    if(uthermalTriviaElement) uthermalTriviaElement.innerHTML = uthermalTrivia
    if(uthermalMatches) uthermalMatches.innerHTML = data['uThermal']?.matches_played?.toString() ?? ''
    if(uthermalStreak) uthermalStreak.innerHTML = data['uThermal']?.streak?.toString() ?? ''
    if(uthermalRating) uthermalRating.innerHTML = data['uThermal']?.rating?.toString() ?? ''
    if(uthermalWinPercentage) uthermalWinPercentage.innerHTML = data['uThermal']?.win_percentage?.toString() ?? ''

    if(pigProfileInfoElement) pigProfileInfoElement.innerHTML = pigProfileInfo
    if(pigTriviaElement) pigTriviaElement.innerHTML = pigTrivia
    if(pigMatches) pigMatches.innerHTML = data['PiG']?.matches_played?.toString() ?? ''
    if(pigStreak) pigStreak.innerHTML = data['PiG']?.streak?.toString() ?? ''
    if(pigRating) pigRating.innerHTML = data['PiG']?.rating?.toString() ?? ''
    if(pigWinPercentage) pigWinPercentage.innerHTML = data['PiG']?.win_percentage?.toString() ?? ''

    if(yamatocannonProfileInfoElement) yamatocannonProfileInfoElement.innerHTML = yamatocannonProfileInfo
    if(yamatocannonTriviaElement) yamatocannonTriviaElement.innerHTML = yamatocannonTrivia
    if(yamatocannonMatches) yamatocannonMatches.innerHTML = data['YamatoCannon']?.matches_played?.toString() ?? ''
    if(yamatocannonStreak) yamatocannonStreak.innerHTML = data['YamatoCannon']?.streak?.toString() ?? ''
    if(yamatocannonRating) yamatocannonRating.innerHTML = data['YamatoCannon']?.rating?.toString() ?? ''
    if(yamatocannonWinPercentage) yamatocannonWinPercentage.innerHTML = data['YamatoCannon']?.win_percentage?.toString() ?? ''

    if(ahmpyProfileInfoElement) ahmpyProfileInfoElement.innerHTML = ahmpyProfileInfo
    if(ahmpyTriviaElement) ahmpyTriviaElement.innerHTML = ahmpyTrivia
    if(ahmpyMatches) ahmpyMatches.innerHTML = data['Ahmpy']?.matches_played?.toString() ?? ''
    if(ahmpyStreak) ahmpyStreak.innerHTML = data['Ahmpy']?.streak?.toString() ?? ''
    if(ahmpyRating) ahmpyRating.innerHTML = data['Ahmpy']?.rating?.toString() ?? ''
    if(ahmpyWinPercentage) ahmpyWinPercentage.innerHTML = data['Ahmpy']?.win_percentage?.toString() ?? ''

    if(lowkoProfileInfoElement) lowkoProfileInfoElement.innerHTML = lowkoProfileInfo
    if(lowkoTriviaElement) lowkoTriviaElement.innerHTML = lowkoTrivia
    if(lowkoMatches) lowkoMatches.innerHTML = data['LowKo']?.matches_played?.toString() ?? ''
    if(lowkoStreak) lowkoStreak.innerHTML = data['LowKo']?.streak?.toString() ?? ''
    if(lowkoRating) lowkoRating.innerHTML = data['LowKo']?.rating?.toString() ?? ''
    if(lowkoWinPercentage) lowkoWinPercentage.innerHTML = data['LowKo']?.win_percentage?.toString() ?? ''

    if(iyouxinProfileInfoElement) iyouxinProfileInfoElement.innerHTML = iyouxinProfileInfo
    if(iyouxinTriviaElement) iyouxinTriviaElement.innerHTML = iyouxinTrivia
    if(iyouxinMatches) iyouxinMatches.innerHTML = data['iyouxin']?.matches_played?.toString() ?? ''
    if(iyouxinStreak) iyouxinStreak.innerHTML = data['iyouxin']?.streak?.toString() ?? ''
    if(iyouxinRating) iyouxinRating.innerHTML = data['iyouxin']?.rating?.toString() ?? ''
    if(iyouxinWinPercentage) iyouxinWinPercentage.innerHTML = data['iyouxin']?.win_percentage?.toString() ?? ''

    document.querySelectorAll('[id$="-streak"]').forEach(el => {
      const val = parseInt(el.textContent || '0', 10)
      if (val > 0) el.classList.add('text-emerald-400')
      else if (val < 0) el.classList.add('text-red-400')
      else el.classList.add('text-slate-400')
    })

  } catch {
    throw new Error("Insert data failed");
  }
}

export const initiateObservers = () => {
  const articles = document.querySelectorAll<HTMLElement>(".for-scroll-observer")
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-link"))
  const navRating = document.querySelector<HTMLAnchorElement>("#nav-ratings")
  const navMobileRatings = document.querySelector<HTMLAnchorElement>("#nav-mobile-ratings")

  if(navRating) navLinks.push(navRating)
  if(navMobileRatings) navLinks.push(navMobileRatings)
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -50% 0px",
    threshold: 0,
  };

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (activeId === 'nav-ratings' && link.getAttribute('id') === 'nav-ratings') {
            link.classList.add('active-page-nav')
          }
          else if (link.getAttribute("href") === `#${activeId}`) link.classList.add("active-page-nav")
          else {
            link.classList.remove("active-page-nav")
          }
        });
      }
    });
  };
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  articles.forEach((article) => observer.observe(article));
}

export const initSidebarToggle = () => {
  const toggle = document.getElementById('sidebar-toggle');
  const nav = document.querySelector('.page-nav');
  if (!toggle || !nav) return;

  const collapsed = localStorage.getItem('sidebar-collapsed') === 'true';
  if (collapsed) nav.classList.add('collapsed');

  const toggleCollapsed = () => {
    nav.classList.toggle('collapsed');
    localStorage.setItem('sidebar-collapsed', String(nav.classList.contains('collapsed')));
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleCollapsed();
  });

  nav.addEventListener('click', () => {
    if (nav.classList.contains('collapsed')) toggleCollapsed();
  });
}
