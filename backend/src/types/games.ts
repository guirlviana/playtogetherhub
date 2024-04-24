export type Game = {
  name: string;
  readonly externalCode: number;
};

export type GameModel = {
  id?: number;
  externalCode: number;
  gamerId: number;
};
