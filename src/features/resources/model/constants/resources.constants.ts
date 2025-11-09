import WoodImageSrc from '@assets/resources/Wood.png';
import HardwoodImageSrc from '@assets/resources/Hardwood.png';
import StoneImageSrc from '@assets/resources/Stone.png';
import IronOreImageSrc from '@assets/resources/Iron_Ore.png';
import SandImageSrc from '@assets/resources/Sand.png';
import CoinsImageSrc from '@assets/resources/Coins.png';

import type {
  HardwoodMinedEfficiencyRecord,
  IronOreMinedEfficiencyRecord,
  ResourceInfos,
  SandMinedEfficiencyRecord,
  StoneMinedEfficiencyRecord,
  WoodMinedEfficiencyRecord,
} from '../types';

const WOOD_MINED_EFFICIENCY: WoodMinedEfficiencyRecord = {
  '1': 1,
  '2': 5,
  '3': 10,
  '4': 16,
  '5': 40,
};

const HARDWOOD_MINED_EFFICIENCY: HardwoodMinedEfficiencyRecord = {
  '1': 1,
  '2': 4,
  '3': 8,
  '4': 14,
  '5': 34,
};

const STONE_MINED_EFFICIENCY: StoneMinedEfficiencyRecord = {
  '1': 1,
  '2': 3,
  '3': 8,
  '4': 14,
  '5': 30,
};

const IRON_ORE_MINED_EFFICIENCY: IronOreMinedEfficiencyRecord = {
  '1': 1,
  '2': 2,
  '3': 4,
  '4': 7,
  '5': 12,
};

const SAND_MINED_EFFICIENCY: SandMinedEfficiencyRecord = {
  '1': 1,
  '2': 12,
  '3': 18,
  '4': 30,
  '5': 90,
};

export const RESOURCE_INFOS: ResourceInfos = {
  wood: {
    title: 'resources.wood.title',
    imageSrc: WoodImageSrc,
    instrumentMining: 'axe',
    resourceMinedByInstrumentLevel: WOOD_MINED_EFFICIENCY,
    cost: 2,
  },
  hardwood: {
    title: 'resources.hardwood.title',
    imageSrc: HardwoodImageSrc,
    instrumentMining: 'axe',
    resourceMinedByInstrumentLevel: HARDWOOD_MINED_EFFICIENCY,
    cost: 2,
  },
  stone: {
    title: 'resources.stone.title',
    imageSrc: StoneImageSrc,
    instrumentMining: 'pickaxe',
    resourceMinedByInstrumentLevel: STONE_MINED_EFFICIENCY,
    cost: 3,
  },
  ironOre: {
    title: 'resources.ironOre.title',
    imageSrc: IronOreImageSrc,
    instrumentMining: 'pickaxe',
    resourceMinedByInstrumentLevel: IRON_ORE_MINED_EFFICIENCY,
    cost: 5,
  },
  sand: {
    title: 'resources.sand.title',
    imageSrc: SandImageSrc,
    instrumentMining: 'shovel',
    resourceMinedByInstrumentLevel: SAND_MINED_EFFICIENCY,
    cost: 1,
  },
  coins: {
    title: 'resources.coins.title',
    imageSrc: CoinsImageSrc,
    cost: 1,
  },
};
