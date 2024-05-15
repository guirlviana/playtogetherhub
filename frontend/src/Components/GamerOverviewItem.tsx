import React from "react";

type Props = {
  type: "primary" | "secondary";
};

function GamerOverviewItem({ type }: Props) {
  const bgColor = type === "primary" ? "bg-white-100" : "bg-gray-50";
  return (
    <li className={`flex gap-3 p-2 ${bgColor}`}>
      <div className="bg-white rounded-full h-min flex">
        <img src="./user-logo.webp" width={50} height={50} alt="gamer logo" />
      </div>
      <div className="flex grow flex-col justify-center">
        <h5>John Doe</h5>
        <p>@GamerProJohn</p>
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
