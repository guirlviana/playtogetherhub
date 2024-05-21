import Header from "../Components/Header";
import Page from "../Components/Page";

function GamerListPage() {
  return (
    <>
      <Header />
      <Page>
        <div className="flex flex-col gap-10">
          <List title="My Games" games={[1, 1, 1, 1]} />
          <List title="Library" games={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} />
        </div>
      </Page>
    </>
  );
}

type ListProps = {
  title: string;
  games: any[];
};

function List(props: ListProps) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-2xl text-secondary-800">{props.title}</h3>
      <ul className="bg-secondary-200 p-6 rounded-md flex flex-row gap-2">
        {props.games.map((game) => (
          <li key={game}>
            <img src="./game.webp" alt="game logo" width={150} height={210} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GamerListPage;
