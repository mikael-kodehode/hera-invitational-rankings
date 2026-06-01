// types.ts
export interface IDatabaseItem {
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

export interface IClipsDbItem {
  id: number;
  created_at: string;
  twitch_id: string;
  twitch_clip_id: string;
  title: string;
  url: string;
  creator_name: string;
  view_count: number;
  duration_seconds: number;
  clip_created_at: string;
  raw: JSON;
  thumbnail_url: string;
  twitch_name: string;
}

export const Links = {
  aoe2insights: "https://www.aoe2insights.com/user/",
  twitch: "https://www.twitch.tv/",
  youtube: "https://www.youtube.com/"
}

export type Links = typeof Links[keyof typeof Links]
