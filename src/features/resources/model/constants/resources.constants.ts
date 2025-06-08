import WoodImageSrc from '@assets/resources/Wood.png';
import StoneImageSrc from '@assets/resources/Stone.png';
import CoinsImageSrc from '@assets/resources/Coins.png';

import type { ResourceInfos } from '../types';

export const WOOD_TRADE_MULTIPLIER: number = 1;
export const STONE_TRADE_MULTIPLIER: number = 1;

export const RESOURCE_INFOS: ResourceInfos = {
  wood: {
    imageSrc: WoodImageSrc,
    instrumentMining: 'axe',
  },
  stone: {
    imageSrc: StoneImageSrc,
    instrumentMining: 'pickaxe',
  },
  coins: {
    imageSrc: CoinsImageSrc,
  },
};
