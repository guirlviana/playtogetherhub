import Header from "../Components/Header";
import Page from "../Components/Page";

type Props = {};

function ProfilePage(props: Props) {
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
        </div>
      </Page>
    </>
  );
}

export default ProfilePage;
