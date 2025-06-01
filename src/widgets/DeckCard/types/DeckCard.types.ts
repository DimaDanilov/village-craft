export type DeckCardCategory = 'resource' | 'service';

export interface DeckCardPalette {
  bgColorClassName: string;
  textColorClassName: string;
  iconStrokeColorClassName: string;
  borderColorClassName: string;
  fillColorClassName: string;
}

export interface DeckCardInfo {
  imageSrc: string;
  title: string;
  description: string;
}

export interface DeckCardInfos {
  forest: DeckCardInfo;
  mines: DeckCardInfo;
  forge: DeckCardInfo;
  market: DeckCardInfo;
  gateToTheFuture: DeckCardInfo;
}
