import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Page from "../Components/Page";
import GamerOverviewItem from "../Components/GamerOverviewItem";
import Button from "../Components/Button";
import { getAllGamers } from "../http/Gamer";
import { matchFellowGamers } from "../http/Games";

type Gamer = {
  id: number;
  gamerTag: string;
  name: string;
  games: { externalCode: number }[];
};

function MatchGamersPage() {
  const [gamers, setGamers] = useState<Gamer[]>([]);
  const [viewAll, setViewAll] = useState(true);

  useEffect(() => {
    getAllGamers().then(({ data }) => setGamers(data.data));
  }, []);

  const matchGamers = async () => {
    if (viewAll) {
      getAllGamers().then(({ data }) => setGamers(data.data));
    } else {
      matchFellowGamers().then(({ data }) => {
        const gamersMatched = data.data;
        if (gamersMatched.length > 0) {
          setGamers(gamersMatched);
          return;
        }
        // TODO: Toast saying that doesnt match gamers
        getAllGamers().then(({ data }) => setGamers(data.data));
      });
    }

    setViewAll((current) => !current);
  };

  return (
    <div>
      <Header />
      <Page customStyle="h-screen flex flex-col gap-6 items-center">
        <p className="text-secondary-900 lg:text-4xl md:text-4xl, sm:text-3xl text-3xl">
          Let's play together!
        </p>
        <div className="bg-white rounded-lg max-w-2xl sm:w-2/3 w-full max-h-3/5 overflow-auto">
          <ul className="w-full">
            {gamers.map((gamer, index) => (
              <GamerOverviewItem
                key={gamer.id}
                type={index % 2 === 0 ? "primary" : "secondary"}
                gamerTag={gamer.gamerTag}
                name={gamer.name}
                games={gamer.games ?? []}
              />
            ))}
          </ul>
        </div>
        <Button
          variant={"default"}
          size={"medium"}
          onClick={() => matchGamers()}
        >
          <p className="text-3xl">{viewAll ? "ALL" : "MATCH"}</p>
        </Button>
      </Page>
    </div>
  );
}

export default MatchGamersPage;
