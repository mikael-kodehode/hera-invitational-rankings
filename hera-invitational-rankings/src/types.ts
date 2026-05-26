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

export const PlayerID = {
  Atrioc: 518351,
  Day9: 2065858,
  Grubby: 1819870,
  Gunnar : 7304675,
  Cooper : 10453910,
  Knoff : 228122,
  SingSing : 255573,
  Deathnote : 6481045
} as const

export const PlayerNationality = {
  Atrioc: "usa",
  Day9: "usa",
  Grubby: "netherlands",
  Gunnar : "us",
  Cooper : "austria",
  Knoff : "sweden",
  SingSing : "netherlands",
  Deathnote : "russia"
} as const


export type PlayersID = typeof PlayerID[keyof typeof PlayerID]
export type PlayerNationality = typeof PlayerNationality[keyof typeof PlayerNationality]
