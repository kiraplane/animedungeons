import { allThingsCodesSource, mrGuiderCodesSource } from './sources';
import type { GameCode } from './types';

export const activeCodes: GameCode[] = [];

export const reportedCodes: GameCode[] = [
  {
    code: '300KVISITS',
    reward: 'Reported as 500 Gems, 10 Trait Rerolls, and 10 Stat Rerolls.',
    status: 'reported',
    lastChecked: '2026-07-29',
    sources: [mrGuiderCodesSource],
    notes:
      'A current July tracker lists this milestone code. Copy the code exactly and use the live reward popup as final.',
  },
  {
    code: 'ALLAGES',
    reward: 'Reported as 2,000 Gems, 25 Trait Rerolls, and 25 Stat Rerolls.',
    status: 'reported',
    lastChecked: '2026-07-29',
    sources: [mrGuiderCodesSource],
    notes:
      'A current July tracker lists this code. Redeem on the current 1B Studio Place before planning rerolls.',
  },
  {
    code: 'THANKYOU',
    reward: 'Reported as 1,000 Gems and 20 Trait Rerolls.',
    status: 'reported',
    lastChecked: '2026-07-29',
    sources: [mrGuiderCodesSource],
    notes:
      'A current July tracker lists this code. The in-game popup is the final reward check.',
  },
  {
    code: 'EARLYACCESS',
    reward: 'Reported as 15 rerolls and 1,500 gems.',
    status: 'reported',
    lastChecked: '2026-07-29',
    sources: [allThingsCodesSource, mrGuiderCodesSource],
    notes:
      'Two guide trackers now report this code. Use only the current 1B Studio experience because one older source still points to the unavailable old Place.',
  },
  {
    code: 'RELEASE',
    reward: 'Reported as 1,000 Gems and 10 Trait Rerolls.',
    status: 'reported',
    lastChecked: '2026-07-29',
    sources: [mrGuiderCodesSource],
    notes:
      'A current tracker now supplies reward wording, while recent beginner videos independently show the launch-code redeem flow. The live popup remains final.',
  },
];

export const codeStatusSummary = {
  checkedAt: '2026-07-29',
  officialActiveCount: activeCodes.length,
  reportedCount: reportedCodes.length,
  message:
    'Five current codes are reported by July guide trackers. They remain source-reported rather than official because the Roblox description does not publish a code list.',
};
