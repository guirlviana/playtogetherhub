export type Game = {
  name: string;
  readonly externalCode: number;
  platforms: string[];
};

export type GameModel = {
  id?: number;
  externalCode: number;
  gamerId: number;
};
