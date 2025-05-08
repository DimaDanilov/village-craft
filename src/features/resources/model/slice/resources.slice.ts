import { createSlice } from "@reduxjs/toolkit";
import type { StonePile, WoodPile } from "../types/resources.types";
import {
  selectStoneCount,
  selectWoodCount,
} from "../selectors/resources.selectors";

export interface ResourcesState {
  wood: WoodPile;
  stone: StonePile;
}

const initialState: ResourcesState = {
  wood: {
    count: 0,
  },
  stone: {
    count: 0,
  },
};

export const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  selectors: {
    selectWoodCount,
    selectStoneCount,
  },
  reducers: {
    chopWood: (state) => {
      state.wood.count += 1;
    },
    mineStone: (state) => {
      state.stone.count += 1;
    },
  },
});
