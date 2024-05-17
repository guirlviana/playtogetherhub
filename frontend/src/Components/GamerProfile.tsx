import React, { useState } from "react";

function GamerProfile() {
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="inline-block relative">
      <div
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="bg-white rounded-full cursor-pointer"
      >
        <img src="./user-logo.webp" width={50} height={50} alt="gamer logo" />
      </div>
      <div
        className={`flex flex-col gap-1 w-max absolute z-10 float-left bg-white ${
          isDropDownOpen ? "block" : "hidden"
        }`}
      >
        <a href="/profile" className="text-gray-300 pr-5 p-1 text-1xl">Profile</a>
        <a href="/gamerlist" className="text-gray-300 pr-5 p-1 text-1xl">Gamer list</a>
        <a href="/logout" className="text-red-600 pr-5 p-1 text-1xl border-t">Log out</a>
      </div>
    </div>
  );
}

export default GamerProfile;
