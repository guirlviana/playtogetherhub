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
  const [error, setError] = useState<string>("");
  const [matchGamers, setMatchGamers] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getAllGamers().then(({ data }) => setGamers(data.data));
  }, []);

  const handleMatchGamers = async () => {
    setError("");
    setIsLoading((current) => !current);
    if (matchGamers) {
      matchFellowGamers().then(({ data }) => {
        const gamersMatched = data.data;
        if (gamersMatched.length > 0) {
          setGamers(gamersMatched);
          return;
        }

        setError("Sorry, your game list doesn't match any fellow gamer 😔");
      });
    } else {
      getAllGamers().then(({ data }) => setGamers(data.data));
    }

    setMatchGamers((current) => !current);
    setIsLoading((current) => !current);
  };

  return (
    <div>
      <Header />
      <Page customStyle="h-screen flex flex-col gap-6 items-center">
        <p className="text-secondary-900 lg:text-4xl md:text-4xl, sm:text-3xl text-3xl">
          Let's play together!
        </p>
        {error ? (
          <div className="bg-white rounded-lg max-w-2xl sm:w-2/3 w-full max-h-3/5 p-5">
            <p className="text-primary-400 font-bold">{error}</p>
          </div>
        ) : (
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
        )}
        <Button
          variant={"default"}
          size={"medium"}
          onClick={() => handleMatchGamers()}
          disabled={isLoading}
        >
          <p className="text-3xl">{matchGamers ? "MATCH" : "ALL"}</p>
        </Button>
      </Page>
    </div>
  );
}

export default MatchGamersPage;
