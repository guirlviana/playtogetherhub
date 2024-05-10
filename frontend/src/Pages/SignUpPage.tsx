import React, { useState } from "react";
import Title from "../Components/Title";
import InputWithLabel from "../Components/InputWIthLabel";

function SignUpPage() {
  const [fields, setFieldsValue] = useState({
    name: "",
    gamerTag: "",
    password: "",
  });

  return (
    <div className="flex flex-col h-full w-full align-center items-center">
      <Title customStyle="pb-10">PlayTogether hub</Title>
      <form className="flex flex-col gap-4 bg-secondary-100 rounded-xl p-5 w-1/4">
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
      </form>
    </div>
  );
}

export default SignUpPage;
