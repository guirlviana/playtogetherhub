function Header() {
  return (
    <div className="flex flex-row justify-between">
      <h4>PlayTogether hub</h4>
      <div className="bg-white rounded-full">
        <img src="./user-logo.webp" width={50} height={50} alt="gamer logo" />
      </div>
    </div>
  );
}

export default Header;
