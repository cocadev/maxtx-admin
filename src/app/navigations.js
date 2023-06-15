export const navigations = [
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  // { label: 'PAGES', type: 'label' },
  {
    name: 'Admin',
    icon: 'security',
    children: [
      { name: 'Revenue', iconText: 'SI', path: '/revenue' },
      { name: 'Reward Tokens', iconText: '404', path: '/rewardTokens' },
      { name: 'Messages', iconText: '404', path: '/messages' },
      { name: 'Reports', iconText: '404', path: '/reports' },
    ],
  },
  // { label: 'Components', type: 'label' },
  {
    name: 'Components',
    icon: 'favorite',
    badge: { value: '30+', color: 'secondary' },
    children: [
      { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
      { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
      { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
      { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
      { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
      { name: 'Form', path: '/material/form', iconText: 'F' },
      { name: 'Icons', path: '/material/icons', iconText: 'I' },
      { name: 'Menu', path: '/material/menu', iconText: 'M' },
      { name: 'Progress', path: '/material/progress', iconText: 'P' },
      { name: 'Radio', path: '/material/radio', iconText: 'R' },
      { name: 'Switch', path: '/material/switch', iconText: 'S' },
      { name: 'Echarts', path: '/charts/echarts', iconText: 'E' },
      { name: 'Slider', path: '/material/slider', iconText: 'S' },
      { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
      { name: 'Table', path: '/material/table', iconText: 'T' },
    ],
  },
  // {
  //   name: 'Charts',
  //   icon: 'trending_up',
  //   children: [

  //   ],
  // },
  {
    name: 'Template Documentation',
    icon: 'launch',
    type: 'extLink',
    path: 'http://demos.ui-lib.com/matx-react-doc/',
  },
  {
    name: 'Metasalt',
    icon: 'launch',
    type: 'extLink',
    path: 'https://metasalt.io',
  },
];
