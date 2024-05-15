import React, { useState } from "react";
import Header from "../Components/Header";
import Page from "../Components/Page";

function MatchGamersPage() {
  return (
    <div>
      <Header />
      <Page>
        <p className="text-secondary-900 lg:text-4xl md:text-4xl, sm:text-3xl text-3xl flex justify-around">
          Let's play together!
        </p>
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
      </Page>
    </div>
  );
}

export default MatchGamersPage;
