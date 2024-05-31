import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Page from "../Components/Page";
import { getGamer } from "../http/Gamer";

type Props = {};

const gamerIdMocked = 17;

function ProfilePage(props: Props) {
  const token = localStorage.getItem("token");
  const [profile, setProfile] = useState({
    gamerTag: "",
    name: "",
  });

  useEffect(() => {
    getGamer(gamerIdMocked, token).then(({ data }) => setProfile(data.data));
  }, [token]);

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
