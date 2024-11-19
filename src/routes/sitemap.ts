import paths from './paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  icon?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Início',
    path: '/',
    icon: 'hugeicons:grid-view',
    active: true,
  },
  {
    id: 'task',
    subheader: 'Análise',
    path: '#!',
    icon: 'hugeicons:book-open-01',
  },
  {
    id: 'settings',
    subheader: 'Settings',
    path: '#!',
    icon: 'hugeicons:settings-01',
  },
  {
    id: 'authentication',
    subheader: 'Authentication',
    icon: 'mynaui:lock-password',
    active: true,
    items: [
      {
        name: 'Sign In',
        pathName: 'signin',
        icon: '',
        path: paths.signin,
      },
    ],
  },
];

export default sitemap;
