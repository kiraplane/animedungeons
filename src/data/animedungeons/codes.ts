import {
  allThingsCodesSource,
  currentCommunityCodesSource,
  mrGuiderCodesSource,
} from './sources';
import type { GameCode } from './types';

export const activeCodes: GameCode[] = [];

export const reportedCodes: GameCode[] = [
  {
    code: '30KMEMBERS',
    reward: '1,500 Gems and 15 Trait Rerolls.',
    status: 'reported',
    lastChecked: '2026-08-20',
    sources: [allThingsCodesSource, mrGuiderCodesSource],
    notes:
      'Two independent August trackers agree on the exact string. It is source-checked rather than game-tested.',
  },
  {
    code: '15KLIKES',
    reward: '500 Gems, 10 Trait Rerolls, and 10 Stat Rerolls.',
    status: 'reported',
    lastChecked: '2026-08-20',
    sources: [allThingsCodesSource, mrGuiderCodesSource],
    notes:
      'Two independent August trackers agree on the exact string and reward bundle. Trust the live popup if the balance differs.',
  },
  {
    code: 'UPDATE1.5',
    reward: 'Free update rewards; exact contents require the live popup.',
    status: 'reported',
    lastChecked: '2026-08-20',
    sources: [currentCommunityCodesSource],
    notes:
      'The string matches the current official Update 1.5 title and is reported by the current community code tracker. It is not printed in the Roblox description, so the in-game result remains final.',
  },
  {
    code: 'UPDATE1',
    reward: 'Reward not independently confirmed.',
    status: 'previous',
    lastChecked: '2026-08-20',
    sources: [currentCommunityCodesSource],
    notes:
      'A current community tracker reports this Update 1 string. Test it in the current 1B Studio Place and trust the live popup.',
  },
  {
    code: '800KVISITS',
    reward: 'Reward not independently confirmed.',
    status: 'reported',
    lastChecked: '2026-08-20',
    sources: [currentCommunityCodesSource],
    notes:
      'A current community tracker reports this milestone string. It is not published in the Roblox description.',
  },
  {
    code: '500KVISITS',
    reward: 'Reward not independently confirmed.',
    status: 'reported',
    lastChecked: '2026-08-20',
    sources: [currentCommunityCodesSource],
    notes:
      'A current community tracker reports this milestone string. It is not published in the Roblox description.',
  },
  {
    code: '5KLIKES',
    reward: 'Reward not independently confirmed.',
    status: 'reported',
    lastChecked: '2026-08-20',
    sources: [currentCommunityCodesSource],
    notes:
      'A current community tracker reports this like-milestone string. Test it before planning rerolls or gems.',
  },
  {
    code: 'DELAY',
    reward: 'Reward not independently confirmed.',
    status: 'reported',
    lastChecked: '2026-08-20',
    sources: [currentCommunityCodesSource],
    notes:
      'A current community tracker reports this compensation-style string. It remains a test candidate, not an official active code.',
  },
  {
    code: 'ALLAGES',
    reward: 'Reported as 2,000 Gems, 25 Trait Rerolls, and 25 Stat Rerolls.',
    status: 'reported',
    lastChecked: '2026-08-20',
    sources: [mrGuiderCodesSource],
    notes:
      'A current July tracker lists this code. Redeem on the current 1B Studio Place before planning rerolls.',
  },
  {
    code: 'THANKYOU',
    reward: 'Reported as 1,000 Gems and 20 Trait Rerolls.',
    status: 'reported',
    lastChecked: '2026-08-20',
    sources: [mrGuiderCodesSource],
    notes:
      'A current July tracker lists this code. The in-game popup is the final reward check.',
  },
  {
    code: 'EARLYACCESS',
    reward: 'Reported as 15 rerolls and 1,500 gems.',
    status: 'reported',
    lastChecked: '2026-08-20',
    sources: [allThingsCodesSource, mrGuiderCodesSource],
    notes:
      'Two guide trackers now report this code. Use only the current 1B Studio experience because one older source still points to the unavailable old Place.',
  },
  {
    code: 'RELEASE',
    reward: 'Reported as 1,000 Gems and 10 Trait Rerolls.',
    status: 'reported',
    lastChecked: '2026-08-20',
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
    lastChecked: '2026-08-20',
    sources: [mrGuiderCodesSource, currentCommunityCodesSource],
    notes:
      'A newer community list moves this milestone code to expired. It remains in history instead of the current test list.',
  },
];

export const codeStatusSummary = {
  checkedAt: '2026-08-20',
  officialActiveCount: activeCodes.length,
  reportedCount: reportedCodes.length,
  message:
    '30KMEMBERS, 15KLIKES, and UPDATE1.5 are the newest source-checked test candidates. Entries remain reported because the Roblox description does not publish a complete code list.',
};
