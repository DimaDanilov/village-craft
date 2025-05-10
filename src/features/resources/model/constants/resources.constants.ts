import type { ResourcesState } from '../slice';
import WoodImageSrc from '@assets/resources/Wood.png';
import StoneImageSrc from '@assets/resources/Stone.png';
import CoinsImageSrc from '@assets/resources/Coins.png';

export const WOOD_SELL_AMOUNT: number = 1;
export const STONE_SELL_AMOUNT: number = 1;

export const COINT_RECEIVED: number = 1;

export const RESOURCES_IMAGES: Record<keyof ResourcesState['resources'], string> = {
  wood: WoodImageSrc,
  stone: StoneImageSrc,
  coins: CoinsImageSrc,
};
