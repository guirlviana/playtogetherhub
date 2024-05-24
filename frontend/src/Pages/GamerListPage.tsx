import Header from "../Components/Header";
import Page from "../Components/Page";

function GamerListPage() {
  return (
    <>
      <Header />
      <Page>
        <div className="flex flex-col gap-10">
          <List title="My Games" games={[1, 1, 1, 1]} />
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
            <img src="./game.webp" alt="game logo" height={210} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GamerListPage;
