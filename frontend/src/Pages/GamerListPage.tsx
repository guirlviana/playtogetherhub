import Header from "../Components/Header";
import Page from "../Components/Page";

function GamerListPage() {
  return (
    <>
      <Header />
      <Page>
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl text-secondary-800">My games</h3>
          <ul className="bg-secondary-200 p-6 rounded-md">
            <li>
              <img src="./game.webp" alt="game logo" width={150} height={210} />
            </li>
          </ul>
        </div>
      </Page>
    </>
  );
}

export default GamerListPage;
