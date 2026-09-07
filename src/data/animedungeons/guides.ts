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
  {
    slug: 'level-5-progression-route',
    title: 'Anime Dungeons Level 5 Progression Route',
    seoTitle: 'Anime Dungeons Level 5 Guide - Fast Beginner Progression',
    seoDescription:
      'Reach level 5 in Anime Dungeons with a clean Demon Train route, class-matched gear, index rewards, safe traits, and the right next difficulty.',
    summary:
      'Build one four-hero team, farm the easiest repeatable Demon Train route, claim index rewards, and save expensive trait rolls until the account has a proven unit.',
    category: 'Start Here',
    sourceStrategy: 'popular_youtube',
    videoSearchQueries: [
      'Anime Dungeons level 5 guide',
      'Anime Dungeons beginner progression route',
      'Anime Dungeons Demon Train medium unlock',
    ],
    sourceNotes:
      'A July 25 current-release walkthrough supplies the level-5 route, controls, team setup, index rewards, and spending cautions. Exact rewards and unlock labels should still be checked in the live beta client.',
    coverImageUrl: videos.levelFiveProgression.thumbnailUrl,
    video: videos.levelFiveProgression,
    tags: ['Level 5', 'Demon Train', 'Progression'],
    difficulty: 'Beginner',
    body: [
      {
        heading: 'Set one class and one four-hero team first',
        paragraphs: [
          'Choose Warrior, Mage, or Assassin by the combat range you can control, then keep that class long enough to learn its dodge and damage windows. The current class effects do not stack, so switching every run creates more variables without improving the route.',
          'Use the first summons to fill all four hero slots. Upgrade the heroes that actually enter the dungeon, and stop at the current player-level cap instead of spending across every new pull. A complete, level-matched team clears early rooms more reliably than one overbuilt unit surrounded by empty slots.',
        ],
      },
      {
        heading: 'Farm the easiest Demon Train route to level 5',
        paragraphs: [
          'Start with the lowest Demon Train difficulty that the account can repeat without a carry. Current gameplay shows a ten-minute dungeon window and a level-5 gate for the next early difficulty, but beta labels can move, so confirm both values in the live portal.',
          'Use Q to dodge the attack that would interrupt the longest damage window. During the boss, move first and attack second until the telegraph pattern is readable. The goal is repeatable experience and drops, not one lucky clear that consumes every heal.',
        ],
        bullets: [
          'Keep a healing spell when running solo.',
          'Match weapons, armor, and spells to the active class stats.',
          'Repeat the same difficulty until the boss route survives normal mistakes.',
        ],
      },
      {
        heading: 'Claim free progression before buying more rolls',
        paragraphs: [
          'Check daily rewards, achievements, and each available Index tab after the first clears. Hero, weapon, armor, and spell discoveries can return Gems or other account resources, turning ordinary dungeon drops into part of the summon budget.',
          'Redeem current source-reported codes before calculating the next spend. The live reward popup is final, but delaying redemption can make the account look poorer than it is and lead to unnecessary grinding.',
        ],
      },
      {
        heading: 'Reset mistakes with gold, not rare trait resources',
        paragraphs: [
          'If the class stats were assigned in the wrong direction, use the live stat-reset option and its displayed gold cost before replacing the entire build. A correct class-stat match usually matters more at this stage than chasing a perfect trait.',
          'Save Trait Crystals and other scarce reroll resources until a Mythic or otherwise proven long-term hero appears. Early heroes are useful for reaching level 5, but spending the rarest currency on the first pull can delay the account once better units arrive.',
        ],
      },
      {
        heading: 'Move up only when the route is stable',
        paragraphs: [
          'At level 5, test the newly available difficulty with the same team and loadout. If normal rooms consume the heal before the boss, return to the easier route for class-matched equipment and hero levels. If survival is stable but the timer is the wall, improve damage or spell uptime.',
          'Keep the easier route available as a fallback. Progress is faster when each run has a clear purpose: experience, a specific equipment slot, Index completion, or a test of the next dungeon gate.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I reach level 5 in Anime Dungeons?',
        answer:
          'Build a full four-hero team and repeat the easiest Demon Train difficulty you can clear consistently, claiming daily, achievement, and Index rewards between runs.',
      },
      {
        question: 'What unlocks at level 5?',
        answer:
          'Current release gameplay shows the next early Demon Train difficulty opening at level 5. Check the live beta portal because requirements can change.',
      },
      {
        question: 'Should I roll traits before level 5?',
        answer:
          'Usually no. Save scarce trait resources for a proven long-term hero and use early runs to improve class-matched gear, hero levels, and execution.',
      },
    ],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/first-dungeon-route',
      '/codes',
      '/classes',
      '/weapons-and-armor',
    ],
  },
  {
    slug: 'trials-and-raids-guide',
    title: 'Anime Dungeons Trials and Raids Guide',
    seoTitle: 'Anime Dungeons Raid Guide - Trials, Build & Fast Route',
    seoDescription:
      'Prepare for Anime Dungeons trials and raids, learn the Update 2 Warrior route, time Q movement, and build a repeatable fallback setup.',
    summary:
      'Use trials to prove the build, then run raids with deliberate Q movement, room-by-room ability timing, and a fallback route when the fastest setup is unavailable.',
    category: 'Dungeons',
    sourceStrategy: 'popular_youtube',
    videoSearchQueries: [
      'Anime Dungeons raids guide Update 2',
      'Anime Dungeons trials guide',
      'Anime Dungeons fastest raid route',
    ],
    sourceNotes:
      'The embedded August 21 Update 2 video supplies the tested Warrior and Shadow Monarch raid route, Q timing, damage-over-time setup, and creator benchmark. A separate current Hatter video cross-checks trial demand. Exact drops and beta requirements are intentionally left to the live client.',
    coverImageUrl: videos.raidRoute.thumbnailUrl,
    video: videos.raidRoute,
    tags: ['Update 2', 'Raids', 'Trials'],
    difficulty: 'Advanced',
    body: [
      {
        heading: 'Treat a trial clear as the raid readiness check',
        paragraphs: [
          'A raid route is useful only when the class, movement, and main ability already work under pressure. Clear the trial tied to the class or ability you plan to bring, then repeat the encounter until the result does not depend on one lucky drop or another player carrying the damage.',
          'Before entering a raid, confirm the live requirement, equip the intended class, and put the movement and damage-over-time tools on familiar inputs. Update 2 can change gates and rewards faster than a static table, so the portal and reward preview are the final checks.',
        ],
        bullets: [
          'Use the current trials guide when an unlock encounter is still the bottleneck.',
          'Keep one proven weapon and armor set instead of changing several systems at once.',
          'Record whether a failed attempt came from route timing, survival, or damage.',
        ],
      },
      {
        heading:
          'The current fast route is a specific build, not a universal tier claim',
        paragraphs: [
          'The August 21 route video demonstrates Warrior with the Shadow Monarch class and a new damage-over-time ability. The creator uses repeated Q movement to cross rooms quickly, activates damage before reaching the next pack, and finishes enemies while continuing toward the next checkpoint.',
          'That makes the route a tested setup rather than proof that Warrior is always the best class. If one required unlock is missing, use the same route principles with the strongest class you can control: front-load persistent damage, preserve movement for room transitions, and avoid waiting beside enemies that are already dying.',
        ],
      },
      {
        heading: 'Use Q to connect rooms instead of correcting panic movement',
        paragraphs: [
          'The video gains most of its time by chaining Q movement toward the next objective. Decide the exit direction before the current pack ends, then move as soon as persistent damage can finish the remaining health. Random dashes inside a room spend the same resource without advancing the route.',
          'Do not copy the speed line until the room is understood. On the first attempts, leave one movement charge available for a missed attack or dangerous telegraph. Once the route survives ordinary mistakes, shift that reserve into faster transitions.',
        ],
      },
      {
        heading: 'Assign major abilities to fixed rooms',
        paragraphs: [
          'A fast raid is easier to repeat when each major ability has a planned room. The demonstrated route uses the damage-over-time effect early, saves additional activations for later groups, and avoids wasting the strongest option on an enemy that the weapon can finish safely.',
          'Write a simple sequence after the first clear: opening ability, first transition, second activation, weapon-only room, and boss entry. If an ability is still cooling down at its assigned room, the previous use was too late or the route moved faster than the cooldown plan.',
        ],
      },
      {
        heading: 'Read the sub-minute clear as a benchmark, not a promise',
        paragraphs: [
          'The creator reports solo clears around 57 seconds to one minute five seconds, with a faster duo result. Those numbers describe one build, account, and video test. Ping, equipment, beta balance, party damage, and execution can all change the result.',
          'Measure improvement against your own clean baseline. First remove deaths and missed rooms, then reduce idle time between packs. A stable ninety-second clear is a better farming route than a single sub-minute run followed by repeated resets.',
        ],
      },
      {
        heading: 'Use a fallback route when the showcase setup is missing',
        paragraphs: [
          'Without Shadow Monarch or the showcased ability, prioritize one room-clear tool, one safe boss-damage option, and enough movement to keep the route connected. Run the same raid twice before changing gear so the comparison is based on repeatable evidence.',
          'Farm the trial, dungeon, or Index route that supplies the missing bottleneck, then return to the raid. Do not spend every rare reforge or trait resource trying to imitate one video immediately; unlock the route first, test the base setup, and invest only after the raid becomes a useful farm.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the fastest current Anime Dungeons raid setup?',
        answer:
          'An August 21 Update 2 video demonstrates Warrior with Shadow Monarch, a damage-over-time ability, and repeated Q movement. Treat it as a tested route, not a permanent universal ranking.',
      },
      {
        question: 'How fast can an Anime Dungeons raid be cleared?',
        answer:
          'The featured creator reports roughly 57 seconds to one minute five seconds solo for the showcased setup. Your account, ping, party, and current beta balance can produce a different result.',
      },
      {
        question: 'What should I do if I do not have the fast raid build?',
        answer:
          'Use one room-clear tool, one boss-damage option, and planned movement, then farm the specific trial or dungeon that unlocks the missing class, ability, or equipment bottleneck.',
      },
    ],
    relatedRoutes: [
      '/dungeons',
      '/classes',
      '/guides/level-5-progression-route',
      '/guides/loot-upgrade-checklist',
      '/weapons-and-armor',
    ],
  },
  {
    slug: 'update-3-sao-raid-guide',
    title: 'Anime Dungeons Update 3 SAO Raid Guide',
    seoTitle: 'Anime Dungeons Update 3 Guide - SAO Raid, Codes & Loot',
    seoDescription:
      'Prepare for the Anime Dungeons Update 3 SAO raid with current codes, a first-run checklist, build priorities, loot checks, and safe farming decisions.',
    summary:
      'Update 3 adds a Sword Art Online-inspired raid loop. Redeem the current code pair, enter with a proven build, learn the rooms before chasing speed, and evaluate new weapons and gear against a repeatable baseline.',
    category: 'Dungeons',
    sourceStrategy: 'youtube_explainer',
    videoSearchQueries: [
      'Anime Dungeons Update 3 guide',
      'Anime Dungeons SAO raid guide',
      'Anime Dungeons Update 3 codes',
    ],
    sourceNotes:
      'The official Roblox title confirms Update 3. The embedded September 4 walkthrough confirms the SAO-inspired raid and new enemies, bosses, rewards, weapons, and gear. Current code rewards are cross-checked between Pro Game Guides, AllThings.How, and MrGuider; the live beta client remains final for gates and item values.',
    coverImageUrl: videos.updateThreeRaid.thumbnailUrl,
    video: videos.updateThreeRaid,
    tags: ['Update 3', 'SAO Raid', 'Codes'],
    difficulty: 'Intermediate',
    body: [
      {
        heading: 'Confirm Update 3 before building around the raid',
        paragraphs: [
          'Open the current 1B Studio experience at Place ID 70863683083739 and confirm the Roblox title shows UPD 3. The older Anime Dungeons Place is not the current game, and an old server can also hide a new portal, code, or balance change. Rejoin once before troubleshooting content that appears missing.',
          'The official title is the reliable version boundary. A current September 4 walkthrough then supplies the useful player-facing context: Update 3 centers on a Sword Art Online-inspired raid and introduces new enemies, bosses, rewards, weapons, and gear. Exact requirements and stat values can still move while the game remains in beta, so read the live portal and item cards before committing resources.',
        ],
        bullets: [
          'Current Place ID: 70863683083739.',
          'Current creator: 1B Studio.',
          'Current official version signal: UPD 3.',
          'Rejoin a fresh server when the raid or code interface looks stale.',
        ],
      },
      {
        heading: 'Redeem the Update 3 resources before spending',
        paragraphs: [
          'Try UPDATE3 first for the reported 20 Trait Rerolls, 2,000 Gems, and 5 Wheel Spins, then SAO for the reported 15 Trait Rerolls, 500 Gems, and 3 Wheel Spins. Current trackers agree on both strings and reward bundles, but neither code is printed in the official Roblox description, so the in-game success popup is the final authority.',
          'Do not immediately spend every reward on the first new hero or item you see. Record the starting resource totals, redeem one code at a time, and decide which raid problem the resources should solve. Gems and Wheel Spins can expand options; Trait Rerolls should stay reserved for a hero that already has a demonstrated place in the raid or normal dungeon route.',
        ],
      },
      {
        heading: 'Enter the SAO raid with a proven baseline build',
        paragraphs: [
          'The first raid attempt should answer route questions, not prove a speed record. Bring the class and equipment set that already clears a familiar dungeon consistently. Keep one reliable room-clear ability, one safe boss-damage option, and enough movement or recovery to survive an unfamiliar telegraph. A new weapon is not automatically a better weapon until it improves the same job.',
          'Before entering, compare the live recommended level, party size, entry cost, and reward preview with your current account. If normal dungeon enemies already consume every heal, farm the easier route for class-matched equipment first. A failed raid caused by basic survival will not be fixed by spending rare rerolls on an untested hero.',
        ],
      },
      {
        heading: 'Learn rooms first, then optimize the route',
        paragraphs: [
          'During the opening run, identify where enemies spawn, which packs can be grouped, which attack needs a dodge, and which room should receive the longest cooldown. Preserve one movement or defensive answer until the boss pattern is visible. When persistent damage can finish a pack, start moving toward the next objective instead of waiting beside enemies that are already defeated in practice.',
          'After the clear, write a short sequence: opening ability, first dangerous room, recovery point, boss entry, and the attack that caused the most lost time or health. Repeat the same route before changing several pieces of gear. The comparison becomes useful only when one variable changes at a time.',
        ],
      },
      {
        heading: 'Judge new weapons and gear by the wall they remove',
        paragraphs: [
          'Update videos can show exciting drops without proving that every new item is best for every class. Compare a weapon by its relevant class scaling, attack pattern, reach, and whether it improves rooms or the boss. Compare armor by whether it creates a survivable mistake margin without giving up the damage needed to finish the encounter.',
          'Keep the previous working item until the replacement wins more than one run. If the new item changes both stats and play style, test it in a familiar dungeon before blaming the raid route. Reforging and expensive upgrades belong on equipment that has already earned a stable slot, not on every Update 3 drop.',
        ],
      },
      {
        heading: 'Turn the raid into a repeatable farm',
        paragraphs: [
          'A farm route begins when the clear survives ordinary mistakes. Track completion time, deaths, potion use, and whether the desired reward can actually drop from the selected difficulty. If a party makes the run reliable, keep roles clear: room clear, boss pressure, control, and recovery should complement one another instead of four players competing for the same job.',
          'Raise difficulty only when the existing route no longer needs perfect cooldown timing or a carry. If the next tier fails, return with a named goal such as better boss damage, one armor slot, a class level, or a specific spell. That approach keeps Update 3 progression tied to evidence instead of endless random rolling.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is new in Anime Dungeons Update 3?',
        answer:
          'The official title confirms Update 3, while a current walkthrough shows a Sword Art Online-inspired raid with new enemies, bosses, rewards, weapons, and gear.',
      },
      {
        question: 'What are the Anime Dungeons Update 3 codes?',
        answer:
          'Current sources list UPDATE3 and SAO. They report Gems, Trait Rerolls, and Wheel Spins; use the live redemption popup as the final reward check.',
      },
      {
        question: 'Should I reroll traits before trying the SAO raid?',
        answer:
          'Usually no. Run the raid with a proven build first, identify the real wall, and spend scarce rerolls only on a hero that solves it.',
      },
      {
        question: 'Should every Update 3 weapon replace my old one?',
        answer:
          'No. Test the new weapon against the same room and boss route, and keep the old item until the replacement improves repeatable clears.',
      },
    ],
    relatedRoutes: [
      '/updates',
      '/codes',
      '/dungeons',
      '/weapons-and-armor',
      '/guides/trials-and-raids-guide',
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
