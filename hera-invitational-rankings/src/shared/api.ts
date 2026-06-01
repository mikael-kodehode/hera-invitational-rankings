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

const mockClipsData: IClipsDbItem[] = [
  { id: 1, created_at: '2026-05-30', twitch_id: '111', twitch_clip_id: 'Zmw428DTS9kqY08x', title: 'Close fight full', url: 'https://clips.twitch.tv/Zmw428DTS9kqY08x', creator_name: 'Grubby', view_count: 1520, duration_seconds: 30, clip_created_at: '2026-05-28T12:00:00Z', raw: JSON.parse('{}'), thumbnail_url: 'https://clips-media-assets2.twitch.tv/44029389408-offset-1500-preview-480x272.jpg', twitch_name: 'grubby' },
  { id: 2, created_at: '2026-05-29', twitch_id: '109', twitch_clip_id: 'wmUWzkfShKwJvVA2', title: 'HE CANT LOSE', url: 'https://clips.twitch.tv/wmUWzkfShKwJvVA2', creator_name: 'SingSing', view_count: 3420, duration_seconds: 45, clip_created_at: '2026-05-27T15:30:00Z', raw: JSON.parse('{}'), thumbnail_url: 'https://clips-media-assets2.twitch.tv/44029389408-offset-1500-preview-480x272.jpg', twitch_name: 'singsing' },
  { id: 3, created_at: '2026-05-28', twitch_id: '2722', twitch_clip_id: 'flDsYb8KaFkd44HF', title: 'jebaited', url: 'https://clips.twitch.tv/flDsYb8KaFkd44HF', creator_name: 'Lowko', view_count: 890, duration_seconds: 60, clip_created_at: '2026-05-26T09:00:00Z', raw: JSON.parse('{}'), thumbnail_url: 'https://clips-media-assets2.twitch.tv/44029389408-offset-1500-preview-480x272.jpg', twitch_name: 'lowkotv' },
  { id: 4, created_at: '2026-05-27', twitch_id: '114', twitch_clip_id: 'jTCLNSKC-3d3Szt4', title: 'URGOT KENCH TECH', url: 'https://clips.twitch.tv/jTCLNSKC-3d3Szt4', creator_name: 'uThermal', view_count: 2100, duration_seconds: 25, clip_created_at: '2026-05-25T18:45:00Z', raw: JSON.parse('{}'), thumbnail_url: 'https://clips-media-assets2.twitch.tv/44029389408-offset-1500-preview-480x272.jpg', twitch_name: 'uthermalsc2' },
  { id: 5, created_at: '2026-05-26', twitch_id: '108', twitch_clip_id: 'jLwjiSht2E4jMaRx', title: 'open the graves', url: 'https://clips.twitch.tv/jLwjiSht2E4jMaRx', creator_name: 'Gunnar', view_count: 560, duration_seconds: 35, clip_created_at: '2026-05-24T21:15:00Z', raw: JSON.parse('{}'), thumbnail_url: 'https://clips-media-assets2.twitch.tv/44029389408-offset-1500-preview-480x272.jpg', twitch_name: 'gunnar' },
  { id: 6, created_at: '2026-05-25', twitch_id: '113', twitch_clip_id: 'VZPmqfC4WJe6GIXb', title: 'Is he grieving me?', url: 'https://clips.twitch.tv/VZPmqfC4WJe6GIXb', creator_name: 'Ahmpy', view_count: 430, duration_seconds: 40, clip_created_at: '2026-05-23T14:30:00Z', raw: JSON.parse('{}'), thumbnail_url: 'https://clips-media-assets2.twitch.tv/44029389408-offset-1500-preview-480x272.jpg', twitch_name: 'ahmpy' },
  { id: 7, created_at: '2026-05-24', twitch_id: '107', twitch_clip_id: 'KCNAZ0pEZdLTcZ-I', title: 'Simp brigade ganks Sing', url: 'https://clips.twitch.tv/KCNAZ0pEZdLTcZ-I', creator_name: 'YamatoCannon', view_count: 1120, duration_seconds: 55, clip_created_at: '2026-05-22T10:00:00Z', raw: JSON.parse('{}'), thumbnail_url: 'https://clips-media-assets2.twitch.tv/44029389408-offset-1500-preview-480x272.jpg', twitch_name: 'yamatocannon' },
  { id: 8, created_at: '2026-05-23', twitch_id: '115', twitch_clip_id: 'vCfwnDsnla8g-0nT', title: 'SECRET', url: 'https://clips.twitch.tv/vCfwnDsnla8g-0nT', creator_name: 'Day9', view_count: 2780, duration_seconds: 120, clip_created_at: '2026-05-21T16:00:00Z', raw: JSON.parse('{}'), thumbnail_url: 'https://clips-media-assets2.twitch.tv/44029389408-offset-1500-preview-480x272.jpg', twitch_name: 'day9tv' },
]

export const fetchTwitchClips = async (): Promise<IClipsDbItem[]> => {
  if (!supabaseClient) {
    console.warn('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Using mock clip data.');
    return mockClipsData;
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