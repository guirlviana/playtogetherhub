import React, { useState } from "react";
import Title from "../Components/Title";
import InputWithLabel from "../Components/InputWIthLabel";
import Button from "../Components/Button";
import Page from "../Components/Page";

function SignUpPage() {
  const [fields, setFieldsValue] = useState({
    name: "",
    gamerTag: "",
    password: "",
  });

  return (
    <Page>
      <div className="flex flex-col h-full w-full align-center items-center">
        <Title customStyle="pb-10">PlayTogether hub</Title>
        <form className="flex flex-col gap-4 bg-secondary-100 rounded-xl p-5 md:w-1/4 xl:w-1/4">
          <InputWithLabel
            label={"Name"}
            name={"name-input"}
            onChange={(v) =>
              setFieldsValue((prevState) => ({ ...prevState, name: v }))
            }
            value={fields.name}
            direction="col"
            required
          />
          <InputWithLabel
            label={"Gamertag"}
            name={"gamertag-input"}
            onChange={(v) =>
              setFieldsValue((prevState) => ({ ...prevState, gamerTag: v }))
            }
            value={fields.gamerTag}
            direction="col"
            required
          />
          <InputWithLabel
            label={"Password"}
            name={"password-input"}
            onChange={(v) =>
              setFieldsValue((prevState) => ({ ...prevState, password: v }))
            }
            value={fields.password}
            direction="col"
            type="password"
            required
          />
          <div className="self-center">
            <Button variant="default" size="small">
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </Page>
  );
}

export default SignUpPage;
