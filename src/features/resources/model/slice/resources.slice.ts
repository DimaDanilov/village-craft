import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {
  CoinsStorage,
  HardwoodPile,
  IronOreStack,
  ResourceName,
  ResourceNameToSell,
  SandPile,
  StonePile,
  WoodPile,
} from '../types';
import { selectAllResources, selectResourceCount, selectResourcesError } from '../selectors';
import { isSellAvailable } from '../tools';
import type { InstrumentCost } from '@features/instruments/model';
import i18next from '@features/i18next/model/i18next.config';
import { RESOURCE_INFOS } from '../constants';

export interface ResourceState {
  wood: WoodPile;
  hardwood: HardwoodPile;
  stone: StonePile;
  ironOre: IronOreStack;
  sand: SandPile;
  coins: CoinsStorage;
}

export interface ResourcesState {
  resources: ResourceState;
  error?: string;
}

const initialState: ResourcesState = {
  resources: {
    wood: {
      count: 0,
    },
    hardwood: {
      count: 0,
    },
    stone: {
      count: 0,
    },
    ironOre: {
      count: 0,
    },
    sand: {
      count: 0,
    },
    coins: {
      count: 3,
    },
  },
  error: undefined,
};

export const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  selectors: {
    selectAllResources,
    selectResourceCount,
    selectResourcesError,
  },
  reducers: {
    _mineResources: (state, action: PayloadAction<{ resourceName: ResourceName; count: number }>) => {
      const { resourceName, count } = action.payload;
      state.resources[resourceName].count += count;
    },
    _destroyResourcesForUpgrade: (state, action: PayloadAction<{ resourcesToDestroy: InstrumentCost }>) => {
      const { resourcesToDestroy } = action.payload;
      Object.entries(resourcesToDestroy).forEach(([resourceKey, resourceAmountToDestroy]) => {
        const typedKey = resourceKey as keyof ResourceState;
        state.resources[typedKey].count -= resourceAmountToDestroy;
      });
    },
    sellResources: (state, action: PayloadAction<{ resourceName: ResourceNameToSell; resourcesCount: number }>) => {
      const { resourceName, resourcesCount } = action.payload;
      const isSellResourcesAvailable = isSellAvailable({
        currentResourcesAmount: state.resources[resourceName].count,
        amountToSell: resourcesCount,
      });
      if (!isSellResourcesAvailable) {
        const { t } = i18next;
        const translatedResourceName = t(`${RESOURCE_INFOS[resourceName].title}`, { ns: 'Resources' });
        state.error = t(`errors.notEnoughResources`, {
          ns: 'Resources',
          resourceName: translatedResourceName,
        });
        return;
      }
      state.resources[resourceName].count -= resourcesCount;
      state.resources.coins.count += resourcesCount * RESOURCE_INFOS[resourceName].cost;
      state.error = undefined;
    },
    clearResourcesError: (state) => {
      state.error = undefined;
    },
  },
});

export const { sellResources, clearResourcesError } = resourcesSlice.actions;
