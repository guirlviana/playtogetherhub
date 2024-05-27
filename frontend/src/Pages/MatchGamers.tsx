import React, { useState } from "react";
import Header from "../Components/Header";
import Page from "../Components/Page";
import GamerOverviewItem from "../Components/GamerOverviewItem";
import Button from "../Components/Button";
import { getAllGamers } from "../http/Gamer";

type Gamer = {
  id: number;
  gamerTag: string;
  name: string;
  games: { externalCode: number }[];
};

function MatchGamersPage() {
  const [gamers, setGamers] = useState<Gamer[]>([]);

  useEffect(() => {
    getAllGamers().then(({ data }) => setGamers(data.data));
  }, []);

  console.log(gamers);
  return (
    <div>
      <Header />
      <Page customStyle="h-screen flex flex-col gap-6 items-center">
        <p className="text-secondary-900 lg:text-4xl md:text-4xl, sm:text-3xl text-3xl">
          Let's play together!
        </p>
        <div className="bg-white rounded-lg max-w-2xl sm:w-2/3 w-full h-3/5 overflow-auto">
          <ul className="w-full">
            <GamerOverviewItem type="primary" />
            <GamerOverviewItem type="secondary" />
            <GamerOverviewItem type="primary" />
            <GamerOverviewItem type="secondary" />
            <GamerOverviewItem type="primary" />
            <GamerOverviewItem type="secondary" />
            <GamerOverviewItem type="primary" />
            <GamerOverviewItem type="secondary" />
            <GamerOverviewItem type="primary" />
            <GamerOverviewItem type="secondary" />
            <GamerOverviewItem type="primary" />
            <GamerOverviewItem type="secondary" />
          </ul>
        </div>
        <Button variant={"default"} size={"medium"}>
          <p className="text-3xl">MATCH</p>
        </Button>
      </Page>
    </div>
  );
}

export default MatchGamersPage;
