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
          <div
            className={`transition-all duration-300 ease-in-out origin-top-right transform absolute right-0 top-full mt-2 w-40 z-10 bg-white rounded-md shadow-lg animate-slide-down`}
          >
            <a
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-200 hover:text-white"
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
