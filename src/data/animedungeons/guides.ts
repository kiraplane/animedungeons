import { videos } from './sources';
import type { Guide } from './types';

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Anime Dungeons Beginner Guide',
    seoTitle: 'Anime Dungeons Beginner Guide - First Class, Loot & Clear',
    seoDescription:
      'Start Anime Dungeons with the right class, first-dungeon plan, loot checks, hero priorities, and a clear rule for when to upgrade.',
    summary:
      'Use the first session to learn one class, complete a repeatable dungeon, and improve one proven bottleneck at a time instead of spending every resource on launch-week hype.',
    category: 'Start Here',
    sourceStrategy: 'popular_youtube',
    videoSearchQueries: [
      'Anime Dungeons Roblox beginner guide',
      'Anime Dungeons Roblox how to play',
      'Anime Dungeons release gameplay',
    ],
    sourceNotes:
      'Current Roblox identity and systems come from official APIs and launch media. The selected current-release gameplay supplies interface and early-run context.',
    coverImageUrl: videos.currentGameplay.thumbnailUrl,
    video: videos.currentGameplay,
    tags: ['Beginner', 'Classes', 'First Clear'],
    difficulty: 'Beginner',
    body: [
      {
        heading: 'Begin with the current 1B Studio experience',
        paragraphs: [
          'Open Place ID 70863683083739 and confirm that the creator is the 1B Studio Group. This identity check is the first real beginner task because several recent guides still link to Place ID 8862620807, which Roblox now marks unavailable. Starting from the wrong page can also pull old creator names and old code claims into a new account plan.',
          'Once the current game loads, look at the live interface before following a checklist. Anime Dungeons is released but still labeled beta, so class requirements, dungeon gates, item values, and menu positions can change. Use this guide for the order of decisions and let the current client supply the exact number or button.',
        ],
        bullets: [
          'Current Place ID: 70863683083739.',
          'Current Universe ID: 8718668434.',
          'Creator: 1B Studio.',
          'Avoid executors, auto-farm downloads, and modified clients.',
        ],
      },
      {
        heading: 'Choose a starter you can learn for several runs',
        paragraphs: [
          'Launch references identify Warrior, Mage, and Assassin as starter paths. The class screen presents them around heavy damage, mana-focused casting, and speed. Do not treat those labels as a complete tier list. Choose the role whose mistakes you can recognize: close-range exposure for Warrior, spacing and cast timing for Mage, or movement precision for Assassin.',
          'Stay with the selection long enough to learn its attack rhythm and survival limit. The class screen indicates that class progress comes from defeating enemies while using that class and that class effects do not stack. Switching every run delays that learning and makes it difficult to tell whether a loss came from the class, equipment, or an unfamiliar route.',
        ],
      },
      {
        heading: 'Make the first dungeon a controlled test',
        paragraphs: [
          'Enter the easiest currently available dungeon and aim for a clean completion rather than the fastest possible time. Learn where enemies appear, which attack forces a dodge, and what happens before the boss uses its most dangerous pattern. Keep one recovery option or movement tool available instead of spending every cooldown on the first group.',
          'If the dungeon fails, name the reason before changing the build. Too little boss damage points toward weapon, spell, or class execution. Dying in normal rooms points toward armor, positioning, or target priority. Missing attacks points toward range and timing. One named failure creates a useful next action; a general feeling of weakness usually leads to random spending.',
        ],
      },
      {
        heading: 'Equip loot with one question in mind',
        paragraphs: [
          'After the run, compare weapons and armor against the problem just observed. A rarer weapon is useful only if its relevant stat and attack pattern support the class. Armor is valuable when it turns a lethal mistake into enough time to learn. Keep the previous working item until the replacement improves the same dungeon more than once.',
          'Spells and heroes are part of the same decision. Give each spell slot a job such as room clear, safe boss damage, or emergency space. Treat a hero passive as support for a bottleneck, not as a substitute for current-level equipment. Reforging should wait until the base item has proved worth keeping and the account still has a resource reserve.',
        ],
      },
      {
        heading: 'Use a repeatable loop before chasing the next unlock',
        paragraphs: [
          'The first useful loop is simple: clear, compare, change one piece, and clear again. Run the same dungeon until normal rooms and the boss are both predictable. A lucky clear supported by one rare drop is not the same as progression; a repeatable clear proves that the current class and loadout can support the next decision.',
          'Move to a harder dungeon when the current one no longer needs perfect luck or a carry. If progression stops, revisit the class role, equipment, spell coverage, and whether solo or party play fits the problem. Do not reroll or reforge simply because another player has a brighter effect. Spend when the change has a measurable job.',
        ],
      },
      {
        heading: 'A practical first-session finish line',
        paragraphs: [
          'A strong first session ends with one class understood, one dungeon cleared consistently, one safe equipment set, and a short note about the next wall. It does not require the rarest class, a full Index, or every reported code. Those collection goals become easier once the account has a stable farming route.',
          'From here, choose the next guide based on the actual question. Use the class guide when the role feels wrong, the first-dungeon route when the boss remains confusing, the loot checklist when inventory decisions are slowing progress, and the solo-versus-party guide when another player may change the clear.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I do first in Anime Dungeons?',
        answer:
          'Verify the current 1B Studio Place, choose one starter class, learn the easiest available dungeon, and change only the gear or spell tied to a named failure.',
      },
      {
        question: 'Should I reroll my starter class immediately?',
        answer:
          'No. Run enough dungeons to understand whether the problem is the role or simply unfamiliar combat and weak launch gear.',
      },
      {
        question: 'When should I move to the next dungeon?',
        answer:
          'Move when both normal rooms and the boss are repeatable without depending on one lucky drop or a carry.',
      },
    ],
    relatedRoutes: [
      '/guides/choose-first-class',
      '/guides/first-dungeon-route',
      '/guides/loot-upgrade-checklist',
      '/codes',
    ],
  },
  {
    slug: 'choose-first-class',
    title: 'How to Choose Your First Anime Dungeons Class',
    seoTitle: 'Anime Dungeons Best Starting Class - Warrior, Mage or Assassin',
    seoDescription:
      'Choose Warrior, Mage, or Assassin by role, risk, equipment fit, and first-dungeon consistency—without relying on a fake launch tier list.',
    summary:
      'Warrior, Mage, and Assassin solve different opening problems. Choose the role that makes failures readable, then earn class experience before judging the result.',
    category: 'Classes',
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Anime Dungeons classes',
      'Anime Dungeons best starting class',
      'Anime Dungeons class tier list',
    ],
    sourceNotes:
      'The official release trailer shows the class-selection screen, its non-stacking rule, role labels, and defeat-based progression. Launch class names are cross-checked against the current BloxInformer overview.',
    coverImageUrl: videos.releaseTrailer.thumbnailUrl,
    video: videos.releaseTrailer,
    tags: ['Warrior', 'Mage', 'Assassin'],
    difficulty: 'Beginner',
    body: [
      {
        heading: 'There is no honest universal winner yet',
        paragraphs: [
          'Anime Dungeons launched with three reported starter classes—Warrior, Mage, and Assassin—and three later unlocks: Knight, Archmage, and Void Reaper. Search demand already asks for a tier list, but current public evidence does not compare all six with the same gear, dungeon, player skill, and beta version.',
          'The useful question is not “Which border belongs in S tier?” It is “Which starter gives me a clear failure I can improve?” The release class screen emphasizes heavy damage, mana-focused casting, and fast movement. Those identities are enough to choose a learning path without pretending to know the final meta.',
        ],
      },
      {
        heading: 'Pick Warrior when you want direct feedback',
        paragraphs: [
          'Warrior is the simplest starting lens for players who prefer to stay close and see a direct connection between attacks, damage, and enemy pressure. It makes positioning mistakes obvious: if the class stays in danger too long, the health bar explains the failure immediately. That clarity can be more valuable than a launch-week damage claim.',
          'Choose Warrior if you are comfortable learning enemy telegraphs at close range and want equipment decisions centered on reliable damage and enough armor to survive the learning process. Do not choose it expecting immunity. A heavy-damage identity still needs dodges, safe attack windows, and a spell or movement option for enemies that punish constant contact.',
        ],
      },
      {
        heading: 'Pick Mage when you enjoy spacing and timing',
        paragraphs: [
          'Mage fits a player who wants to manage distance, mana, and cast windows. The class screen’s mana-focused label suggests that casting strength is central to the role, which also means downtime and interruption matter. A powerful spell that is released into an invulnerable boss phase is still a lost opportunity.',
          'Choose Mage if you like planning room coverage and holding burst for a safe opening. Build at least one reliable option for enemies that move out of the main effect. If the first dungeon fails while spells are constantly unavailable, test cooldown coverage and timing before deciding the entire class is weak.',
        ],
      },
      {
        heading: 'Pick Assassin when movement is already a strength',
        paragraphs: [
          'Assassin is framed around speed. That can shorten engagement time and make repositioning feel responsive, but speed also creates more chances to enter danger before reading the room. A fast class rewards deliberate movement; it does not turn every aggressive input into a safe one.',
          'Choose Assassin if you enjoy short attack windows, quick target changes, and precise exits. Use the first few runs to learn where extra movement causes missed attacks or pulls multiple enemies. If the class dies often, slow the decision pace before replacing the build with more damage.',
        ],
      },
      {
        heading: 'Commit long enough to earn useful evidence',
        paragraphs: [
          'The launch class interface warns that classes do not stack and tells players to earn defeats while using the active class. That makes repeated switching expensive in knowledge even when the menu allows it. Give the selected class several clears so its range, recovery, and weak situations become visible.',
          'Track three outcomes: normal-room stability, boss contribution, and how much equipment support the class requires. If two of those improve with practice, keep progressing. If the same role-specific problem remains after appropriate gear and clean execution, a class change has a reason instead of being a reaction.',
        ],
      },
      {
        heading: 'Treat unlock classes as later build projects',
        paragraphs: [
          'Knight, Archmage, and Void Reaper should not be described as automatic upgrades without current comparative tests. Each unlock may ask for class defeats or other criteria, and beta can change those requirements. Read the live menu before planning a grind from a screenshot.',
          'Keep one working starter loadout while unlocking a later class. A new class without matching weapons, armor, spells, or practice can temporarily perform worse. Switch when the new role solves a known wall and the account can support the transition.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best starting class in Anime Dungeons?',
        answer:
          'There is no trustworthy universal ranking yet. Warrior offers direct close-range feedback, Mage emphasizes spacing and casting, and Assassin rewards precise movement.',
      },
      {
        question: 'What classes can you choose at the start?',
        answer:
          'Current launch references list Warrior, Mage, and Assassin as the three starters.',
      },
      {
        question: 'Do Anime Dungeons classes stack?',
        answer:
          'The launch class-selection interface says classes do not stack; progression is tied to defeats earned while using a class.',
      },
    ],
    relatedRoutes: [
      '/classes',
      '/guides/beginner-guide',
      '/weapons-and-armor',
      '/spells',
    ],
  },
  {
    slug: 'first-dungeon-route',
    title: 'Anime Dungeons First Dungeon Route',
    seoTitle: 'Anime Dungeons First Dungeon Guide - Rooms, Boss & Loot',
    seoDescription:
      'Clear your first Anime Dungeons run by reading rooms, saving cooldowns, testing the boss, and upgrading the exact bottleneck.',
    summary:
      'Your first clear is a route-learning exercise: enter the easiest current gate, keep one answer for the boss, and use the result to choose the next upgrade.',
    category: 'Dungeons',
    sourceStrategy: 'popular_youtube',
    videoSearchQueries: [
      'Anime Dungeons first dungeon',
      'Anime Dungeons beginner dungeon guide',
      'Anime Dungeons Demon Train guide',
    ],
    sourceNotes:
      'The official trailer supplies the four launch environments. Current gameplay is used to cross-check the early interface without hard-coding unstable level gates.',
    coverImageUrl: videos.currentGameplay.thumbnailUrl,
    video: videos.currentGameplay,
    tags: ['Dungeons', 'Boss', 'Loot'],
    difficulty: 'Beginner',
    body: [
      {
        heading: 'Use the easiest gate visible in the live client',
        paragraphs: [
          'The release trailer names Demon Train, Frozen Forest, Sand Village, and The Crimson Sanctum, but it does not publish a permanent level table. Follow the current portal or dungeon menu and select the lowest accessible difficulty that still produces useful progress. Beta gates can move faster than a static guide.',
          'The first goal is a repeatable clear, not proving that the account can enter a harder room. Repeated failure teaches less when every enemy removes most of the health bar. A manageable dungeon gives enough time to learn attack cues, spell range, loot comparison, and how the boss differs from normal enemies.',
        ],
      },
      {
        heading: 'Read the room before spending every cooldown',
        paragraphs: [
          'At the start of each encounter, identify the largest threat and the space available for movement. Pulling every enemy while learning a new class makes damage and positioning problems look identical. Focus targets, keep the camera where telegraphs are visible, and avoid backing into the next group.',
          'Use one dependable attack for normal enemies and keep a movement or control option ready. If every spell is on cooldown when the room changes, the loadout has no emergency answer. The fastest first clear is often the one with fewer resets, not the one with the biggest opening effect.',
        ],
      },
      {
        heading: 'Treat the boss as a separate lesson',
        paragraphs: [
          'Spend the first boss attempt identifying patterns. Find which action forces movement, where a safe damage window begins, and whether the arena punishes staying near a wall. Do not interpret low damage during observation as proof that the class cannot clear.',
          'On the next attempt, save major burst for the safest window and stop attacking early enough to dodge the next pattern. Consistent partial damage is better than one long combo that ends the run. If a specific hit remains lethal, armor or positioning is the next test; if survival is stable and time runs out, test damage.',
        ],
      },
      {
        heading: 'Turn the reward screen into an upgrade decision',
        paragraphs: [
          'After the clear, compare each weapon or armor drop against the exact problem from the run. Do not equip every higher rarity automatically. A weapon must support the active class and land reliably; armor must create enough survival to change a room; a spell must have a job that the current kit lacks.',
          'Keep the previous set until the new one succeeds in the same dungeon. Reforge only when the base item is useful enough to survive more than one upgrade cycle. This prevents the first exciting drop from consuming the account’s entire resource reserve.',
        ],
      },
      {
        heading: 'Repeat until the clear survives ordinary mistakes',
        paragraphs: [
          'A dungeon is farmable when the route works without perfect luck, flawless play, or a much stronger carry. Run it again after one change. If the same room becomes easier, the change is connected to progress. If a different problem appears, record that before changing another system.',
          'Move up when normal rooms no longer drain all resources and the boss pattern is understood. Staying one step lower for a few clean runs is not wasted time; it builds a gear and practice buffer for the next gate.',
        ],
      },
      {
        heading: 'Know when a party will help',
        paragraphs: [
          'A party helps when the group can share pressure, cover different ranges, and recover from one mistake. It does not automatically repair weak gear or an unknown boss pattern. If joining a group hides every mechanic, repeat the dungeon solo or with a smaller party later so the lesson is not lost.',
          'Use the party route when the dungeon is understood but the account needs more stable damage or survival. Use solo practice when the main question is timing. The next guide separates those decisions so another player becomes a tool for progression rather than a permanent requirement.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the first dungeon in Anime Dungeons?',
        answer:
          'Use the lowest currently accessible dungeon shown by the live game. Launch media names Demon Train, Frozen Forest, Sand Village, and The Crimson Sanctum but does not guarantee a permanent order.',
      },
      {
        question: 'What should I upgrade after the first clear?',
        answer:
          'Upgrade the system tied to the failure you observed: damage, armor, spell coverage, or class execution.',
      },
      {
        question: 'Should I play the first dungeon solo?',
        answer:
          'Solo is useful for learning patterns. A party is useful when the mechanics are understood and shared pressure makes the clear more consistent.',
      },
    ],
    relatedRoutes: [
      '/dungeons',
      '/guides/loot-upgrade-checklist',
      '/guides/solo-vs-party',
      '/classes',
    ],
  },
  {
    slug: 'loot-upgrade-checklist',
    title: 'Anime Dungeons Loot Upgrade Checklist',
    seoTitle: 'Anime Dungeons Loot Guide - Weapons, Armor, Spells & Reforge',
    seoDescription:
      'Decide which Anime Dungeons loot to equip, keep, or reforge using class fit, repeatable dungeon tests, and a safe resource reserve.',
    summary:
      'Compare loot in the same dungeon, keep one proven setup, and invest only after the item solves a measured problem for the active class.',
    category: 'Loot',
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Anime Dungeons weapons armor guide',
      'Anime Dungeons item reforging',
      'Anime Dungeons best loot',
    ],
    sourceNotes:
      'Official launch media confirms separate Heroes, Weapons, and Armor Index tabs plus Item Reforging. Exact item stats remain in-game data.',
    coverImageUrl: videos.releaseTrailer.thumbnailUrl,
    video: videos.releaseTrailer,
    tags: ['Weapons', 'Armor', 'Reforge'],
    difficulty: 'Intermediate',
    body: [
      {
        heading: 'Start with the problem from the last run',
        paragraphs: [
          'Loot decisions become easier when the dungeon has already named the problem. A boss timing out needs damage or better uptime. A player dying before the boss needs armor, control, or positioning. A room that spreads enemies beyond every attack needs different range or spell coverage.',
          'Write that problem before opening the inventory. Without a target, rarity and visual effects dominate the decision. With a target, each item can be tested against a clear job.',
        ],
      },
      {
        heading: 'A weapon must improve reliable damage',
        paragraphs: [
          'Compare the weapon’s relevant class stat, attack behavior, range, and whether it lands during the current dungeon’s safe windows. A large number attached to an awkward pattern may produce less real damage than a modest weapon that connects on every run.',
          'Equip the candidate and repeat the same dungeon without changing class, armor, hero, and spells. Compare normal-room stability and boss time across more than one attempt. Keep the old weapon until the new result is repeatable.',
        ],
      },
      {
        heading: 'Armor should change how many mistakes the run can survive',
        paragraphs: [
          'Armor is not only a defensive number. It buys time to read attacks and gives the player another attempt at a mechanic. If a new piece turns one unavoidable-looking hit into a survivable mistake, it can create more progression than a small damage gain.',
          'Do not stack defense after the dungeon is already safe if the boss timer becomes the real wall. Re-evaluate the loadout after learning the route. The right balance changes as execution improves.',
        ],
      },
      {
        heading: 'Spells fill missing combat windows',
        paragraphs: [
          'Give each spell slot a role: room clear, safe boss damage, control, or a fast action while the main ability is unavailable. Two spectacular spells with the same range and cooldown weakness can leave the build inactive at the same time.',
          'Test where the spell fails to land. If the effect misses moving enemies or finishes after the safe window, its listed strength may not matter. A reliable spell that covers a weak moment can be the better upgrade.',
        ],
      },
      {
        heading: 'A hero passive supports—not replaces—the setup',
        paragraphs: [
          'Treat the hero as a multiplier on a functioning build. Choose a passive that strengthens the named bottleneck, then repeat the same dungeon. Do not spend every banner resource because a rare hero is popular in the source anime.',
          'If the hero barely changes the problem, keep the currency and improve a direct gear slot. If the passive turns the exact blocking room into a stable clear, it has produced evidence for investment.',
        ],
      },
      {
        heading: 'Reforge only after the base item passes three checks',
        paragraphs: [
          'The official release trailer shows an Item Reforging system. Before using it, confirm that the item fits the class, improves the current dungeon, and is likely to stay equipped long enough to justify the cost. A temporary item can consume resources that the next real upgrade needs.',
          'Keep a reserve rather than spending to zero. Anime Dungeons is in beta, and item balance or acquisition can change. A safe account keeps one working loadout, spare currency, and the ability to test a new drop without destroying the old option.',
        ],
        bullets: [
          'Class fit confirmed.',
          'Same-dungeon improvement repeated.',
          'Base item worth keeping.',
          'Resource reserve remains after reforging.',
        ],
      },
      {
        heading: 'Keep a short upgrade record',
        paragraphs: [
          'A simple record prevents the inventory from becoming a memory test. Note the dungeon, class, old item, candidate item, boss result, and whether normal rooms felt safer. The note does not need exact damage meters; “reached the boss with two more recovery options” is already a useful comparison.',
          'Review the record before selling or consuming an older piece. If the candidate only won during one lucky run, keep both until the result repeats. If it consistently improves the named problem, lock or protect the new item and move the old one out of the active set. This habit becomes more valuable as beta updates add rarities, reforges, and new dungeons.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should I equip every higher-rarity item?',
        answer:
          'No. Test class fit, attack reliability, survival, and whether the item improves the same dungeon more than once.',
      },
      {
        question: 'When is armor better than more damage?',
        answer:
          'Armor is better when dying prevents you from learning or reaching the boss. Damage becomes the priority when survival is stable and clear time is the wall.',
      },
      {
        question: 'When should I use Item Reforging?',
        answer:
          'Reforge after the base item fits the class, improves a repeatable clear, and leaves enough resources for the next upgrade.',
      },
    ],
    relatedRoutes: [
      '/weapons-and-armor',
      '/spells',
      '/heroes',
      '/guides/first-dungeon-route',
    ],
  },
  {
    slug: 'solo-vs-party',
    title: 'Anime Dungeons Solo vs Party Guide',
    seoTitle: 'Anime Dungeons Solo vs Party - Best Way to Clear Dungeons',
    seoDescription:
      'Choose solo or party play in Anime Dungeons by learning goal, boss pressure, class coverage, gear readiness, and clear consistency.',
    summary:
      'Solo exposes the real mechanic; a party spreads pressure and combines roles. Choose the mode that fixes the current problem without hiding what the account still needs to learn.',
    category: 'Co-op',
    sourceStrategy: 'community_crosscheck',
    videoSearchQueries: [
      'Anime Dungeons solo guide',
      'Anime Dungeons party dungeon',
      'Anime Dungeons multiplayer guide',
    ],
    sourceNotes:
      'The official description explicitly supports solo and friend-group dungeon play. Advice stays role-based because public sources do not document stable party scaling or loot formulas.',
    coverImageUrl: videos.currentGameplay.thumbnailUrl,
    video: videos.currentGameplay,
    tags: ['Solo', 'Party', 'Bosses'],
    difficulty: 'Intermediate',
    body: [
      {
        heading: 'Choose solo when the main goal is information',
        paragraphs: [
          'Solo play makes every result easy to read. If a boss attack ends the run, it is clear which player missed the pattern. If the timer expires, the current build owns the damage problem. That clarity is valuable when learning a new class, spell, or dungeon.',
          'Use solo attempts to identify enemy order, safe space, and the boss window. Do not insist on a clear far above the account’s current equipment. The purpose is to expose the wall, not prove that help is unnecessary.',
        ],
      },
      {
        heading: 'Choose a party when shared pressure changes the clear',
        paragraphs: [
          'The official game description encourages teaming with friends. A party can divide enemy attention, cover different ranges, and keep damage active while one player avoids a mechanic. This is useful when the route is understood but a single build cannot maintain enough safe pressure.',
          'A party is less useful when every member repeats the same weakness. Four close-range players who chase the same target can lose visibility and leave other enemies free. Build a group around coverage rather than head count alone.',
        ],
      },
      {
        heading: 'Use class roles to reduce duplicated weaknesses',
        paragraphs: [
          'A heavy-damage front-line role can keep pressure close to the boss, a casting role can cover grouped enemies or safe ranged windows, and a fast role can reposition quickly. These are launch identities, not strict MMO jobs, so do not invent a tank or healer requirement that the game does not publish.',
          'Before entering, agree on the first dangerous target and whether major spells should be staggered. Overlapping every effect can hide boss telegraphs and leave the party with no cooldowns for the next phase.',
        ],
      },
      {
        heading: 'Do not let a carry hide the next wall',
        paragraphs: [
          'A much stronger player can complete a dungeon while the beginner contributes little. The loot may help, but the clear does not prove that the account understands the route or is ready to farm it alone. Repeat the dungeon with a closer-strength party or solo after upgrading.',
          'Use a carry as temporary access to knowledge or a catch-up opportunity, not as the only plan. If every run requires the same helper, drop one difficulty and build a route the account owns.',
        ],
      },
      {
        heading: 'Evaluate party value with two simple comparisons',
        paragraphs: [
          'Run the same dungeon solo and with a similar-strength group. Compare whether the boss becomes safer, whether normal rooms become more chaotic, and whether the clear remains consistent. Do not claim a better loot rate unless the current game publishes or visibly confirms it.',
          'If the party creates stable clears without erasing every mechanic, keep the group route. If it adds visual noise and inconsistent target choices, solo or a smaller party may teach more. The correct mode can change by dungeon.',
        ],
      },
      {
        heading: 'Move between solo and party on purpose',
        paragraphs: [
          'A useful progression cycle is solo to learn, party to stabilize, then solo again to check whether the account improved. The second solo run shows whether new gear and pattern knowledge transferred or whether the group was doing all the work.',
          'When the dungeon is repeatable in either mode, choose based on efficiency and enjoyment. Anime Dungeons supports both paths; the guide should not turn co-op into a moral test. The goal is a build and route that remain understandable.',
        ],
      },
      {
        heading: 'Set a thirty-second plan before the portal',
        paragraphs: [
          'A short lobby agreement prevents most avoidable party confusion. Confirm the dungeon and difficulty, name the first dangerous target, decide whether everyone is learning or farming, and ask who has reliable ranged coverage. This is enough coordination for an early run without pretending the game requires a fixed competitive composition.',
          'After a wipe, discuss the first failure rather than the final death. The run may have been lost when two players pulled separate groups or when every large spell was used before the boss window. Change one team decision and repeat. A party learns faster when feedback describes an event instead of blaming a class, rarity, or player.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Anime Dungeons better solo or with friends?',
        answer:
          'Solo is better for learning and measuring a build. A party is better when shared pressure and role coverage make an understood dungeon more consistent.',
      },
      {
        question: 'Do I need a tank or healer?',
        answer:
          'Current official surfaces do not publish strict party-role requirements. Build around damage range, survival, and cooldown coverage without inventing MMO jobs.',
      },
      {
        question: 'Should I accept a carry?',
        answer:
          'A carry can provide loot or access, but repeat the dungeon later at an appropriate strength so the route does not remain dependent on one player.',
      },
    ],
    relatedRoutes: [
      '/dungeons',
      '/guides/first-dungeon-route',
      '/classes',
      '/guides/loot-upgrade-checklist',
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
