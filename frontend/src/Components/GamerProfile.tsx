import React, { useState } from "react";

function GamerProfile() {
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="inline-block relative">
      <div
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="bg-white rounded-full cursor-pointer relative"
      >
        <img src="./user-logo.webp" width={50} height={50} alt="gamer logo" />
        {isDropDownOpen && (
          <div className="flex flex-col transition-all duration-300 ease-in-out origin-top-right transform absolute right-0 top-full mt-2 w-40 z-10 bg-white rounded-md shadow-lg animate-slide-down">
            <a
              href="/profile"
              className="text-gray-300 hover:bg-primary-200 hover:text-white pr-5 p-1 text-1xl"
            >
              Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default GamerProfile;
