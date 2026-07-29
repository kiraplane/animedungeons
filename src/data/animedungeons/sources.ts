import type { DataSource, VideoSource } from './types';

export const checkedAt = '2026-07-29';

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
  updatedAt: '2026-07-23',
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
  'releaseTrailer' | 'currentGameplay' | 'levelFiveProgression',
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
  };

export const officialExperienceSource: DataSource = {
  type: 'official',
  label: 'Current Roblox experience',
  url: officialGameFacts.robloxUrl,
  checkedAt,
  confidence: 'high',
  note: 'Current title, beta notice, gameplay loop, creator identity, and canonical Place.',
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
  confidence: 'needs_verification',
  note: 'Reports EARLYACCESS, but its Play link points to the unavailable old Place.',
};

export const mrGuiderCodesSource: DataSource = {
  type: 'guide_site',
  label: 'MrGuider Anime Dungeons code tracker',
  url: 'https://www.mrguider.org/codes/anime-dungeons-codes/',
  checkedAt,
  confidence: 'medium',
  note: 'Current July code list and reward wording for RELEASE, EARLYACCESS, THANKYOU, ALLAGES, and 300KVISITS.',
};

export const currentGameplaySource: DataSource = {
  type: 'youtube',
  label: 'Current release gameplay',
  url: videos.currentGameplay.url,
  checkedAt,
  confidence: 'medium',
  note: 'Current interface and early dungeon progression cross-check.',
};

export const sourceCatalog = [
  officialExperienceSource,
  robloxApiSource,
  creatorGroupSource,
  releaseTrailerSource,
  currentGameplaySource,
  bloxInformerSource,
  allThingsCodesSource,
  mrGuiderCodesSource,
] satisfies DataSource[];
