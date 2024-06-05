import React, { useState, useRef, useEffect } from "react";
import { logout } from "../http/Gamer";
import { useNavigate } from "react-router-dom";

function GamerProfile() {
  const navigate = useNavigate();
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutsideDropdownArea = (event: { target: any }) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideDropdownArea);
    return () => {
      document.removeEventListener("click", handleClickOutsideDropdownArea);
    };
  }, []);

  const onClickLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="inline-block relative" ref={dropdownRef}>
      <div
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="bg-white rounded-full cursor-pointer relative"
      >
        <img src="./user-logo.webp" width={50} height={50} alt="gamer logo" />
        {isDropDownOpen && (
          <div className="flex flex-col self-start transition-all duration-300 ease-in-out origin-top-right transform absolute right-0 top-full mt-2 w-40 z-10 bg-white rounded-md shadow-lg animate-slide-down">
            <a
              href="/profile"
              className="text-gray-300 hover:bg-primary-200 hover:rounded-t-md hover:text-white pr-5 p-1 text-1xl"
            >
              Profile
            </a>
            <button
              onClick={onClickLogout}
              className="text-red-600 hover:bg-red-600 hover:rounded-b-md hover:text-white pr-5 p-1 text-1xl border-t"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GamerProfile;
