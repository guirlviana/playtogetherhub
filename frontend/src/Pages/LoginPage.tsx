import React, { useState } from "react";
import Page from "../Components/Page";
import Title from "../Components/Title";

function SignUpPage() {
  const [fields, setFieldsValue] = useState({
    gamerTag: "",
    password: "",
  });

  return (
    <Page>
      <div className="flex flex-col h-full w-full align-center items-center">
        <Title customStyle="pb-10">PlayTogether hub</Title>
      </div>
    </Page>
  );
}

export default SignUpPage;
