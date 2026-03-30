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

const Order: NavbarItem = {
  label: 'Order',
  position: 'left',
  to: '/Order',
};

const Player: NavbarItem = {
  label: 'Player',
  position: 'left',
  items: [
    { label: '자원', to: '/Player/Resource' },
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
    { label: 'Orders.dat', to: '/Game/Orders.dat' },
    { label: 'Upgrades.dat', to: '/Game/Upgrades.dat' },
    { label: 'Tech.dat', to: '/Game/Tech.dat' },
    { label: 'Weapons.dat', to: '/Game/Weapons.dat' },
    { label: 'Units.dat', to: '/Game/Units.dat' },
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

const Combat: NavbarItem = {
  label: 'Combat',
  position: 'left',
  items: [
    { label: '투사체', to: '/Combat/Proj' },
    { label: '데미지', to: '/Combat/Damage' },
    { label: '효과', to: '/Combat/Effect' },
    { label: '충돌', to: '/Combat/Collision' },
    { label: 'State', to: '/Combat/State' },
  ],
};

const Engine: NavbarItem = {
  label: 'Engine',
  position: 'left',
  items: [
    { label: '메모리', to: '/Engine/Memory' },
    { label: '구조체', to: '/Engine/Struct' },
    { label: '포인터', to: '/Engine/Pointer' },
    { label: 'Unknown', to: '/Engine/Unknown' },
    { label: 'Debug', to: '/Engine/Debug' },
  ],
};

export const navigation: Navbar = {
  title: 'ZC-R',
  hideOnScroll: true,
  items: [
    { label: '오프셋', position: 'left', to: '/offset' },
    CUnit,
    Order,
    Player,
    Game,
    Client,
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
