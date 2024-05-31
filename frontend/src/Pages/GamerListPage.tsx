import { ReactNode, useEffect, useState } from "react";
import Header from "../Components/Header";
import Page from "../Components/Page";
import { createOrUpdateGames, getGamerList, searchGames } from "../http/Games";

const gamerIdMocked = 17;

type Game = {
  externalCode: number;
};

function GamerListPage() {
  const [gamerList, setGamerlist] = useState<Game[]>([]);
  const [gamesGallery, setGamesGallery] = useState<Game[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fillGamesLists = async () => {
      let gamerList: Game[] = [];
      await getGamerList(gamerIdMocked, token).then(({ data }) => {
        gamerList = data.data;
        setGamerlist(gamerList);
      });

      await searchGames().then(({ data }) => {
        const availableGames: Game[] = data.data;
        const externalCodesInGamerList = gamerList.map(
          (game) => game.externalCode
        );

        setGamesGallery(
          availableGames.filter(
            (game) => !externalCodesInGamerList.includes(game.externalCode)
          )
        );
      });
    };

    fillGamesLists();
  }, []);

  const appendGameToGamesGallery = (externalCode: number) => {
    if (gamerList.length === 1) {
      return;
    }
    setGamerlist((prevState) =>
      prevState.filter((game) => game.externalCode !== externalCode)
    );
    setGamesGallery((prevState) => [...prevState, { externalCode }]);
  };

  const appendGameToGamerList = (externalCode: number) => {
    if (gamerList.length === 6) {
      return;
    }

    setGamesGallery((prevState) =>
      prevState.filter((game) => game.externalCode !== externalCode)
    );
    setGamerlist((prevState) => [...prevState, { externalCode }]);
  };

  const saveGamerList = () => {
    createOrUpdateGames(gamerIdMocked, gamerList, token).then(() =>
      alert("Saved")
    );
  };

  return (
    <>
      <Header />
      <Page>
        <div className="flex flex-col gap-10">
          <List
            title="My Games"
            games={gamerList}
            onClick={(externalCode) => appendGameToGamesGallery(externalCode)}
            rightContent={
              <button onClick={() => saveGamerList()}>
                <p className="text-1xl text-gray-400 self-end">Save</p>
              </button>
            }
          />
          <List
            title="Library"
            customStyle="height-library-list"
            games={gamesGallery}
            onClick={(externalCode) => appendGameToGamerList(externalCode)}
          />
        </div>
      </Page>
    </>
  );
}

type ListProps = {
  title: string;
  games: Game[];
  onClick: (externalCode: number) => void;
  rightContent?: ReactNode;
  customStyle?: string;
};

function List(props: ListProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-3 justify-between">
        <h3 className="text-2xl text-secondary-800">{props.title}</h3>
        {props.rightContent}
      </div>
      <ul className={`game-list ${props?.customStyle ?? ""}`}>
        {props.games.map((game) => (
          <li
            key={game.externalCode}
            onClick={() => props.onClick(game.externalCode)}
          >
            <img
              src={`./${game.externalCode}.png`}
              className="h-full"
              alt="game logo"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GamerListPage;
