import { allThingsCodesSource } from './sources';
import type { GameCode } from './types';

export const activeCodes: GameCode[] = [];

export const reportedCodes: GameCode[] = [
  {
    code: 'EARLYACCESS',
    reward: 'Reported as 15 rerolls and 1,500 gems.',
    status: 'needs_check',
    lastChecked: '2026-07-24',
    sources: [allThingsCodesSource],
    notes:
      'A fresh guide tracker reports this code, but the current Roblox description does not name it and the tracker links to the unavailable old Place. Verify in the current 1B Studio experience before relying on the reward.',
  },
  {
    code: 'RELEASE',
    reward: 'Reward is not reliably verified.',
    status: 'needs_check',
    lastChecked: '2026-07-24',
    sources: [],
    notes:
      'Low-confidence videos and community posts report this launch code. No current official source used for this build confirms the code or reward.',
  },
];

export const codeStatusSummary = {
  checkedAt: '2026-07-24',
  officialActiveCount: activeCodes.length,
  reportedCount: reportedCodes.length,
  message:
    'No active code was confirmed by a current official 1B Studio surface during this check. Two fresh community reports are listed separately for in-game verification.',
};
