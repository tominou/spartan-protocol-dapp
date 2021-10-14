// import Home from './views/pages/Home/Overview'
// import Liquidity from './views/pages/Pools/Overview'
// import Swap from './views/pages/Swap/Swap'
// import Synths from './views/pages/Synths/Overview'
// import Bond from './views/pages/Bond/Bond'
// import Vault from './views/pages/Vault/Overview'
// import Dao from './views/pages/Dao/Overview'
// import Upgrade from './views/pages/Upgrade/Overview'
// import Donate from './views/pages/Donate/Overview'
// import PU from './views/pages/PU/Overview'

export const routes = [
  {
    path: '/home',
    name: 'overview',
    icon: 'home',
    // component: Home,
    layout: ''
  },
  {
    path: '/pools',
    name: 'pools',
    icon: 'home',
    // component: Home,
    layout: ''
  },
  {
    path: '/liquidity',
    name: 'liquidity',
    icon: 'sword',
    // component: Liquidity,
    layout: ''
  },
  {
    path: '/swap',
    name: 'swap',
    icon: 'swords',
    // component: Swap,
    layout: ''
  },
  {
    path: '/synths',
    name: 'synths',
    icon: 'synth',
    // component: Synths,
    layout: ''
  },
  {
    path: '/bond',
    name: 'bond',
    icon: 'helmet',
    // component: Bond,
    layout: ''
  },
  {
    path: '/vault',
    name: 'vault',
    icon: 'vault',
    // component: Vault,
    layout: ''
  },
  {
    path: '/dao',
    name: 'dao',
    icon: 'colosseum',
    // component: Dao,
    layout: ''
  },
  {
    path: '/upgrade',
    name: 'upgrade',
    icon: 'upgrade',
    // component: Upgrade,
    layout: ''
  },
  {
    path: '/donate',
    name: 'donate',
    icon: 'list',
    // component: Donate,
    layout: ''
  },
  {
    path: '/PU',
    name: 'PowerUser',
    icon: '',
    // component: PU,
    layout: '',
    hide: true
  }
]
