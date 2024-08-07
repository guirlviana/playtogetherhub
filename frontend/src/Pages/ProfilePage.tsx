import { ReactNode, useEffect, useState } from "react";
import Header from "../Components/Header";
import Page from "../Components/Page";
import { editGamer, getGamer } from "../http/Gamer";
import { createOrUpdateGames, getGamerList, searchGames } from "../http/Games";
import ModalEditGamer from "../Components/ModalEditGamer";

type Game = {
  externalCode: number;
};

type Fields = { name: string; gamerTag: string };

const EMPTY_FIELD_VALUE = "";

function ProfilePage() {
  const [editGamerModalIsOpen, setEditgamerModalIsOpen] =
    useState<boolean>(false);
  const [gamerList, setGamerlist] = useState<Game[]>([]);
  const [gamesGallery, setGamesGallery] = useState<Game[]>([]);
  const [profile, setProfile] = useState<Fields>({
    gamerTag: "",
    name: "",
  });

  useEffect(() => {
    getGamer().then(({ data }) => setProfile(data.data));

    const fillGamesLists = async () => {
      let gamerList: Game[] = [];
      await getGamerList().then(({ data }) => {
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
    createOrUpdateGames(gamerList).then(() => alert("Saved"));
  };

  const editGamerData = (updatedFields: Fields) => {
    for (const field in profile) {
      if (
        updatedFields[field as keyof Fields] !==
          profile[field as keyof Fields] &&
        updatedFields[field as keyof Fields] !== EMPTY_FIELD_VALUE
      ) {
        editGamer(updatedFields).then(() => {
          setEditgamerModalIsOpen(false);
          setProfile(updatedFields);
        });
      }
    }
  };

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
              src="https://mc-heads.net/avatar/0385"
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
      {editGamerModalIsOpen && (
        <ModalEditGamer
          onCloseModal={() => setEditgamerModalIsOpen(false)}
          onSave={(updatedFields: Fields) => editGamerData(updatedFields)}
          gamerFields={profile}
        />
      )}
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
            className="sm:h-full h-2/4"
          >
            <img
              src={`./${game.externalCode}.png`}
              className="h-full w-full"
              alt="game logo"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfilePage;
