import type { Navbar, NavbarItem } from '@docusaurus/theme-common';

const CUnit: NavbarItem = {
  label: 'CUnit',
  position: 'left',
  items: [
    { label: 'Core', to: '/CUnit/Core' },
    { label: 'State', to: '/CUnit/State' },
    { label: '이동', to: '/CUnit/Move' },
    { label: '전투', to: '/CUnit/Combat' },
    { label: '상호작용', to: '/CUnit/Interaction' },
    { label: 'Union', to: '/CUnit/Union' },
  ],
};

const Player: NavbarItem = {
  label: 'Player',
  position: 'left',
  items: [
    { label: '자원', to: '/Player/Res' },
    { label: '업그레이드', to: '/Player/Upgrade' },
    { label: '시야', to: '/Player/Vision' },
    { label: 'State', to: '/Player/State' },
    { label: 'Metadata', to: '/Player/Metadata' },
  ],
};

const Game: NavbarItem = {
  label: 'Game',
  position: 'left',
  items: [
    { label: 'Game', to: '/Game/Game' },
    { label: 'Engine', to: '/Game/Engine' },
    { label: 'ReplayHeader', to: '/Game/ReplayHeader' },
  ],
};

const Data: NavbarItem = {
  label: 'Data',
  position: 'left',
  items: [
    { label: 'Orders.dat', to: '/Data/Orders.dat' },
    { label: 'Upgrades.dat', to: '/Data/Upgrades.dat' },
    { label: 'Tech.dat', to: '/Data/Tech.dat' },
    { label: 'Weapons.dat', to: '/Data/Weapons.dat' },
    { label: 'Units.dat', to: '/Data/Units.dat' },
  ],
};

const Client: NavbarItem = {
  label: 'Client',
  position: 'left',
  items: [
    { label: 'Render', to: '/Client/Render' },
    { label: 'Input', to: '/Client/Input' },
    { label: 'UI', to: '/Client/UI' },
    { label: 'Selection', to: '/Client/Selection' },
    { label: 'Camera', to: '/Client/Camera' },
  ],
};

export const navigation: Navbar = {
  title: 'ZC-R',
  hideOnScroll: true,
  items: [
    { label: '오프셋', position: 'left', to: '/offset' },
    CUnit,
    Player,
    Data,
    Client,
    Game,
    { label: 'Blog', position: 'left', to: '/blog' },
    {
      position: 'right',
      to: 'https://github.com/ZC-R/zc-r.github.io',
      className: 'header-github-link',
    },
    {
      label: '🍀',
      position: 'right',
      to: 'https://cafe.naver.com/edac',
    },
  ],
};
