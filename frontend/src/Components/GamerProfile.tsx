import React, { useState } from "react";

function GamerProfile() {
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="inline-block relative ">
      <div
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="bg-white rounded-full cursor-pointer"
      >
        <img src="./user-logo.webp" width={50} height={50} alt="gamer logo" />
        {isDropDownOpen && (
          <div
            className={`flex flex-col gap-1 w-max right-6 absolute z-10 bg-white`}
          >
            <a
              href="/profile"
              className="text-gray-300 hover:bg-primary-200 hover:text-white pr-5 p-1 text-1xl"
            >
              Profile
            </a>
            <a
              href="/gamerlist"
              className="text-gray-300 hover:bg-primary-200 hover:text-white pr-5 p-1 text-1xl"
            >
              Gamer list
            </a>
            <a
              href="/logout"
              className="text-red-600 hover:bg-red-600 hover:text-white pr-5 p-1 text-1xl border-t"
            >
              Log out
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default GamerProfile;
