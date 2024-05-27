import React from "react";

type Props = {
  type: "primary" | "secondary";
  gamerTag: string;
  name: string;
  games: { externalCode: number }[];
};

function GamerOverviewItem(props: Props) {
  const bgColor = props.type === "primary" ? "bg-white-100" : "bg-gray-50";
  return (
    <li className={`flex gap-3 p-2 ${bgColor}`}>
      <div className="bg-white rounded-full h-min flex">
        <img src="./user-logo.webp" width={50} height={50} alt="gamer logo" />
      </div>
      <div className="flex grow flex-col justify-center">
        <h5>{props.name}</h5>
        <p>{props.gamerTag}</p>
      </div>
      <div className="flex gap-1">
        <img src="./game.webp" width={50} height={80} alt="game logo" />
        <img src="./game.webp" width={50} height={80} alt="game logo" />
        <img src="./game.webp" width={50} height={80} alt="game logo" />
      </div>
    </li>
  );
}

export default GamerOverviewItem;
