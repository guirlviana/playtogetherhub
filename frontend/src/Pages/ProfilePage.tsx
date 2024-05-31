import { useState } from "react";
import Header from "../Components/Header";
import Page from "../Components/Page";

type Props = {};

function ProfilePage(props: Props) {
  const [profile, setProfile] = useState({
    gamerTag: "",
    name: "",
  });

  return (
    <>
      <Header />
      <Page>
        <div className="flex flex-row gap-6">
          <div className="bg-white rounded-full cursor-pointer relative">
            <img
              src="./user-logo.webp"
              width={450}
              height={450}
              alt="gamer logo"
            />
          </div>
          <h1>{profile.gamerTag}</h1>
          <h3>{profile.name}</h3>
        </div>
      </Page>
    </>
  );
}

export default ProfilePage;
