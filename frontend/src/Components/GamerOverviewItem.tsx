import React from "react";

function GamerOverviewItem() {
  return (
    <li className="flex gap-3 self-center p-2">
      <div className="bg-white rounded-full">
        <img src="./user-logo.webp" width={50} height={50} alt="gamer logo" />
      </div>
      <div className="flex grow flex-col">
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
