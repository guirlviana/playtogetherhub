function Header() {
  return (
    <div className="flex flex-row justify-between items-center">
      <h4 className="text-primary flex w-auto lg:text-5xl md:text-3xl sm:text-3xl text-3xl">PlayTogether hub</h4>
      <div className="bg-white rounded-full">
        <img src="./user-logo.webp" width={50} height={50} alt="gamer logo" />
      </div>
    </div>
  );
}

export default Header;
