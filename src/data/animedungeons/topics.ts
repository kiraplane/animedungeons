import { officialGameFacts } from './sources';
import type { TopicPage } from './types';

export const topics: Record<string, TopicPage> = {
  classes: {
    route: '/classes',
    label: 'Classes',
    eyebrow: 'Pick a role, not a letter grade',
    title: 'Anime Dungeons Classes Guide',
    description:
      'Compare Anime Dungeons starter and unlock classes by damage, casting, speed, survivability, and the dungeon problem each role solves.',
    summary:
      'Warrior, Mage, and Assassin are the reported launch starters; Knight, Archmage, and Void Reaper are unlock paths. Use role fit and clear consistency instead of an unsupported launch-week tier list.',
    sections: [
      {
        heading: 'The launch class screen rewards commitment',
        paragraphs: [
          'The release trailer shows a dedicated Class Selection interface and explicitly warns that classes do not stack. It also tells players to defeat enemies while using a class to earn class defeats. That makes class choice a progression lane, not a passive collection bonus that can all be active at once.',
          'Current launch references identify Warrior, Mage, and Assassin as the three starters, with Knight, Archmage, and Void Reaper behind later criteria. Exact thresholds can change during beta, so use the live class screen as the authority before spending rerolls or planning an unlock grind.',
        ],
      },
      {
        heading: 'Choose the starter whose failure you understand',
        paragraphs: [
          'The trailer frames the starter identities around heavy damage, a mana-focused casting role, and fast movement. Pick the role whose main risk you can manage: close-range exposure, spell timing and resource use, or precise movement with lower forgiveness. A class that survives your current dungeon is more useful than a theoretical top pick that repeatedly dies before the boss.',
          'If you are unsure, run the first accessible dungeon more than once before changing. Track whether the failure comes from damage, survival, positioning, or downtime. Only the first two are likely to be solved by a different class; route memory and dodge timing usually need practice.',
        ],
        bullets: [
          'Warrior path: direct damage and a simple close-range learning loop.',
          'Mage path: casting decisions, spacing, and mana-aware pressure.',
          'Assassin path: movement, fast engagement, and lower tolerance for careless hits.',
        ],
      },
      {
        heading: 'Why this page is not a class tier list yet',
        paragraphs: [
          'A reliable ranking needs same-version tests for clear time, boss damage, survivability, team value, unlock cost, and investment. Launch-week pages mostly repeat class names without that comparison. Ranking six roles from labels alone would turn an interface preview into invented balance data.',
          'Use this page as a role filter. The site will add a tier table only when current tests cover all six classes on comparable dungeons. Until then, the best class is the one that removes the specific wall blocking your next clear.',
        ],
      },
      {
        heading: 'Move to an unlock class for a reason',
        paragraphs: [
          'Knight, Archmage, and Void Reaper should be treated as later decisions, not automatic upgrades in a single universal order. Before switching, note what the new class is expected to change and whether your weapon, armor, spell choices, and dungeon practice support that change.',
          'Do not spend every resource chasing a class while wearing weak equipment. A modest class with current-level gear can outperform a rare unlock that is under-equipped or unfamiliar. Keep one playable setup intact while testing a new path.',
        ],
        links: [
          {
            label: 'Choose your first class step by step',
            href: '/guides/choose-first-class',
          },
          {
            label: 'Match equipment to the current role',
            href: '/weapons-and-armor',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'What are the Anime Dungeons starter classes?',
        answer:
          'Current launch references list Warrior, Mage, and Assassin as starters. Confirm the live class screen because beta requirements can change.',
      },
      {
        question: 'What classes can be unlocked later?',
        answer:
          'Knight, Archmage, and Void Reaper are the three reported unlock classes at launch.',
      },
      {
        question: 'What is the best class in Anime Dungeons?',
        answer:
          'There is not enough same-version evidence for a trustworthy full ranking. Choose by the failure blocking your current dungeon: damage, survival, casting uptime, or movement.',
      },
    ],
    relatedRoutes: [
      '/guides/choose-first-class',
      '/guides/beginner-guide',
      '/weapons-and-armor',
      '/spells',
    ],
  },
  dungeons: {
    route: '/dungeons',
    label: 'Dungeons',
    eyebrow: 'Four launch environments',
    title: 'Anime Dungeons Dungeon Guide',
    description:
      'Prepare for Demon Train, Frozen Forest, Sand Village, and The Crimson Sanctum with a clear readiness and boss-practice checklist.',
    summary:
      'The release trailer names four launch dungeons. Treat its sequence as a content showcase, not a guaranteed unlock order, and move forward only when normal rooms and the boss are both repeatable.',
    sections: [
      {
        heading: 'The four names confirmed in launch media',
        paragraphs: [
          'Current official launch media names Demon Train, Frozen Forest, Sand Village, and The Crimson Sanctum. Each environment shows different sightlines, enemy spacing, and visual pressure, but the trailer does not publish a complete difficulty, level, or drop table.',
          'Use the live portal or dungeon menu for the current level gate and difficulty. Beta updates can move requirements without changing the trailer, so this hub deliberately avoids hard-coded thresholds until the game exposes a stable source.',
        ],
        bullets: [
          'Demon Train',
          'Frozen Forest',
          'Sand Village',
          'The Crimson Sanctum',
        ],
      },
      {
        heading: 'A dungeon is ready when the whole run is repeatable',
        paragraphs: [
          'Do not judge readiness from one strong room or one lucky drop. A useful clear includes normal enemies, movement between encounters, resource management, and the final boss. If the boss consumes every recovery option after easy rooms, the loadout is still fragile.',
          'Run the highest difficulty you can finish consistently, not the highest one you can enter. Reliable clears produce more useful practice and loot than repeated failures at a dramatic gate.',
        ],
      },
      {
        heading: 'Change one variable after a failed run',
        paragraphs: [
          'First identify the failure: too little damage before a timer, unavoidable damage caused by poor positioning, an armor gap, a spell with the wrong range, or a party that splits targets. Change only the variable connected to that failure and repeat the same dungeon.',
          'This makes upgrades measurable. If a new weapon does not improve the same room, the real limit may be survival or execution. If an armor change keeps you alive but the boss still times out, damage becomes the next test.',
        ],
      },
      {
        heading: 'Use the first clear to unlock knowledge',
        paragraphs: [
          'On an unfamiliar dungeon, learn spawn direction, safe space, boss telegraphs, and where movement becomes constrained. Damage optimization comes after the route stops surprising you. A slower first clear is valuable if it reveals which attack repeatedly causes the wipe.',
          'For a practical route from the lobby to the first boss, start with the dedicated first-dungeon guide. Use the solo-versus-party page when the question is whether another player will fix the current wall or only hide it.',
        ],
        links: [
          {
            label: 'Plan the first dungeon',
            href: '/guides/first-dungeon-route',
          },
          { label: 'Choose solo or a party', href: '/guides/solo-vs-party' },
        ],
      },
    ],
    faq: [
      {
        question: 'How many dungeons launched with Anime Dungeons?',
        answer:
          'The official release trailer names four: Demon Train, Frozen Forest, Sand Village, and The Crimson Sanctum.',
      },
      {
        question: 'What order should I play the dungeons?',
        answer:
          'Follow the current in-game level and difficulty gates. The trailer sequence is a showcase and should not be treated as a permanent unlock table.',
      },
      {
        question: 'When should I move to a harder dungeon?',
        answer:
          'Move when normal rooms and the boss are both repeatable without depending on one lucky drop or a carry.',
      },
    ],
    relatedRoutes: [
      '/guides/first-dungeon-route',
      '/guides/solo-vs-party',
      '/weapons-and-armor',
      '/classes',
    ],
  },
  heroes: {
    route: '/heroes',
    label: 'Heroes',
    eyebrow: 'Passive support for the build',
    title: 'Anime Dungeons Heroes Guide',
    description:
      'Understand Anime Dungeons hero summons, passive build value, and when a hero upgrade matters more than another weapon or class change.',
    summary:
      'Heroes support the active build; they do not replace class execution, gear, or dungeon practice. Evaluate a hero by the bottleneck it removes, not by anime popularity alone.',
    sections: [
      {
        heading: 'Heroes belong to the build, not the driver seat',
        paragraphs: [
          'The official description says players can summon anime heroes to fight alongside them, while launch references describe heroes as passive stat support obtained through a banner system. The trailer also shows a Heroes tab in the in-game index, confirming that the system is meant to be collected and compared.',
          'Treat a hero as one part of a loadout. It can strengthen damage, survival, or another stat, but it cannot repair missed dodges, an unsuitable spell, or equipment far below the current dungeon.',
        ],
      },
      {
        heading: 'Roll only after naming the missing stat',
        paragraphs: [
          'Before spending banner currency, identify the current wall. If the boss survives with a small amount of health, damage support may be useful. If normal enemies remove most of your health, defensive value or better armor is the more direct answer. If the run fails because attacks miss, another summon may not help at all.',
          'Keep enough currency for future updates and guaranteed-value upgrades. New beta games change banners quickly, so a launch-week chase based only on rarity can become expensive without improving the account.',
        ],
      },
      {
        heading: 'Why there is no hero tier list on launch day',
        paragraphs: [
          'A hero ranking needs a complete current roster, passive values, acquisition odds, upgrade cost, and tests across classes. Public launch coverage does not yet provide that full set. Naming a lore-famous character as S tier would be entertainment, not useful game data.',
          'This page will grow into a comparison table after current source material covers the roster. Until then, use the in-game Index and compare the actual passive against your build bottleneck.',
        ],
      },
      {
        heading: 'Test a hero without changing the whole loadout',
        paragraphs: [
          'Run the same dungeon with the same class, weapon, armor, and spells before and after equipping the hero. Compare survival, boss time, and whether the difficult room becomes more stable. One controlled test is more useful than a high rarity border.',
          'If the difference is small, keep the hero as a secondary option and spend on a direct gear upgrade. If it changes the exact room that blocked progress, the hero has earned a place in the current build.',
        ],
        links: [
          {
            label: 'Audit the rest of the loadout',
            href: '/weapons-and-armor',
          },
          {
            label: 'Build a clean dungeon test',
            href: '/guides/loot-upgrade-checklist',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'What do heroes do in Anime Dungeons?',
        answer:
          'Heroes are summonable companions that support the build. Current launch references emphasize passive or stat value alongside combat support.',
      },
      {
        question: 'How do you get heroes?',
        answer:
          'Current launch references point to a banner or summon system. Use the live game for current costs and odds.',
      },
      {
        question: 'Who is the best hero?',
        answer:
          'A reliable current roster comparison is not available yet. Choose the passive that fixes the problem blocking your build.',
      },
    ],
    relatedRoutes: [
      '/guides/loot-upgrade-checklist',
      '/weapons-and-armor',
      '/classes',
      '/dungeons',
    ],
  },
  'weapons-and-armor': {
    route: '/weapons-and-armor',
    label: 'Weapons & Armor',
    eyebrow: 'Upgrade with evidence',
    title: 'Anime Dungeons Weapons & Armor Guide',
    description:
      'Compare Anime Dungeons weapons and armor by class fit, damage, survival, dungeon level, and reforge value without a fabricated tier list.',
    summary:
      'Use weapons for the class job, armor for the hits you cannot yet avoid, and reforging only after the base item is worth keeping. Rarity is a filter—not the whole decision.',
    sections: [
      {
        heading: 'The Index separates heroes, weapons, and armor',
        paragraphs: [
          'The release trailer shows separate Index tabs for Heroes, Weapons, and Armor, while the official description makes rare loot a core progression reward. This is a database-shaped system, but launch sources do not yet support a complete public stat table.',
          'Use the Index to identify what exists, then use the inventory comparison to decide what belongs in the current build. Do not assume every item discovered later is automatically stronger for every class.',
        ],
      },
      {
        heading: 'A weapon must support the active class',
        paragraphs: [
          'Compare the stat that drives the current role, the attack pattern, range, and how reliably the weapon lands damage in the dungeon being farmed. A higher number is not useful if the class cannot exploit it or the attack pattern leaves the player exposed.',
          'Test the weapon against the same room and boss. Keep the old item until the new option improves either clear speed or consistency. This protects the account from selling a stable setup based on one rare drop.',
        ],
      },
      {
        heading: 'Armor buys attempts and learning time',
        paragraphs: [
          'Armor matters when incoming damage ends the run before the player can learn a boss. If a survivability upgrade turns a one-hit failure into enough time to read the telegraph, it may create more progress than a small damage increase.',
          'Once the dungeon is controlled, damage can become the limiting factor again. Re-evaluate rather than carrying a defensive setup forever. The useful balance changes with the room, class, and party.',
        ],
      },
      {
        heading: 'Reforge after the item passes the keep test',
        paragraphs: [
          'The official trailer shows Item Reforging. Reforging a temporary item can consume resources without solving a long-term problem, so first confirm that the base weapon or armor fits the class and current dungeon.',
          'Keep one reserve item and a currency buffer while learning the system. A beta update can rebalance items or add new drops, and an empty account has no room to respond.',
        ],
        links: [
          {
            label: 'Use the full loot upgrade checklist',
            href: '/guides/loot-upgrade-checklist',
          },
          { label: 'Match gear to a class role', href: '/classes' },
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best weapon in Anime Dungeons?',
        answer:
          'There is not enough complete same-version data for a universal ranking. Use class fit, attack reliability, and the current dungeon as the test.',
      },
      {
        question: 'Should I equip the highest-rarity item?',
        answer:
          'Not automatically. Compare the relevant class stat, attack pattern, survival, and whether the item improves a repeatable clear.',
      },
      {
        question: 'When should I reforge an item?',
        answer:
          'Reforge after the base item has proven useful and you can keep a resource reserve for the next upgrade.',
      },
    ],
    relatedRoutes: [
      '/guides/loot-upgrade-checklist',
      '/classes',
      '/spells',
      '/dungeons',
    ],
  },
  spells: {
    route: '/spells',
    label: 'Spells',
    eyebrow: 'Choose for the next room',
    title: 'Anime Dungeons Spells Guide',
    description:
      'Choose Anime Dungeons spells by range, control, burst, cooldown coverage, and class fit for rooms, bosses, and party play.',
    summary:
      'A spell is valuable when it covers a real combat window. Build a small kit with a job for each slot instead of filling every slot with the same kind of damage.',
    sections: [
      {
        heading: 'Give every spell slot a job',
        paragraphs: [
          'The official description names spells as a core loot system, and the release trailer shows large area attacks, projectiles, and close-range effects. Build around jobs such as room clear, safe boss damage, control, or emergency space rather than visual spectacle alone.',
          'Two spells with the same range and cooldown weakness can leave the build helpless at the same moment. A balanced kit keeps at least one useful action available when the main burst is recharging.',
        ],
      },
      {
        heading: 'Match range to class and dungeon geometry',
        paragraphs: [
          'A close-range class may value a spell that creates space or reaches an enemy during a dangerous mechanic. A casting class may prefer a reliable area tool and one fast option for enemies that escape the main cast. Narrow corridors and open arenas reward different coverage.',
          'Test where the spell misses, not only where it produces the largest number. A slightly weaker effect that lands on every run can improve progression more than an impressive attack that is difficult to place.',
        ],
      },
      {
        heading: 'Save burst for the window that matters',
        paragraphs: [
          'Do not empty every cooldown into the first enemy if the next room or boss opens a better damage window. Learn which attacks force movement, then cast after the dangerous pattern ends so the spell can complete without interruption.',
          'In a party, stagger major abilities when possible. Overlapping all effects can hide telegraphs and leave the group with no answer for the next wave.',
        ],
      },
      {
        heading: 'Upgrade a spell after it proves useful',
        paragraphs: [
          'Before investing, run the same dungeon and note how often the spell contributes to a clear. If it is rarely used because the range or timing does not fit, replace it before spending. If it consistently solves the hardest room, upgrading is easier to justify.',
          'Keep exact damage and cooldown claims tied to the live interface. Beta balance can change quickly, so this guide focuses on durable slot logic instead of numbers that may be stale after a shutdown.',
        ],
        links: [
          { label: 'Choose a matching class role', href: '/classes' },
          {
            label: 'Test the full loadout',
            href: '/guides/loot-upgrade-checklist',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'How many spells are in Anime Dungeons?',
        answer:
          'Current official surfaces confirm a spell system but do not publish a stable complete count. Use the live Index and inventory for the current roster.',
      },
      {
        question: 'What makes a spell good?',
        answer:
          'Reliable range, a useful combat job, class fit, and cooldown coverage matter more than one isolated damage number.',
      },
      {
        question: 'Should I use only damage spells?',
        answer:
          'Not always. A spacing, control, or reliable quick-cast option can keep the build active when burst spells are unsafe or on cooldown.',
      },
    ],
    relatedRoutes: [
      '/classes',
      '/guides/loot-upgrade-checklist',
      '/dungeons',
      '/heroes',
    ],
  },
  updates: {
    route: '/updates',
    label: 'Release & Updates',
    eyebrow: 'Checked August 10, 2026',
    title: 'Anime Dungeons Release & Update Status',
    description:
      'Track the current Anime Dungeons 1B Studio release, beta status, Roblox identity, code uncertainty, and the unavailable old Place.',
    summary:
      'The current 1B Studio experience is live under Update 3 and still carries a beta notice. The newest source-backed player workflow is the SAO-inspired raid, with fresh codes and raid preparation separated from unverified exact drop values.',
    sections: [
      {
        heading: 'Update 3 is live and the game remains in beta',
        paragraphs: [
          'Roblox now names the experience “[UPD 3⚔️] Anime Dungeons.” The official description still says the game is in beta and may contain bugs, unexpected changes, new content, and balance adjustments.',
          'Roblox API data maps Place ID 70863683083739 to Universe ID 8718668434 under the 1B Studio Group. That pair is the stable identity to check after updates.',
        ],
        bullets: [
          'Place ID: 70863683083739',
          'Universe ID: 8718668434',
          'Creator Group: 1B Studio (794813948)',
          'Genre: RPG / Action RPG',
        ],
      },
      {
        heading: 'What the Update 3 evidence confirms',
        paragraphs: [
          'The official title confirms Update 3. A current September 4 walkthrough independently shows a Sword Art Online-inspired raid with new enemies, bosses, rewards, weapons, and gear. It does not establish a permanent exact drop-rate table.',
          'Use the dedicated Update 3 raid guide for the first-run order, then confirm raid gates, loot cards, equipment values, and boss behavior in the live beta client.',
        ],
      },
      {
        heading: 'The old Place should not be used for current guides',
        paragraphs: [
          'Place ID 8862620807 belongs to an older Anime Dungeons history and now returns a title-unavailable or content-restricted record from Roblox. Some fresh articles still send their Play button there, which makes a recent publication date insufficient proof of a current guide.',
          'This site uses the live 1B Studio Place for all official links and keeps old Mystoic-era facts out of current class, code, and dungeon guidance.',
        ],
      },
      {
        heading: 'Code status changes faster than the core identity',
        paragraphs: [
          'Current September trackers agree on SAO and UPDATE3, with 30KLIKES, 7MVISITS, and JJKTRIAL also in the current list. Older sources retain launch and Update 1 strings. The Roblox description used for this check does not publish a complete active-code table.',
          'The codes page therefore separates reported entries from official confirmation. A live in-game success message is the final check until 1B Studio publishes a code on an official surface.',
        ],
        links: [{ label: 'Open the code status page', href: '/codes' }],
      },
      {
        heading: 'What to recheck after an update',
        paragraphs: [
          'Recheck the class screen, dungeon gates, item stats, banner costs, spell behavior, and code menu after a shutdown. Guides on this site emphasize decision logic so they remain useful even when one number changes.',
          'Named tier lists and databases will only be added after current source material supports complete comparison. Early beta is the wrong moment to turn partial discoveries into permanent rankings.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Anime Dungeons released?',
        answer:
          'Yes. The current Roblox title carries the Update 3 label, while the description still identifies the game as an actively changing beta.',
      },
      {
        question: 'Who develops the current Anime Dungeons?',
        answer:
          'The current live experience is published by the Roblox Group 1B Studio.',
      },
      {
        question: 'Why do some links open a title-unavailable page?',
        answer:
          'They point to the old Place ID 8862620807. The current 1B Studio Place ID is 70863683083739.',
      },
    ],
    relatedRoutes: [
      '/official-links',
      '/codes',
      '/guides/beginner-guide',
      '/guides/update-3-sao-raid-guide',
      '/dungeons',
    ],
  },
  discord: {
    route: '/discord',
    label: 'Discord',
    eyebrow: 'Official community access',
    title: 'Anime Dungeons Discord Server',
    description:
      'Use the verified Anime Dungeons Discord invite, fix an expired invite, follow Update 1 announcements, and avoid fake Roblox login links.',
    summary:
      'Official launch media publishes the `anidg` Discord vanity. Join through the verified invite, then use announcements and update channels as discovery signals while keeping account actions inside Roblox.',
    sections: [
      {
        heading: 'Use the verified anidg invite',
        paragraphs: [
          'The Anime Dungeons release trailer publishes the `anidg` Discord vanity. Open that exact invite instead of copying a shortened link from a script page, comment, or unrelated code video.',
          'A Discord server is useful for announcements, maintenance notices, code posts, party finding, and Update 1 discoveries. It is not a replacement for the live game when checking item stats, class requirements, dungeon gates, or whether a reported code actually redeems.',
        ],
        links: [
          {
            label: 'Open the Anime Dungeons Discord',
            href: officialGameFacts.discordUrl,
          },
        ],
      },
      {
        heading: 'What to check after joining',
        paragraphs: [
          'Start with rules, announcements, update logs, known bugs, and code channels. Pin or follow the channels that carry developer posts so current Update 1 information does not get buried under build discussion.',
          'Treat player claims as leads until the live 1B Studio experience confirms them. For tier lists and drop tables, look for the version, class, dungeon difficulty, and visible item card rather than relying on a cropped message alone.',
        ],
        bullets: [
          'Confirm the server branding matches Anime Dungeons and 1B Studio.',
          'Read announcements before asking whether a shutdown changed progression.',
          'Keep code capitalization and punctuation exactly as posted.',
          'Cross-check numerical claims in the current Place before spending resources.',
        ],
      },
      {
        heading: 'If the invite does not open',
        paragraphs: [
          'First try the vanity again in a normal browser or Discord client, then check whether Discord reports an expired invite, a server limit, or an account restriction. Do not install an executor, browser extension, or modified Roblox client to fix a Discord invite.',
          'If the vanity changes, recheck the current Roblox experience, 1B Studio surface, or official launch media. A replacement is considered official only after one of those developer-controlled surfaces publishes it.',
        ],
      },
      {
        heading: 'Keep Roblox account actions on Roblox',
        paragraphs: [
          'Never paste a Roblox cookie, recovery code, session token, or password into Discord. Legitimate moderators do not need those credentials to restore items, verify a code, or join a party.',
          'Use Roblox-owned pages for login, purchases, and account recovery. Leave any server that asks you to run a script or download an unofficial client before accessing Anime Dungeons content.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the official Anime Dungeons Discord?',
        answer:
          'Official launch media publishes the `anidg` vanity at https://discord.gg/anidg.',
      },
      {
        question: 'Does the Discord confirm every Anime Dungeons code?',
        answer:
          'A developer announcement is a strong source, but the current in-game redemption result remains the final check for whether a code still works.',
      },
      {
        question: 'What should I do if the Anime Dungeons Discord invite expires?',
        answer:
          'Recheck the current Roblox experience, 1B Studio surface, or official launch media for a replacement. Do not trust a login or download page that only claims to be official.',
      },
    ],
    relatedRoutes: [
      '/official-links',
      '/updates',
      '/codes',
      '/guides/solo-vs-party',
    ],
  },
  'official-links': {
    route: '/official-links',
    label: 'Official Links',
    eyebrow: 'Verified current destinations',
    title: 'Anime Dungeons Official Links',
    description:
      'Open the current Anime Dungeons Roblox game, 1B Studio Group, official Discord, and verified Trello status without using the old Place.',
    summary:
      'Match Place ID 70863683083739 and creator 1B Studio before playing. The official Discord is published in launch media; no official Trello or independent website was verified.',
    sections: [
      {
        heading: 'Current Roblox experience and creator',
        paragraphs: [
          'The live game is Anime Dungeons at Place ID 70863683083739. Roblox maps it to Universe ID 8718668434 and names 1B Studio as the Group creator. Match both the Place and creator because current search results still circulate an unavailable older game link.',
          'Use the creator Group page for the ownership check. This guide site never asks for a Roblox password, cookie, recovery code, or external installer.',
        ],
        links: [
          {
            label: 'Play Anime Dungeons on Roblox',
            href: officialGameFacts.robloxUrl,
          },
          {
            label: 'Open the 1B Studio Roblox Group',
            href: officialGameFacts.creatorGroupUrl,
          },
        ],
      },
      {
        heading: 'Official Discord',
        paragraphs: [
          'The release trailer displays the `anidg` Discord vanity and its description includes a current invite. Use Discord for announcements, update notes, code posts, and party finding, but keep account recovery and purchases inside Roblox-owned pages.',
          'Discord invites can rotate. If the vanity stops resolving, recheck the current Roblox game page or the release-trailer description rather than trusting a copied link on a script or download site.',
        ],
        links: [
          {
            label: 'Open the Anime Dungeons Discord',
            href: officialGameFacts.discordUrl,
          },
        ],
      },
      {
        heading: 'Trello status',
        paragraphs: [
          'No official Anime Dungeons Trello was verified through the current Roblox experience, 1B Studio surface, or official launch media during this check. Third-party wiki and link pages are useful research aids, but they are not developer-owned documentation.',
          'A future board should be labeled official only after 1B Studio or the official Discord links it directly. Until then, use the live game Index for current heroes, weapons, and armor.',
        ],
      },
      {
        heading: 'Avoid the old Place and unsafe shortcuts',
        paragraphs: [
          'Do not use Place ID 8862620807 for the current release. It now returns an unavailable record and belongs to an older creator/version boundary. Codes and data from that history are not automatically valid in the 1B Studio game.',
          'Reject scripts, executors, auto-farm downloads, modified Roblox clients, and sites that request login tokens. Anime Dungeons runs through the official Roblox client and needs no separate installer.',
        ],
        bullets: [
          'Current Place: 70863683083739',
          'Current creator: 1B Studio',
          'Current official Discord vanity: anidg',
          'Official Trello: not verified',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the official Anime Dungeons Roblox game?',
        answer:
          'Use Place ID 70863683083739, Universe ID 8718668434, published by 1B Studio.',
      },
      {
        question: 'What is the Anime Dungeons Discord?',
        answer:
          'Official launch media publishes the `anidg` Discord vanity. If it changes, recheck the current game or trailer description.',
      },
      {
        question: 'Does Anime Dungeons have an official Trello?',
        answer:
          'No verified official Trello was found during the July 24, 2026 launch check.',
      },
    ],
    relatedRoutes: [
      '/updates',
      '/codes',
      '/guides/beginner-guide',
      '/disclaimer',
    ],
  },
};

export function getTopic(slug: string) {
  return topics[slug];
}
