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
  twitch: twitchNames;
  name: string;
  highest_rating: number;
  team: string;
  last_game_streamed: string;
  last_stream_title: string;
}

export type SortAfter = 'Hera' | 'Grubby' | 'Day9tv' | 'followdeathnote' | 'Atrioc' | 'Knoff' | 'singsing' | 'uThermalSC2' | 'x5_PiG' | 'ahmpy' | 'YamatoCannon' | 'Lowkotv' | 'iyouxin' | 'captainlance9' | 'Pestily' | 'wagamamatv' | 'OhTofu' | 'AquaFPS' | 'jabo' | 'thespiffingbrit' | 'MrLlamaSC'
export type twitchNames = 'grubby' | 'day9tv' | 'followdeathnote' | 'atrioc' | 'knoff' | 'singsing' | 'uthermalsc2' | 'x5_pig' | 'ahmpy' | 'yamatocannon' | 'lowkotv' | 'iyouxin' | 'captainlance9' | 'pestily' | 'wagamamatv' | 'ohtofu' | 'aquafps' | 'jabo' | 'thespiffingbrit' | 'mrllamasc'
export type PlayerNames = Omit<SortAfter,'Hera'>
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
  twitch_name: SortAfter
}

export interface IPlayerCivStats {
  civilizations: {name: string;civ_id: number};
  games_played: number;
  wins: number;
}

interface IPlayerMapStats {
  player_id: string;
  map_id: number;
  games_played: number; 
  wins: number;
  maps: {name: string; id: number};
}

export interface IPlayerStatDBItem {
  id: string;
  profile_id: number;
  name: string;
  player_best_civ: IPlayerBestCiv[];
  player_maps_civ: IPlayerBestMap[];
  PlayerStatistics: IDatabaseItem;
  player_games: IPlayerGames[]
  player_map_stats: IPlayerMapStats[];
  player_civ_stats: IPlayerCivStats[];
  player_civ_map_stats_view: IPlayerCivMapViewStats[];
}

export interface IPlayerCivMapViewStats {
  player_id: string; // uuid
  player_name: string;
  map_id: number;
  map_name: string;
  civ_id: number;
  civ_name: string;
  games_played: number;
  wins: number;
  winrate: number;
}

export interface IPlayerGames {
  player_id: string;
  match_id: number;
  won: boolean;
  played_at: number;
  maps: {id: number;name: string;};
  civilizations: {civ_id: number; name: string};
}

export interface IOverallStats {
  games_played: number;
  unique_players: number;
  unique_civilizations: number;
  unique_maps: number;
  avg_winrate: number;
  active_days: number;
  most_played_civ: string;
  most_played_civ_games: number;
  most_played_map: string;
  most_played_map_games: number;
}

export interface IPlayerBestCiv {
  player_id: string;
  civ_id: number;
  civilizations: {name: string}
  games_played: number;
  wins: number;
  winrate: number;
}

export interface IPlayerBestMap {
  player_id: string;
  map_id: number;
  maps: {name: string}
  games_played: number;
  wins: number;
  winrate: number;
}

export interface IPlayerHeatmapSource {
    civ_id: number;
    civ_name: string;
    games_played: number;
    map_id: number;
    map_name: string;
    winrate: number;
}

export const Links = {
  aoe2insights: "https://www.aoe2insights.com/user/",
  twitch: "https://www.twitch.tv/",
  youtube: "https://www.youtube.com/"
}

export type Links = typeof Links[keyof typeof Links]
