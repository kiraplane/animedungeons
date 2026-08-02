export const routeLabels: Record<string, string> = {
  '/': 'Wiki Home',
  '/codes': 'Codes & Status',
  '/classes': 'Classes',
  '/dungeons': 'Dungeons',
  '/heroes': 'Heroes',
  '/weapons-and-armor': 'Weapons & Armor',
  '/spells': 'Spells',
  '/guides': 'All Guides',
  '/guides/beginner-guide': 'Beginner Route',
  '/guides/choose-first-class': 'Choose a First Class',
  '/guides/first-dungeon-route': 'First Dungeon Route',
  '/guides/loot-upgrade-checklist': 'Loot Upgrade Checklist',
  '/guides/solo-vs-party': 'Solo vs Party',
  '/official-links': 'Official Links',
  '/discord': 'Discord',
  '/updates': 'Release & Updates',
  '/disclaimer': 'Disclaimer',
  '/privacy': 'Privacy',
  '/terms': 'Terms',
  '/cookie': 'Cookie Policy',
};

export function getRouteLabel(route: string) {
  return (
    routeLabels[route] ?? route.replaceAll('-', ' ').replaceAll('/', ' ').trim()
  );
}
