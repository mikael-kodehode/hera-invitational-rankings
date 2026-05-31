// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';
import type { IDatabaseItem, IClipsDbItem } from '../types.ts';

// Vite requires 'import.meta.env' for environment variables.
// Adding 'as string' ensures TypeScript doesn't complain about them being undefined.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabaseClient = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Fetches all public rows from your specified table.
 * Returns an array of your typed DatabaseItems.
 */
const mockPlayerData: IDatabaseItem[] = [
  { id: 1, created_at: '2025-01-01', profile_id: 1, matches_played: 120, win_percentage: 58, leaderboard_rank: 1, username: 'Grubby', nationality: 'nl', wins: 70, losses: 50, streak: 3, rating: 1850, live: true, youtube: 'FollowGrubby', twitch: 'grubby', name: 'Grubby' },
  { id: 2, created_at: '2025-01-01', profile_id: 2, matches_played: 95, win_percentage: 52, leaderboard_rank: 2, username: 'Day9', nationality: 'us', wins: 49, losses: 46, streak: 1, rating: 1720, live: false, youtube: 'day9tv', twitch: 'day9', name: 'Day9' },
  { id: 3, created_at: '2025-01-01', profile_id: 3, matches_played: 80, win_percentage: 48, leaderboard_rank: 3, username: 'Deathnote', nationality: 'de', wins: 38, losses: 42, streak: -2, rating: 1680, live: false, youtube: '', twitch: 'followdeathnote', name: 'Deathnote' },
  { id: 4, created_at: '2025-01-01', profile_id: 4, matches_played: 110, win_percentage: 55, leaderboard_rank: 4, username: 'Gunnar', nationality: 'us', wins: 60, losses: 50, streak: 2, rating: 1750, live: true, youtube: 'GunnarDota', twitch: 'gunnar', name: 'Gunnar' },
  { id: 5, created_at: '2025-01-01', profile_id: 5, matches_played: 140, win_percentage: 60, leaderboard_rank: 5, username: 'Knoff', nationality: 'se', wins: 84, losses: 56, streak: 4, rating: 1800, live: false, youtube: 'campknoff', twitch: 'knoff', name: 'Knoff' },
  { id: 6, created_at: '2025-01-01', profile_id: 6, matches_played: 75, win_percentage: 45, leaderboard_rank: 6, username: 'SingSing', nationality: 'nl', wins: 34, losses: 41, streak: -1, rating: 1650, live: false, youtube: '', twitch: 'singsing', name: 'SingSing' },
  { id: 7, created_at: '2025-01-01', profile_id: 7, matches_played: 130, win_percentage: 57, leaderboard_rank: 7, username: 'uThermal', nationality: 'nl', wins: 74, losses: 56, streak: 2, rating: 1780, live: true, youtube: 'uthermal', twitch: 'uthermalsc2', name: 'uThermal' },
  { id: 8, created_at: '2025-01-01', profile_id: 8, matches_played: 100, win_percentage: 53, leaderboard_rank: 8, username: 'PiG', nationality: 'au', wins: 53, losses: 47, streak: 1, rating: 1700, live: false, youtube: 'PiGstarcraft', twitch: 'x5_pig', name: 'PiG' },
  { id: 9, created_at: '2025-01-01', profile_id: 9, matches_played: 60, win_percentage: 42, leaderboard_rank: 9, username: 'Ahmpy', nationality: 'us', wins: 25, losses: 35, streak: -3, rating: 1600, live: false, youtube: 'Ahmpy', twitch: 'ahmpy', name: 'Ahmpy' },
  { id: 10, created_at: '2025-01-01', profile_id: 10, matches_played: 90, win_percentage: 50, leaderboard_rank: 10, username: 'YamatoCannon', nationality: 'se', wins: 45, losses: 45, streak: 0, rating: 1690, live: false, youtube: '', twitch: 'yamatocannon', name: 'YamatoCannon' },
  { id: 11, created_at: '2025-01-01', profile_id: 11, matches_played: 115, win_percentage: 56, leaderboard_rank: 11, username: 'LowKo', nationality: 'nl', wins: 64, losses: 51, streak: 2, rating: 1740, live: true, youtube: 'morelowko', twitch: 'lowkotv', name: 'LowKo' },
];

export const fetchPlayerData = async (): Promise<IDatabaseItem[]> => {
  if (!supabaseClient) {
    console.warn('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Using mock player data.');
    return mockPlayerData;
  }

  // We type the table target so 'data' inherits the DatabaseItem[] shape
  const { data, error } = await supabaseClient
    .from('PlayerStatistics')
    .select('*');

  if (error) {
    console.error("Error loading data:", error.message);
    return [];
  }

  // TypeScript now guarantees 'data' matches your expected database structure
  return data as IDatabaseItem[];
};

export const fetchTwitchClips = async (): Promise<IClipsDbItem[]> => {
  if (!supabaseClient) {
    console.warn('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Cannot fetch Twitch clips.');
    return [];
  }
  try {
    const { data, error } = await supabaseClient
      .from('TwitchClips')
      .select('*');
    if (error) {
      console.error("Error in fetchTwitchClips:", error);
      return [];
    }
    return data as IClipsDbItem[];
  } catch (error) {
    console.error("fetchTwitchClips failed:", error);
    return [];
  }
};