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
  live: boolean;
  youtube: string;
  twitch: string;
  name: string;
}

export const Links = {
  aoe2insights: "https://www.aoe2insights.com/user/",
  twitch: "https://www.twitch.tv/",
  youtube: "https://www.youtube.com/"
}

export type Links = typeof Links[keyof typeof Links]
