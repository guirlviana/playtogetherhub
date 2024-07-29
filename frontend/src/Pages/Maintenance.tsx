import React from "react";
import Button from "../Components/Button";
import Title from "../Components/Title";
import Page from "../Components/Page";

function Maintenance() {
  return (
    <Page>
      <div className="flex justify-center h-screen flex-col gap-7">
        <Title>PlayTogether hub</Title>
        <p className="text-black flex text-2xl pt-5">
          Our site is currently under maintenance. Please check back soon.
        </p>
      </div>
    </Page>
  );
}

export default Maintenance;
