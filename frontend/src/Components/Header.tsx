import GamerProfile from "./GamerProfile";

function Header() {
  return (
    <div className="bg-secondary-200 flex flex-row justify-between items-center lg:py-5 lg:px-40 p-5">
      <a href="/match">
        <h4 className="text-primary flex w-auto lg:text-5xl md:text-3xl sm:text-3xl text-3xl">
          PlayTogether hub
        </h4>
      </a>
      <GamerProfile />
    </div>
  );
}

export default Header;
