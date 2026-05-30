import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject } from "@vercel/analytics";
import { initiateListeners, initiateObservers, insertPlayerData } from "./shared/functions";
import { loadHome } from "./pages/home";


injectSpeedInsights();
inject()
loadHome()
initiateListeners();
insertPlayerData();
initiateObservers();

console.log("loaded");
