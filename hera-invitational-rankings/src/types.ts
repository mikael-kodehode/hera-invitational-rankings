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