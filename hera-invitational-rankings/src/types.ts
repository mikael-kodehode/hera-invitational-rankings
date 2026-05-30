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
  created_at: Date;
  twitch_id: string;
  twitch_clip_id: string;
  title: string;
  url: string;
  creator_name: string;
  view_count: number;
  duration_seconds: number;
  clip_created_at: string;
  inserted_at: Date;
  profile_id: number;
  raw: JSON;
  thumbnail_url: string;
}

export const TwitchIdFromTwitchChannel: Record<string, number> = {
  'knoff': 116,
  'singsing': 109,
  'lowkotv': 2722,
  'grubby': 111,
  'day9tv': 115,
  'uthermalsc2': 114,
  'x5_pig': 117,
  'followdeathnote': 110,
  'gunnar': 108,
  'ahmpy': 113,
  'iyouxin': 6022,
  'yamatocannon': 107,
  'mrllamasc': 6640
}

export const Links = {
  aoe2insights: "https://www.aoe2insights.com/user/",
  twitch: "https://www.twitch.tv/",
  youtube: "https://www.youtube.com/"
}

export type TwitchIdFromTwitchChannel = typeof TwitchIdFromTwitchChannel[keyof typeof TwitchIdFromTwitchChannel]
export type Links = typeof Links[keyof typeof Links]
