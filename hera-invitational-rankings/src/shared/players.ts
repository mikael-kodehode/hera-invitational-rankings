export interface PlayerLink {
  url: string
  title: string
  icon?: string
  iconColor?: string
  img?: string
}

export interface PlayerProfile {
  key: string
  name: string
  flag: string
  image: string
  links: PlayerLink[]
}

export const players: PlayerProfile[] = [
  {
    key: 'grubby', name: 'Grubby', flag: 'nl', image: '/grubby-profile-picture.jpg',
    links: [
      { url: 'https://www.youtube.com/FollowGrubby', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/grubby', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/1819870', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://en.wikipedia.org/wiki/Grubby', title: 'Wikipedia', icon: 'fa-brands fa-wikipedia-w' },
      { url: 'https://liquipedia.net/warcraft/Grubby', title: 'Liquipedia', img: '/liquipedia_icon_menu.png' },
      { url: 'https://discord.gg/grubby', title: 'Discord', icon: 'fa-brands fa-discord', iconColor: 'text-indigo-500' },
      { url: 'http://instagram.com/followgrubby', title: 'Instagram', icon: 'fa-brands fa-instagram', iconColor: 'text-pink-500' },
      { url: 'https://www.tiktok.com/@grubbytiktok', title: 'TikTok', icon: 'fa-brands fa-tiktok' },
    ]
  },
  {
    key: 'day9', name: 'Day9', flag: 'us', image: '/day9-profile-picture.webp',
    links: [
      { url: 'https://www.youtube.com/day9tv', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/day9', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/2065858', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://en.wikipedia.org/wiki/Sean_Plott', title: 'Wikipedia', icon: 'fa-brands fa-wikipedia-w' },
      { url: 'https://liquipedia.net/starcraft/Day(9)', title: 'Liquipedia', img: '/liquipedia_icon_menu.png' },
      { url: 'https://day9.tv/', title: 'Day9.tv', img: '/day9tv-web-logo.webp' },
      { url: 'https://discordapp.com/invite/day9tv', title: 'Discord', icon: 'fa-brands fa-discord', iconColor: 'text-indigo-500' },
      { url: 'https://www.reddit.com/r/day9', title: 'Reddit', img: '/iconmonstr-reddit-5.png' },
    ]
  },
  {
    key: 'deathnote', name: 'Deathnote', flag: 'ru', image: '/deathnote-profile-picture.jpg',
    links: [
      { url: 'https://www.youtube.com/channel/UChGsaIBM_pEKkdXjYcJdpzA', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/followdeathnote', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/6481045', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://liquipedia.net/warcraft/Deathnote', title: 'Liquipedia', img: '/liquipedia_icon_menu.png' },
    ]
  },
  {
    key: 'knoff', name: 'Knoff', flag: 'se', image: '/knoff-profile-picture.png',
    links: [
      { url: 'https://www.youtube.com/@campknoff', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/knoff', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/228122', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://liquipedia.net/warcraft/KnOfF', title: 'Liquipedia', img: '/liquipedia_icon_menu.png' },
      { url: 'https://www.campknoff.com/', title: 'Camp Knoff', img: '/campknoff.webp' },
      { url: 'https://discord.gg/5aKRjMyGRa', title: 'Discord', icon: 'fa-brands fa-discord', iconColor: 'text-indigo-500' },
      { url: 'https://www.instagram.com/ptknopf/', title: 'Instagram', icon: 'fa-brands fa-instagram', iconColor: 'text-pink-500' },
    ]
  },
  {
    key: 'singsing', name: 'SingSing', flag: 'nl', image: '/singsing-profile-picture.webp',
    links: [
      { url: 'https://www.youtube.com/channel/UC6c3OP2fWzaH5Nq5kh4m_SA', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/singsing', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/255573', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://liquipedia.net/dota2/SingSing', title: 'Liquipedia', img: '/liquipedia_icon_menu.png' },
      { url: 'https://www.instagram.com/wehsing', title: 'Instagram', icon: 'fa-brands fa-instagram', iconColor: 'text-pink-500' },
      { url: 'https://www.tiktok.com/@singsingclips', title: 'TikTok', icon: 'fa-brands fa-tiktok' },
    ]
  },
  {
    key: 'uthermal', name: 'uThermal', flag: 'nl', image: '/uthermal-profile-picture.jpg',
    links: [
      { url: 'https://www.youtube.com/uthermal', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/uthermalsc2', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/4473383', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://liquipedia.net/starcraft2/UThermal', title: 'Liquipedia', img: '/liquipedia_icon_menu.png' },
      { url: 'https://discord.com/invite/0sOOTkUVcpQxHvTs', title: 'Discord', icon: 'fa-brands fa-discord', iconColor: 'text-indigo-500' },
      { url: 'https://www.instagram.com/marcxd_', title: 'Instagram', icon: 'fa-brands fa-instagram', iconColor: 'text-pink-500' },
    ]
  },
  {
    key: 'pig', name: 'PiG', flag: 'au', image: '/pig-profile-picture.jpg',
    links: [
      { url: 'https://www.youtube.com/PiGstarcraft', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/x5_pig', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/5735770', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://liquipedia.net/starcraft2/PiG', title: 'Liquipedia', img: '/liquipedia_icon_menu.png' },
      { url: 'https://www.pigstarcraft.com/', title: 'PiG', img: '/pig-web-logo.png' },
      { url: 'https://www.patreon.com/cw/PiGSC2', title: 'Patreon', icon: 'fa-brands fa-patreon', iconColor: 'text-orange-500' },
      { url: 'https://discord.gg/SkhbzCM', title: 'Discord', icon: 'fa-brands fa-discord', iconColor: 'text-indigo-500' },
    ]
  },
  {
    key: 'ahmpy', name: 'Ahmpy', flag: 'us', image: '/ahmpy-profile-picture.png',
    links: [
      { url: 'https://www.youtube.com/@Ahmpy', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/ahmpy', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/25478303', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
    ]
  },
  {
    key: 'yamatocannon', name: 'YamatoCannon', flag: 'se', image: '/yamatocannon-profile-picture.jpg',
    links: [
      { url: 'https://www.youtube.com/channel/UCRRfSRlDq2ma7xp_8HYvYeA', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/yamatocannon', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/25503675', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://liquipedia.net/leagueoflegends/YamatoCannon', title: 'Liquipedia', img: '/liquipedia_icon_menu.png' },
      { url: 'https://discord.gg/ycsdVJJuFP', title: 'Discord', icon: 'fa-brands fa-discord', iconColor: 'text-indigo-500' },
      { url: 'https://www.instagram.com/yamatocannon1/', title: 'Instagram', icon: 'fa-brands fa-instagram', iconColor: 'text-pink-500' },
    ]
  },
  {
    key: 'iyouxin', name: 'iyouxin', flag: 'ua', image: '/iyouxin-profile-picture.png',
    links: [
      { url: 'https://www.youtube.com/@iyouxin', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/iyouxin', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/25494761', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://discord.gg/hdSufp5ZCA', title: 'Discord', icon: 'fa-brands fa-discord', iconColor: 'text-indigo-500' },
      { url: 'http://instagram.com/iyouxin', title: 'Instagram', icon: 'fa-brands fa-instagram', iconColor: 'text-pink-500' },
    ]
  },
  {
    key: 'lowko', name: 'LowKo', flag: 'nl', image: '/lowko-profile-picture.jpg',
    links: [
      { url: 'https://www.youtube.com/morelowko', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/lowkotv', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/338838', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://liquipedia.net/starcraft2/Lowko', title: 'Liquipedia', img: '/liquipedia_icon_menu.png' },
      { url: 'http://patreon.com/lowkotv', title: 'Patreon', icon: 'fa-brands fa-patreon', iconColor: 'text-orange-500' },
      { url: 'https://discord.gg/lowkotv', title: 'Discord', icon: 'fa-brands fa-discord', iconColor: 'text-indigo-500' },
      { url: 'http://instagram.com/lowkotv', title: 'Instagram', icon: 'fa-brands fa-instagram', iconColor: 'text-pink-500' },
    ]
  },
  {
    key: 'mrllamasc', name: 'MrLlamaSC', flag: 'us', image: '/mrllamasc-profile-picture.jpg',
    links: [
      { url: 'https://www.youtube.com/mrllamasc', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/mrllamasc', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/13675245', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://mrllamasc.com/', title: 'MrLlamaSC.com', img: '/mrllamasc-web-logo.webp' },
      { url: 'http://patreon.com/MrLlamaSC', title: 'Patreon', icon: 'fa-brands fa-patreon', iconColor: 'text-orange-500' },
      { url: 'https://www.tiktok.com/@mrllamasc', title: 'TikTok', icon: 'fa-brands fa-tiktok' },
    ]
  },
  {
    key: 'captainlance9', name: 'CaptainLance9', flag: 'us', image: '/captainlance9-profile-picture.jpg',
    links: [
      { url: 'https://www.youtube.com/@CaptainLance9', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/captainlance9', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/4628569', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://discord.com/invite/GAYk7zw', title: 'Discord', icon: 'fa-brands fa-discord', iconColor: 'text-indigo-500' },
    ]
  },
  {
    key: 'thespiffingbrit', name: 'The Spiffing Brit', flag: 'gb', image: '/thespiffingbrit-profile-picture.jpg',
    links: [
      { url: 'https://www.youtube.com/@thespiffingbrit', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/thespiffingbrit', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/235951', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://patreon.com/user?u=3968726', title: 'Patreon', icon: 'fa-brands fa-patreon', iconColor: 'text-orange-500' },
      { url: 'https://discord.gg/Spiffing', title: 'Discord', icon: 'fa-brands fa-discord', iconColor: 'text-indigo-500' },
    ]
  },
  {
    key: 'pestily', name: 'Pestily', flag: 'au', image: '/pestily-profile-picture.jpg',
    links: [
      { url: 'https://www.youtube.com/pestilytv', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/pestily', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/3861402', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'http://instagram.com/pestily', title: 'Instagram', icon: 'fa-brands fa-instagram', iconColor: 'text-pink-500' },
    ]
  },
  {
    key: 'ohtofu', name: 'OhTofu', flag: 'ca', image: '/ohtofu-profile-picture.jpg',
    links: [
      { url: 'https://www.youtube.com/OhTofu', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/ohtofu', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/759780', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://discord.gg/ohtofu', title: 'Discord', icon: 'fa-brands fa-discord', iconColor: 'text-indigo-500' },
      { url: 'https://www.tiktok.com/@.ohtofu', title: 'TikTok', icon: 'fa-brands fa-tiktok' },
    ]
  },
  {
    key: 'aquafps', name: 'AquaFPS', flag: 'us', image: '/aquafps-profile-picture.jpg',
    links: [
      { url: 'https://www.youtube.com/Aquafps', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/aquafps', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/526343', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://aquafps.com/', title: 'AquaFPS merch', img: '/aquafps-web-logo.png' },
      { url: 'https://discord.gg/invite/aquafps', title: 'Discord', icon: 'fa-brands fa-discord', iconColor: 'text-indigo-500' },
      { url: 'http://instagram.com/aquafps', title: 'Instagram', icon: 'fa-brands fa-instagram', iconColor: 'text-pink-500' },
    ]
  },
  {
    key: 'atrioc', name: 'Atrioc', flag: 'us', image: '/atrioc-profile-picture.jpg',
    links: [
      { url: 'https://www.youtube.com/atrioc', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/atrioc', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/518351', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://en.wikipedia.org/wiki/Atrioc', title: 'Wikipedia', icon: 'fa-brands fa-wikipedia-w' },
      { url: 'http://instagram.com/atrioc', title: 'Instagram', icon: 'fa-brands fa-instagram', iconColor: 'text-pink-500' },
    ]
  },
  {
    key: 'wagamamatv', name: 'Wagamama', flag: 'se', image: '/wagamamatv-profile-picture.jpg',
    links: [
      { url: 'https://www.youtube.com/@wagamamatv', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/wagamamatv', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
      { url: 'https://www.aoe2insights.com/user/441819', title: 'AoE2 Insights', img: '/aoeinsights-logo.webp' },
      { url: 'https://wagamamatv-shop.fourthwall.com/', title: 'Wagamama merch', img: '/wagamamatv-web-logo.webp' },
    ]
  },
  {
    key: 'jabo', name: 'Jabo', flag: 'gb', image: '/jabo-profile-picture.jpg',
    links: [
      { url: 'https://www.youtube.com/@ItsJabo', title: 'YouTube', icon: 'fa-brands fa-youtube', iconColor: 'text-red-500' },
      { url: 'https://www.twitch.tv/jabo', title: 'Twitch', icon: 'fa-brands fa-twitch', iconColor: 'text-purple-500' },
    ]
  },
]
