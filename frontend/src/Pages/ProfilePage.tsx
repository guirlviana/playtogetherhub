import { ReactNode, useEffect, useState } from "react";
import Header from "../Components/Header";
import Page from "../Components/Page";
import { getGamer } from "../http/Gamer";
import { createOrUpdateGames, getGamerList, searchGames } from "../http/Games";

type Props = {};

type Game = {
  externalCode: number;
};

const gamerIdMocked = 17;

function ProfilePage(props: Props) {
  const token = localStorage.getItem("token");
  const [editGamerModalIsOpen, setEditgamerModalIsOpen] =
    useState<boolean>(false);
  const [gamerList, setGamerlist] = useState<Game[]>([]);
  const [gamesGallery, setGamesGallery] = useState<Game[]>([]);
  const [profile, setProfile] = useState({
    gamerTag: "",
    name: "",
  });

  useEffect(() => {
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
  }, [token]);

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

  useEffect(() => {
    getGamer(gamerIdMocked, token).then(({ data }) => setProfile(data.data));
  }, [token]);

  return (
    <>
      <Header />
      <Page customStyle="flex flex-col gap-10">
        <div className="flex flex-col gap-6 items-center rounded-sm bg-secondary-100 w-min px-10 pb-10 pt-5 self-center">
          <button
            className="self-end"
            onClick={() => setEditgamerModalIsOpen((current) => !current)}
          >
            <p className="text-1xl text-gray-400">Edit</p>
          </button>
          <div className="bg-white rounded-full  relative">
            <img
              src="./user-logo.webp"
              width={250}
              height={250}
              alt="gamer logo"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl text-primary-900">{profile.gamerTag}</h1>
            <h3 className="text-3xl text-secondary-800">{profile.name}</h3>
          </div>
        </div>
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

export default ProfilePage;
