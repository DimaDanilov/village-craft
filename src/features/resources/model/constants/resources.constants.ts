import WoodImageSrc from '@assets/resources/Wood.png';
import StoneImageSrc from '@assets/resources/Stone.png';
import SandImageSrc from '@assets/resources/Sand.png';
import CoinsImageSrc from '@assets/resources/Coins.png';

import type { ResourceInfos } from '../types';

export const WOOD_TRADE_MULTIPLIER: number = 1;
export const STONE_TRADE_MULTIPLIER: number = 1;
export const SAND_TRADE_MULTIPLIER: number = 1;

export const RESOURCE_INFOS: ResourceInfos = {
  wood: {
    title: 'resources.wood.title',
    imageSrc: WoodImageSrc,
    instrumentMining: 'axe',
  },
  stone: {
    title: 'resources.stone.title',
    imageSrc: StoneImageSrc,
    instrumentMining: 'pickaxe',
  },
  sand: {
    title: 'resources.sand.title',
    imageSrc: SandImageSrc,
    instrumentMining: 'shovel',
  },
  coins: {
    title: 'resources.coins.title',
    imageSrc: CoinsImageSrc,
  },
};
