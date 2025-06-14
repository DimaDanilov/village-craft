import WoodImageSrc from '@assets/resources/Wood.png';
import StoneImageSrc from '@assets/resources/Stone.png';
import SandImageSrc from '@assets/resources/Sand.png';
import CoinsImageSrc from '@assets/resources/Coins.png';

import type { ResourceInfos } from '../types';

export const RESOURCE_INFOS: ResourceInfos = {
  wood: {
    title: 'resources.wood.title',
    imageSrc: WoodImageSrc,
    instrumentMining: 'axe',
    cost: 2,
  },
  stone: {
    title: 'resources.stone.title',
    imageSrc: StoneImageSrc,
    instrumentMining: 'pickaxe',
    cost: 3,
  },
  sand: {
    title: 'resources.sand.title',
    imageSrc: SandImageSrc,
    instrumentMining: 'shovel',
    cost: 1,
  },
  coins: {
    title: 'resources.coins.title',
    imageSrc: CoinsImageSrc,
    cost: 1,
  },
};
