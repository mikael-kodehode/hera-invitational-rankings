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
}

export const PlayerIDFromName = {
  Atrioc: 518351,
  Day9: 2065858,
  Grubby: 1819870,
  Gunnar : 7304675,
  CooperTV : 705858,
  Knoff : 228122,
  SingSing : 255573,
  Deathnote : 6481045,
  Uthermal: 4473383,
  PiG: 5735770,
  Ahmpy: 25478303,
  YamatoCannon: 25503675
} as const

export const StreamerNameFromProfileID: Record<number, string> = {
  518351: "Atrioc",
  2065858: "Day9",
  1819870: "Grubby",
  7304675: "Gunnar",
  705858: "CooperTV",
  228122: "Knoff",
  255573: "SingSing",
  6481045: "Deathnote",
  4473383: "Uthermal",
  5735770: "PiG",
  25478303: "Ahmpy",
  25503675: "YamatoCannon"
}

export const StreamerSocials: Record<string, {twitch:string,youtube:string}> = {
  "Grubby": {
    twitch: "grubby",
    youtube: "FollowGrubbby"
  },
  "Day9": {
    twitch: "day9tv",
    youtube: "day9tv"
  },
  "Atrioc": {
    twitch: "atrioc",
    youtube: "atrioc"
  },
  "Gunnar": {
    twitch: "gunnar",
    youtube: "GunnarDota"
  },
  "CooperTV": {
    twitch: "coopertv",
    youtube: "UC1tTkPsQy_eSv4_9-ka-3GQ"
  },
  "Knoff": {
    twitch: "knoff",
    youtube: "@campknoff"
  },
  "SingSing": {
    twitch: "singsing",
    youtube: "UC6c3OP2fWzaH5Nq5kh4m_SA"
  },
  "Deathnote": {
    twitch: "followdeathnote",
    youtube: "UChGsaIBM_pEKkdXjYcJdpzA"
  },
  "Uthermal": {
    twitch: "uthermalsc2",
    youtube: "uthermal"
  },
  "PiG": {
    twitch: "x5_pig",
    youtube: "PiGstarcraft"
  },
  "Ahmpy": {
    twitch: "ahmpy",
    youtube: "@Ahmpy"
  },
  "YamatoCannon": {
    twitch: "yamatocannon",
    youtube: "UCRRfSRlDq2ma7xp_8HYvYeA"
  }
}

export const Links = {
  aoe2insights: "https://www.aoe2insights.com/user/",
  twitch: "https://www.twitch.tv/",
  youtube: "https://www.youtube.com/"
}

export type StreamerSocials = typeof StreamerSocials[keyof typeof StreamerSocials]
export type Links = typeof Links[keyof typeof Links]
export type StreamerNameFromProfileID = typeof StreamerNameFromProfileID[keyof typeof StreamerNameFromProfileID]
export type PlayerIDFromName = typeof PlayerIDFromName[keyof typeof PlayerIDFromName]

