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
    <div className="flex flex-col h-full w-full">
      <Title customStyle="pb-10">PlayTogether hub</Title>
      <form>
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
          required
        />
      </form>
    </div>
  );
}

export default SignUpPage;
