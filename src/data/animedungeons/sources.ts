import type { DataSource, VideoSource } from './types';

export const checkedAt = '2026-08-22';

export const officialGameFacts = {
  name: 'Anime Dungeons',
  siteName: 'Anime Dungeons Wiki',
  canonicalUrl: 'https://www.animedungeons.wiki',
  robloxUrl: 'https://www.roblox.com/games/70863683083739/Anime-Dungeons',
  creatorName: '1B Studio',
  creatorGroupId: 794813948,
  creatorGroupUrl: 'https://www.roblox.com/communities/794813948/1B-Studio',
  discordUrl: 'https://discord.gg/anidg',
  placeId: 70863683083739,
  universeId: 8718668434,
  oldPlaceId: 8862620807,
  oldUniverseId: 3353228800,
  createdAt: '2025-09-15',
  currentTitle: '[UPD 2 🌊] Anime Dungeons',
  updatedAt: '2026-08-22T01:13:55.4374034Z',
  checkedAt,
  genre: ['RPG', 'Action RPG', 'Dungeon Crawler', 'Anime'],
  description:
    'Choose a class, clear anime-inspired dungeons, defeat bosses, and improve weapons, armor, spells, and heroes.',
  iconImage: '/animedungeons/icon.png',
  heroImage: '/animedungeons/media/experience.jpg',
  actionImage: '/animedungeons/media/experience.jpg',
  featuredVideoId: 'MN97_9QhIfQ',
} as const;

export const videos: Record<
  | 'releaseTrailer'
  | 'currentGameplay'
  | 'levelFiveProgression'
  | 'trialsGuide'
  | 'raidRoute',
  VideoSource
> = {
  releaseTrailer: {
    id: 'MN97_9QhIfQ',
    title: 'Anime Dungeons | RELEASE TRAILER',
    channel: 'beastii',
    url: 'https://www.youtube.com/watch?v=MN97_9QhIfQ',
    thumbnailUrl: 'https://i.ytimg.com/vi/MN97_9QhIfQ/maxresdefault.jpg',
    publishedAt: '2026-07-10',
    viewCountLabel: '25K+ views at check',
    checkedAt,
  },
  currentGameplay: {
    id: 'BM2w11Wx2Kk',
    title: 'NEW ANIME DUNGEONS GAME IS INSANE! (NEW DUNGEON QUEST! + EA)',
    channel: 'Blam Spot',
    url: 'https://www.youtube.com/watch?v=BM2w11Wx2Kk',
    thumbnailUrl: 'https://i.ytimg.com/vi/BM2w11Wx2Kk/hqdefault.jpg',
    publishedAt: '2026-07-21',
    viewCountLabel: '5K+ views at check',
    checkedAt,
  },
  levelFiveProgression: {
    id: '3kcQINrkMXk',
    title: 'Anime Dungeons Complete Beginner Guide (Noob to Godly)',
    channel: 'Hatter',
    url: 'https://www.youtube.com/watch?v=3kcQINrkMXk',
    thumbnailUrl: 'https://i.ytimg.com/vi/3kcQINrkMXk/hqdefault.jpg',
    publishedAt: '2026-07-25',
    viewCountLabel: '1.3K+ views at check',
    checkedAt,
  },
  trialsGuide: {
    id: 'rm1VhVKM6Jo',
    title: 'How to Beat EVERY Trial in Anime Dungeons (Complete Guide)',
    channel: 'Hatter',
    url: 'https://www.youtube.com/watch?v=rm1VhVKM6Jo',
    thumbnailUrl: 'https://i.ytimg.com/vi/rm1VhVKM6Jo/hqdefault.jpg',
    publishedAt: '2026-08-06',
    viewCountLabel: '2.6K+ views at check',
    checkedAt,
  },
  raidRoute: {
    id: 'OYzg_xIMHaw',
    title: 'The Fastest Way To Do Raids In Anime Dungeons (INSANE METHOD)',
    channel: 'Frost God',
    url: 'https://www.youtube.com/watch?v=OYzg_xIMHaw',
    thumbnailUrl: 'https://i.ytimg.com/vi/OYzg_xIMHaw/hqdefault.jpg',
    publishedAt: '2026-08-21',
    viewCountLabel: '245 views at check',
    checkedAt,
  },
};

export const officialExperienceSource: DataSource = {
  type: 'official',
  label: 'Current Roblox experience',
  url: officialGameFacts.robloxUrl,
  checkedAt,
  confidence: 'high',
  note: 'Current Update 2 title, August 22 update timestamp, beta notice, gameplay loop, creator identity, and canonical Place.',
};

export const robloxApiSource: DataSource = {
  type: 'official',
  label: 'Roblox Games API',
  url: `https://games.roblox.com/v1/games?universeIds=${officialGameFacts.universeId}`,
  checkedAt,
  confidence: 'high',
  note: 'Universe, root Place, creator, dates, server size, genre, and canonical URL path.',
};

export const creatorGroupSource: DataSource = {
  type: 'official',
  label: '1B Studio Roblox Group',
  url: officialGameFacts.creatorGroupUrl,
  checkedAt,
  confidence: 'high',
  note: 'Current Group identity and ownership boundary.',
};

export const releaseTrailerSource: DataSource = {
  type: 'youtube',
  label: 'Anime Dungeons release trailer',
  url: videos.releaseTrailer.url,
  checkedAt,
  confidence: 'high',
  note: 'Official launch media for dungeons, class selection, item reforging, index categories, and Discord vanity.',
};

export const bloxInformerSource: DataSource = {
  type: 'guide_site',
  label: 'BloxInformer Anime Dungeons Wiki',
  url: 'https://bloxinformer.com/wikis/anime-dungeons/',
  checkedAt,
  confidence: 'medium',
  note: 'Launch class names, controls, and dungeon names; volatile details require current-game cross-checking.',
};

export const allThingsCodesSource: DataSource = {
  type: 'guide_site',
  label: 'AllThings.How code tracker',
  url: 'https://allthings.how/anime-dungeons-codes/',
  checkedAt,
  confidence: 'medium',
  note: 'August 2026 cross-check for 30KMEMBERS, 15KLIKES, UPDATE1.5, and reported reward bundles.',
};

export const mrGuiderCodesSource: DataSource = {
  type: 'guide_site',
  label: 'MrGuider Anime Dungeons code tracker',
  url: 'https://www.mrguider.org/roblox/anime-dungeons-codes/',
  checkedAt,
  confidence: 'medium',
  note: 'August 2026 code list used to cross-check 30KMEMBERS, 15KLIKES, UPDATE1.5, and earlier reward strings.',
};

export const currentCommunityCodesSource: DataSource = {
  type: 'community',
  label: 'Current Anime Dungeons code report',
  url: 'https://www.reddit.com/r/RobloxCodesUnite/comments/1v4h0hi/anime_dungeons_codes_for_roblox/',
  checkedAt,
  confidence: 'needs_verification',
  note: 'Reports five Update 1 and milestone strings. Rewards and live redemption remain unverified, so these stay test candidates.',
};

export const currentGameplaySource: DataSource = {
  type: 'youtube',
  label: 'Current release gameplay',
  url: videos.currentGameplay.url,
  checkedAt,
  confidence: 'medium',
  note: 'Current interface and early dungeon progression cross-check.',
};

export const trialsGuideSource: DataSource = {
  type: 'youtube',
  label: 'Current Anime Dungeons trials guide',
  url: videos.trialsGuide.url,
  checkedAt,
  confidence: 'medium',
  note: 'Current-video route reference for trial preparation and encounter-specific execution; live beta requirements remain final.',
};

export const raidRouteSource: DataSource = {
  type: 'youtube',
  label: 'Update 2 raid route video',
  url: videos.raidRoute.url,
  checkedAt,
  confidence: 'medium',
  note: 'August 21 route test for Warrior, Shadow Monarch, a damage-over-time ability, Q timing, and a creator-reported sub-minute benchmark.',
};

export const sourceCatalog = [
  officialExperienceSource,
  robloxApiSource,
  creatorGroupSource,
  releaseTrailerSource,
  currentGameplaySource,
  trialsGuideSource,
  raidRouteSource,
  bloxInformerSource,
  allThingsCodesSource,
  mrGuiderCodesSource,
  currentCommunityCodesSource,
] satisfies DataSource[];
