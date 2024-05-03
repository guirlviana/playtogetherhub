import React from "react";
import Button from "../Components/Button";

function HomePage() {
  return (
    <div className="flex justify-center h-screen flex-col gap-7">
      <h1 className="text-primary lg:text-9xl text-5xl flex">
        PlayTogether hub
      </h1>
      <p className="text-black flex text-2xl pt-5">
        Say goodbye to solo gaming and hello to endless fun with PlayTogether
        hub. Discover fellow gamers who share your gaming tastes and preferences
      </p>
      <div className="flex gap-6">
        <Button variant="default">Login</Button>
        <Button variant="default">Sign up</Button>
      </div>
    </div>
  );
}

export default HomePage;
