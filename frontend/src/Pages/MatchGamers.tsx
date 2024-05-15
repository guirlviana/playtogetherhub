import React, { useState } from "react";
import Header from "../Components/Header";
import Page from "../Components/Page";

function MatchGamersPage() {
  return (
    <div>
      <Header />
      <Page customStyle="flex flex-col gap-2 items-center">
        <p className="text-secondary-900 lg:text-4xl md:text-4xl, sm:text-3xl text-3xl">
          Let's play together!
        </p>
        <div className="bg-white rounded-lg max-w-1/2 sm:w-2/3 sm:h-3/4 w-full h-full"></div>
      </Page>
    </div>
  );
}

export default MatchGamersPage;
