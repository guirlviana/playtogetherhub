import React from "react";

type Props = {
  type: "primary" | "secondary";
  gamerTag: string;
  name: string;
  games: { externalCode: number }[];
};

const imageIcons = [
  "https://mc-heads.net/avatar/rezendeevil",
  "https://mc-heads.net/avatar/pactw",
  "https://mc-heads.net/avatar/edukof",
  "https://mc-heads.net/avatar/jvnq",
  "https://mc-heads.net/avatar/mikethelink",
];

function GamerOverviewItem(props: Props) {
  const bgColor = props.type === "primary" ? "bg-gray-100" : "bg-white-200";
  const choosedImageIcon = imageIcons[Math.floor(Math.random() * 5)];

  return (
    <li className={`flex gap-3 p-2 ${bgColor}`}>
      <div className="bg-white rounded-full h-min flex self-center">
        <img src={choosedImageIcon} width={50} height={50} alt="gamer logo" />
      </div>
      <div className="flex grow flex-col justify-center">
        <h5>{props.name}</h5>
        <p className="text-gray-600 text-sm">@{props.gamerTag}</p>
      </div>
      <div className="flex gap-1 overflow-auto">
        {props.games.map((game) => (
          <img
            key={game.externalCode}
            src={`./${game.externalCode}.png`}
            width={50}
            height={80}
            alt="game logo"
          />
        ))}
      </div>
    </li>
  );
}

export default GamerOverviewItem;
