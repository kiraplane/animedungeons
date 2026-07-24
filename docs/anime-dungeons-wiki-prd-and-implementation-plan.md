# Anime Dungeons Wiki — PRD and Implementation Plan

## 1. Product Definition

- Product: English Roblox guide and wiki hub for the current 1B Studio release of **Anime Dungeons**
- Canonical domain: `https://www.animedungeons.wiki`
- Project / GitHub / Cloudflare name: `animedungeons`
- Platform: Roblox
- Official experience: `https://www.roblox.com/games/70863683083739/Anime-Dungeons`
- Place ID: `70863683083739`
- Universe ID: `8718668434`
- Creator: 1B Studio, Group ID `794813948`
- Official community: `https://discord.gg/amWafD7ZJ6`
- Independent official website: not verified
- Research date: 2026-07-24

### Identity boundary

The live 1B Studio experience is the only target. Place ID `8862620807` and
Universe ID `3353228800` now return unavailable or content-restricted responses
from Roblox. Several current third-party articles still link to that old place
and mix its Mystoic-era history with the new release. Old creator claims, code
lists, visits, screenshots, and mechanics must not be imported as current
facts.

## 2. Current Product Snapshot

Roblox classifies the current experience as an RPG / Action RPG. Its official
description positions the game as a beta-stage anime dungeon looter with:

- solo and group dungeons
- classes and class upgrades
- weapons, armor, and spells
- summonable heroes
- bosses and rare loot
- up to 10 players per server

The official release trailer confirms a class-selection interface, item
reforging, separate Heroes / Weapons / Armor index tabs, and four launch
dungeon names: Demon Train, Frozen Forest, Sand Village, and The Crimson
Sanctum. These are stable enough for system guides; exact drop rates, complete
item databases, and balance rankings are not.

## 3. Keyword Matrix

| Keyword | Intent | Planned route | Priority | Status | Evidence and decision |
|---|---|---:|---:|---|---|
| anime dungeons | Head term | `/` | P0 | keep | Exact Google suggestion and current Roblox title |
| anime dungeons wiki | Organized reference | `/` | P0 | keep | Exact Google suggestion; BloxInformer competitor ranks a wiki page |
| anime dungeons roblox | Find correct game | `/official-links` | P0 | keep | Exact Google suggestion; old and new Place IDs are confused in results |
| anime dungeons codes | Redeem rewards | `/codes` | P0 | keep | Exact Google suggestion and multiple fresh code pages |
| anime dungeons discord | Community link | `/official-links` | P0 | keep | Exact Google suggestion; official trailer publishes an invite |
| anime dungeons tier list | Best choices | `/classes` | P1 | watch | Exact Google suggestion, but current comparable balance data is too thin for a ranking |
| anime dungeons guide | General help | `/guides` | P0 | keep | Game is a new system-heavy dungeon RPG |
| anime dungeons beginner guide | First-session path | `/guides/beginner-guide` | P0 | keep | Current YouTube gameplay and repeated competitor questions |
| anime dungeons classes | Class system | `/classes` | P0 | keep | Official trailer UI plus current competitor coverage |
| anime dungeons best class | Starting choice | `/guides/choose-first-class` | P0 | keep | Three starters and three unlock classes are visible/reported; avoid unsupported full ranking |
| anime dungeons dungeons | Progression stages | `/dungeons` | P0 | keep | Official trailer names four launch dungeons |
| anime dungeons raids | Group dungeon intent | `/dungeons` | P1 | keep | Competitors use “raids”; merge with dungeons until the game distinguishes them publicly |
| anime dungeons weapons | Loot decisions | `/weapons-and-armor` | P0 | keep | Official description and trailer index |
| anime dungeons armor | Loot decisions | `/weapons-and-armor` | P1 | keep | Same intent cluster as weapons; combine to avoid thin pages |
| anime dungeons spells | Ability choices | `/spells` | P1 | keep | Official description and trailer combat |
| anime dungeons heroes | Companion system | `/heroes` | P1 | keep | Official description and trailer index |
| anime dungeons trello | Reference link | `/official-links` | P1 | keep | Current search coverage; no verified official Trello |
| anime dungeons release | Release / beta status | `/updates` | P1 | keep | Official title says release while description says beta |
| anime dungeons updates | Freshness | `/updates` | P1 | keep | Live-service beta and current search coverage |
| anime dungeons class tier list | Ranking | `/classes` | P1 | watch | No reliable same-version tests across all six classes |
| anime dungeons weapon tier list | Ranking | `/weapons-and-armor` | P2 | watch | No complete current item stats or same-version test set |
| anime dungeons scripts / autofarm | Unsafe shortcut | none | P3 | ignore | Unsafe and unsupported; add a short safety warning only |
| anime dungeon fighters | Different game | none | P3 | ignore | Separate Roblox title with its own codes and systems |
| old Anime Dungeons / Mystoic | Historical instance | none | P3 | ignore | Current Roblox API marks the old universe unavailable |

English is P0. Localization is deferred until English pages collect GSC query
evidence; no translated pages will be created to inflate the sitemap.

## 4. Competitor Benchmark

### BloxInformer Anime Dungeons Wiki

- Sitemap footprint for this game: 2 URLs (`/wikis/anime-dungeons/` and
  `/wikis/anime-dungeons/codes/`)
- Strengths: exact-match H1/title, FAQ schema, a compact mechanics overview,
  class and dungeon names, visible controls
- Weaknesses: only one content category, no real progression articles, stale
  pre-release wording, and no player decision paths
- Critical gap: its official-link ecosystem has reused the unavailable old
  Place ID in adjacent current articles
- Improvement: separate verified identity from gameplay data, add category
  hubs, make every system page route to the next player decision, and keep
  volatile numbers out until verified

### Pro Game Guides link hub

- Footprint: one long article
- Strengths: covers Discord, Trello status, classes, raids, heroes, weapons,
  armor, spells, and common player questions
- Weaknesses: no structured route network, repeated generic advice, and mixed
  creator references in the Discord section
- Improvement: make official-link verification a dedicated page and connect it
  to concrete system and beginner guides

### AllThings.How codes page

- Footprint: one focused codes article
- Strengths: exact code intent, direct redemption flow, fresh update label
- Weaknesses: links its Play button to the unavailable old Place ID and treats
  one reported Early Access code as settled despite conflicting current reports
- Improvement: label third-party code claims as reported, keep the official
  experience identity visible, and give failure diagnostics without inventing
  reward certainty

### Page breadth recommendation

Anime Dungeons is system-heavy but only days into its current release. Launch
with **15 player-facing English core pages**, including five substantive guide
articles, seven system/status hubs, and the homepage/codes/guides hubs. Legal
pages do not count toward the breadth target. Expand item or dungeon detail
pages only when current data and GSC demand justify them.

## 5. Launch Route Map

### Hubs and status pages

1. `/` — Anime Dungeons Wiki homepage hub
2. `/guides` — complete guide index
3. `/codes` — reported-code status and safe redemption checks
4. `/classes` — class roles, starters, unlock boundary, no fabricated tier list
5. `/dungeons` — launch dungeon order and readiness checklist
6. `/heroes` — companion/passive decision guide
7. `/weapons-and-armor` — equip, compare, reforge, and keep/sell logic
8. `/spells` — spell-slot and combat-role guide
9. `/official-links` — current Roblox, 1B Studio, Discord, and Trello status
10. `/updates` — release-versus-beta status and freshness rules

### Guide articles

11. `/guides/beginner-guide`
12. `/guides/choose-first-class`
13. `/guides/first-dungeon-route`
14. `/guides/loot-upgrade-checklist`
15. `/guides/solo-vs-party`

### Trust and legal

- `/disclaimer`
- `/privacy`
- `/terms`
- `/cookie`

## 6. Content and Source Plan

### Primary sources

- Roblox Games API for current identity, creator, genre, dates, player count,
  and canonical path
- Roblox thumbnail APIs for the current icon and official experience thumbnail
- 1B Studio group API/page for ownership
- official release trailer by beastii, published 2026-07-10

### Selected YouTube sources

| Video | Strategy | Use |
|---|---|---|
| `MN97_9QhIfQ` — Anime Dungeons RELEASE TRAILER, beastii | official | Homepage trust video; classes, dungeons, index, reforging, systems |
| `BM2w11Wx2Kk` — NEW ANIME DUNGEONS GAME IS INSANE, Blam Spot | popular_youtube | Current-release interface and beginner/dungeon cross-check |

Rejected as article sources:

- Anime Dungeon Fighters videos: different game
- February 2026 “best dungeon game” result: different game (`huntrs`)
- March 2025 Anime Dungeons video: old instance/version boundary
- auto-farm/script showcase: unsafe and not suitable for the site
- low-view code videos: insufficient evidence for official active status

Guides must present direct player advice. Video attribution belongs in metadata,
the embed caption, and PRD—not transcript-style body narration.

## 7. UX and Visual Direction

- Palette: near-black navy, electric cyan, vivid violet, restrained magenta,
  warm gold only for status warnings
- Brand asset: current Roblox icon without decorative rings
- Hero: compact two-column layout, official experience thumbnail behind the
  copy, official trailer frame on the right, next content band visible
- Desktop: 276px sticky grouped wiki sidebar, collapsed by default except the
  active group, count badges, active-page highlight
- Mobile: expandable wiki menu above page content
- Cards: compact navigation-first panels with short labels and wrapping-safe
  summaries
- Long links: `min-w-0`, `whitespace-normal`, `h-auto`, `text-left`,
  `break-words`

## 8. SEO and Schema

- Homepage: `WebSite`, `Organization`, `VideoGame`, `VideoObject`
- Guides hub and system hubs: `ItemList`
- Guide details: `Article`, `BreadcrumbList`, and `VideoObject` when selected
- Every page: exact-intent H1, concise metadata, canonical, Open Graph, and
  English hreflang through the existing metadata system
- Sitemap: only implemented, useful pages; daily frequency for homepage, codes,
  and updates
- Homepage description target: under 160 characters and specific to classes,
  dungeon clears, loot, heroes, and current code status

## 9. Migration and Safety Checklist

- Delete the copied `src/app/[locale]/(trlegacy)` route group
- Delete `src/data/trlegacy`, `src/components/trlegacy`, and old public assets
- Remove every Adsterra route, component, config, placement, and
  `ADSTERRA_*` declaration
- Replace old domain, game, IDs, creator, email, GA ID, manifest, middleware,
  sitemap, metadata, mail URLs, README, and messages
- Remove old PRD and competitor notes that belong only to the template
- Verify no TR Legacy, The Ride, bike/racing copy, old codes, or old analytics
  IDs remain in tracked public/config surfaces
- Keep `keep_vars: true`; do not add disabled ad variables

## 10. Validation and Launch

1. Install dependencies
2. Run `pnpm lint`
3. Run `pnpm exec tsc --noEmit`
4. Run `pnpm next:build`
5. Run `pnpm build`
6. Inspect desktop and mobile homepage, a system hub, codes, a guide with video,
   a guide with long related links, robots, sitemap, and manifest
7. Secret-scan the tracked tree
8. Create and push `animedungeons` on GitHub
9. Deploy Cloudflare Worker and bind apex + `www`
10. Connect Cloudflare GitHub automatic builds when authorization allows
11. Create/reuse GA4, add one measurement ID, and verify the production tag
12. Create `sc-domain:animedungeons.wiki`, verify by Cloudflare DNS TXT, submit
    `https://www.animedungeons.wiki/sitemap.xml`, and update GA-GTM registries
13. Register the site in Shipmanager with exactly two active core links

