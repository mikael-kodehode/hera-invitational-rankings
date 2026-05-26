// types.ts
export interface DatabaseItem {
  id: number;
  created_at: string;
  profile_id: number;
  matches_played: number;
  win_percentage: number;
  leaderboard_rank: number;
  username: string;
  nationality: string;
  wins: number;
  losses: number;
  streak: number;
  rating: number;
}

export const PlayerIDFromName = {
  Atrioc: 518351,
  Day9: 2065858,
  Grubby: 1819870,
  Gunnar : 7304675,
  CooperTV : 10453910,
  Knoff : 228122,
  SingSing : 255573,
  Deathnote : 6481045,
  Uthermal: 4473383,
  PiG: 5735770
} as const

export const StreamerNameFromProfileID: Record<number, string> = {
  518351: "Atrioc",
  2065858: "Day9",
  1819870: "Grubby",
  7304675: "Gunnar",
  10453910: "CooperTV",
  228122: "Knoff",
  255573: "SingSing",
  6481045: "Deathnote",
  4473383: "Uthermal",
  5735770: "PiG"
}

export const Links = {
  aoe2insights: "https://www.aoe2insights.com/user/",
  twitch: "https://www.twitch.tv/",
  youtube: "https://www.youtube.com/@"
}

export type StreamerNameFromProfileID = typeof StreamerNameFromProfileID[keyof typeof StreamerNameFromProfileID]
export type PlayerIDFromName = typeof PlayerIDFromName[keyof typeof PlayerIDFromName]
