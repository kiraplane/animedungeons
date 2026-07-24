# Anime Dungeons Wiki 项目需求

基于当前项目的代码框架，开发 Anime Dungeons 的英文 Roblox 攻略站。正式页面类型必须由确认后的当前长尾需求、游戏机制和可靠资料决定，不能因为源模板存在就机械保留。

## 项目身份

- 游戏名称：Anime Dungeons
- 网站名称：Anime Dungeons Wiki
- 游戏平台：Roblox
- 项目目录名：animedungeons
- GitHub 仓库名：animedungeons
- Cloudflare Worker 项目名：animedungeons
- 正式域名：www.animedungeons.wiki
- Canonical URL：https://www.animedungeons.wiki
- 计划 PRD 文件：docs/anime-dungeons-wiki-prd-and-implementation-plan.md
- 目标数据目录：src/data/animedungeons/
- 目标路由组：src/app/[locale]/(animedungeons)/

## 官方身份

- Roblox 官方游戏页：https://www.roblox.com/games/70863683083739/Anime-Dungeons
- Roblox Place ID：70863683083739
- Roblox Universe ID：8718668434
- Roblox 创作者：1B Studio（已验证为 Group 类型）
- Roblox Creator Group ID：794813948
- Roblox 创作者页面：https://www.roblox.com/communities/794813948/1B-Studio
- 独立官方网站：not yet verified
- 官方状态快照：`[RELEASE 🎉] Anime Dungeons`，游戏说明同时标记为 Beta；Roblox 官方 API 于 2026-07-24 核验

身份边界：本项目只描述由 1B Studio 发布、Place ID 为 `70863683083739` 的当前 Roblox Experience “Anime Dungeons”。官方说明将其定义为 anime-inspired dungeon looter / action RPG，核心循环包括职业、多人地下城、Boss、武器、护甲、法术、英雄和稀有掉落。旧 Place ID `8862620807`、旧 Universe ID `3353228800` 当前在 Roblox 返回 `[TITLE UNAVAILABLE]` / content-restricted，且历史资料曾把它归于 Mystoic；后续研究只能把它当作旧实例线索，不能把旧代码、创作者、数据或页面事实带入当前 1B Studio 版本，也不能暗示本站获得 Roblox 或 1B Studio 的官方背书。

## 核心种子关键词

- anime dungeons
- anime dungeons wiki
- anime dungeons roblox
- anime dungeons guide
- anime dungeons codes
- anime dungeons classes
- anime dungeons class tier list
- anime dungeons weapons
- anime dungeons armor
- anime dungeons spells
- anime dungeons heroes
- anime dungeons raids
- anime dungeons dungeons
- anime dungeons beginner guide
- anime dungeons discord
- anime dungeons trello
- anime dungeons release
- anime dungeons updates

codes、classes、tier list、weapons、armor、spells、heroes、raids、dungeons、Discord、Trello、release、updates 等词当前只作为需求研究种子；必须在需求包确认后通过当前搜索需求、游戏机制与可靠资料核验，再标记 keep、ignore、watch 或 localize_later。实体名称必须以玩家实际搜索用词为准，不能直接沿用源模板的车辆、竞速或经济系统命名。

## 开发要求

1. 搜索并核验当前玩法、Beta / Release 状态、更新状态和长尾搜索需求，建立 keep / ignore / watch / localize_later 关键词矩阵，再决定页面、导航、实体命名和内容规模。
2. 以当前 Roblox 官方游戏页、Roblox 官方 API、1B Studio Group 页面和当前可靠攻略来源交叉核验事实。不得把源模板或旧 Anime Dungeons 实例的游戏名称、域名、Place/Universe ID、创作者、玩法、代码、素材、广告配置、路由或站点配置带入目标站点。
3. 网站视觉应参考当前 Anime Dungeons Roblox 图标、缩略图和 anime dungeon-looter 氛围，不沿用源模板的视觉、配色或素材。
4. 根据真实需求判断是否建设 guides、codes、classes、weapons、armor、spells、heroes、raids、dungeons、release、updates、Discord、Trello 或其他页面。没有可靠数据支持的页面不要伪造；可以使用高质量 YouTube 视频作为研究来源，写成独立、面向玩家决策的英文攻略，不能机械转录或改写视频。
5. 对 codes 页面执行双重核验：先确认搜索需求与当前游戏内兑换机制，再核验当前有效代码。不得从旧 Anime Dungeons 实例、Anime Dungeon Fighters、Anime Final Quest 或其他相似 Roblox 游戏导入代码；如果存在搜索需求但没有可靠有效代码，应建设清晰的 code-watch 页面。
6. 首页与导航应作为信息密集的 SEO hub，覆盖经核验的高价值次级关键词，并提供桌面端 sticky wiki sidebar 与移动端可展开 wiki menu。
7. 开发完成并验证后，在 GitHub 创建 `animedungeons` 仓库并推送项目。
8. 在 Cloudflare Workers 创建 `animedungeons` 项目，绑定 `animedungeons.wiki` 与 `www.animedungeons.wiki`，以 `www` 为 canonical，并在权限允许时配置 GitHub 自动构建。
9. 在 GA4 创建或复用与正式域名对应的媒体资源和 Web 数据流，授权方式与站点注册信息从 `/Users/he/Documents/AI/vibe coding/GA-GTM` 获取并同步。
10. 使用根 Domain Property `sc-domain:animedungeons.wiki` 完成 GSC 所有权验证，并提交完整 canonical sitemap URL。
11. 本地验证与上线步骤完成后，按 wiki-site-builder 规范将站点幂等注册到 Shipmanager；第二个核心链接必须从实际实现且需求最强的 hub 中选择，不能预设为 codes 或其他模板栏目。
