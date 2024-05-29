import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Page from "../Components/Page";
import { getGamerList } from "../http/Games";

const gamerIdMocked = 17;

function GamerListPage() {
  const [gamerList, setGamerlist] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getGamerList(gamerIdMocked, token).then(({ data }) => setGamerlist(data.data));
  }, []);

  return (
    <>
      <Header />
      <Page>
        <div className="flex flex-col gap-10">
          <List title="My Games" games={gamerList} />
          <List
            title="Library"
            customStyle="height-library-list"
            games={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
          />
        </div>
      </Page>
    </>
  );
}

type ListProps = {
  title: string;
  games: any[];
  customStyle?: string;
};

function List(props: ListProps) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-2xl text-secondary-800">{props.title}</h3>
      <ul className={`game-list ${props?.customStyle ?? ""}`}>
        {props.games.map((game) => (
          <li key={game}>
            <img
              src={`./${game.externalCode}.png`}
              alt="game logo"
              height={210}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GamerListPage;
