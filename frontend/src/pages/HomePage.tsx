import React from "react";
import Button from "../Components/Button";
import Title from "../Components/Title";
import Page from "../Components/Page";

function HomePage() {
  return (
    <Page>
      <div className="flex justify-center h-screen flex-col gap-7">
        <Title>PlayTogether hub</Title>
        <p className="text-black flex text-2xl pt-5">
          Say goodbye to solo gaming and hello to endless fun with PlayTogether
          hub. Discover fellow gamers who share your gaming tastes and
          preferences
        </p>
        <div className="flex gap-6">
          <a href="/login">
            <Button variant="default" size="small">
              Login
            </Button>
          </a>
          <a href="/signup">
            <Button variant="default" size="small">
              Sign up
            </Button>
          </a>
        </div>
      </div>
    </Page>
  );
}

export default HomePage;
