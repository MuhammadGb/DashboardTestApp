// ----------------------------------------------------------------------

const getIcon = (name) => <img src={name} alt="img" />;

export const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('/static/icons/menuIcon.svg')
  },
  {
    title: 'Plans',
    path: '/dashboard/user',
    icon: getIcon('/static/icons/documentIcon.svg')
  },
  {
    title: 'Purse',
    path: '/dashboard/products',
    icon: getIcon('/static/icons/bagIcon.svg')
  },
  {
    title: 'Transactions',
    path: '/dashboard/blog',
    icon: getIcon('/static/icons/transactionIcon.svg')
  },
  {
    title: 'Banks & Cards',
    path: '/dashboard/login',
    icon: getIcon('/static/icons/atmIcon.svg')
  },
  {
    title: 'Girl Code',
    path: '/dashboard/register',
    icon: getIcon('/static/icons/friendsIcon.svg')
  },
  {
    title: 'Profile',
    path: '/dashboard/profile',
    icon: getIcon('/static/icons/profileIcon.svg'),
    alertNo: 8
  },
  {
    title: 'Portfolio',
    path: '/dashboard/portfolio',
    icon: getIcon('/static/icons/portfolioIcon.svg')
  },
  {
    title: 'About HerVest',
    path: '/dashboard/hervest',
    icon: getIcon('/static/icons/aboutIcon.svg')
  },
  {
    title: 'Support',
    path: '/dashboard/support',
    icon: getIcon('/static/icons/supportIcon.svg'),
    alertNo: 8
  },
  {
    title: 'Logout',
    path: '/dashboard/logout',
    icon: getIcon('/static/icons/logoutIcon.svg')
  }
];

export const sidebarBottom = [];
