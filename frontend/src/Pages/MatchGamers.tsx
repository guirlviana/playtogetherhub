import React, { useState } from "react";
import Header from "../Components/Header";
import Page from "../Components/Page";
import GamerOverviewItem from "../Components/GamerOverviewItem";
import Button from "../Components/Button";

function MatchGamersPage() {
  return (
    <div>
      <Header />
      <Page customStyle="flex flex-col gap-6 items-center">
        <p className="text-secondary-900 lg:text-4xl md:text-4xl, sm:text-3xl text-3xl">
          Let's play together!
        </p>
        <div className="bg-white rounded-lg max-w-2xl sm:w-2/3 sm:h-3/4 w-full h-4/6 overflow-auto">
          <ul className="w-full">
            <GamerOverviewItem type="primary" />
            <GamerOverviewItem type="secondary" />
            <GamerOverviewItem type="primary" />
            <GamerOverviewItem type="secondary" />
            <GamerOverviewItem type="primary" />
            <GamerOverviewItem type="secondary" />
            <GamerOverviewItem type="primary" />
            <GamerOverviewItem type="secondary" />
            <GamerOverviewItem type="primary" />
            <GamerOverviewItem type="secondary" />
            <GamerOverviewItem type="primary" />
            <GamerOverviewItem type="secondary" />
          </ul>
        </div>
        <Button variant={"default"} size={"medium"}>
          <p className="text-3xl">MATCH</p>
        </Button>
      </Page>
    </div>
  );
}

export default MatchGamersPage;
