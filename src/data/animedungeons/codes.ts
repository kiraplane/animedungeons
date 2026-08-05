import {
  allThingsCodesSource,
  currentCommunityCodesSource,
  mrGuiderCodesSource,
} from './sources';
import type { GameCode } from './types';

export const activeCodes: GameCode[] = [];

export const reportedCodes: GameCode[] = [
  {
    code: 'UPDATE1',
    reward: 'Reward not independently confirmed.',
    status: 'reported',
    lastChecked: '2026-08-04',
    sources: [currentCommunityCodesSource],
    notes:
      'A current community tracker reports this Update 1 string. Test it in the current 1B Studio Place and trust the live popup.',
  },
  {
    code: '800KVISITS',
    reward: 'Reward not independently confirmed.',
    status: 'reported',
    lastChecked: '2026-08-04',
    sources: [currentCommunityCodesSource],
    notes:
      'A current community tracker reports this milestone string. It is not published in the Roblox description.',
  },
  {
    code: '500KVISITS',
    reward: 'Reward not independently confirmed.',
    status: 'reported',
    lastChecked: '2026-08-04',
    sources: [currentCommunityCodesSource],
    notes:
      'A current community tracker reports this milestone string. It is not published in the Roblox description.',
  },
  {
    code: '5KLIKES',
    reward: 'Reward not independently confirmed.',
    status: 'reported',
    lastChecked: '2026-08-04',
    sources: [currentCommunityCodesSource],
    notes:
      'A current community tracker reports this like-milestone string. Test it before planning rerolls or gems.',
  },
  {
    code: 'DELAY',
    reward: 'Reward not independently confirmed.',
    status: 'reported',
    lastChecked: '2026-08-04',
    sources: [currentCommunityCodesSource],
    notes:
      'A current community tracker reports this compensation-style string. It remains a test candidate, not an official active code.',
  },
  {
    code: 'ALLAGES',
    reward: 'Reported as 2,000 Gems, 25 Trait Rerolls, and 25 Stat Rerolls.',
    status: 'reported',
    lastChecked: '2026-08-04',
    sources: [mrGuiderCodesSource],
    notes:
      'A current July tracker lists this code. Redeem on the current 1B Studio Place before planning rerolls.',
  },
  {
    code: 'THANKYOU',
    reward: 'Reported as 1,000 Gems and 20 Trait Rerolls.',
    status: 'reported',
    lastChecked: '2026-08-04',
    sources: [mrGuiderCodesSource],
    notes:
      'A current July tracker lists this code. The in-game popup is the final reward check.',
  },
  {
    code: 'EARLYACCESS',
    reward: 'Reported as 15 rerolls and 1,500 gems.',
    status: 'reported',
    lastChecked: '2026-08-04',
    sources: [allThingsCodesSource, mrGuiderCodesSource],
    notes:
      'Two guide trackers now report this code. Use only the current 1B Studio experience because one older source still points to the unavailable old Place.',
  },
  {
    code: 'RELEASE',
    reward: 'Reported as 1,000 Gems and 10 Trait Rerolls.',
    status: 'reported',
    lastChecked: '2026-08-04',
    sources: [mrGuiderCodesSource],
    notes:
      'A current tracker now supplies reward wording, while recent beginner videos independently show the launch-code redeem flow. The live popup remains final.',
  },
];

export const previousCodes: GameCode[] = [
  {
    code: '300KVISITS',
    reward: 'Previously reported as 500 Gems, 10 Trait Rerolls, and 10 Stat Rerolls.',
    status: 'previous',
    lastChecked: '2026-08-04',
    sources: [mrGuiderCodesSource, currentCommunityCodesSource],
    notes:
      'A newer community list moves this milestone code to expired. It remains in history instead of the current test list.',
  },
];

export const codeStatusSummary = {
  checkedAt: '2026-08-04',
  officialActiveCount: activeCodes.length,
  reportedCount: reportedCodes.length,
  message:
    'Nine current code strings are reported by guide and community trackers. They remain test candidates rather than official entries because the Roblox description does not publish a code list.',
};
