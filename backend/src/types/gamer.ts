export type GamerUpdateFields = {
    gamerTag?: string;
    name?: string;
};


export type GamerWithGames = {
    id: number;
    gamerTag: string;
    name: string;
    games: {externalCode: number}[]
};
