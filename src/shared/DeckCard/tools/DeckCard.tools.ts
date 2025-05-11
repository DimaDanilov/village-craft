import { DECK_CARD_RESOURCE_PALETTE, DECK_CARD_SERVICE_PALETTE } from '../constants';
import type { DeckCardCategory, DeckCardPalette } from '../types';

interface SelectCardPaletteParams {
  cardCategory: DeckCardCategory;
}

export function selectCardPalette({ cardCategory }: SelectCardPaletteParams): DeckCardPalette {
  if (cardCategory === 'resource') return DECK_CARD_RESOURCE_PALETTE;
  else return DECK_CARD_SERVICE_PALETTE;
}
