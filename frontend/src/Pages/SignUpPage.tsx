import React, { useState } from "react";
import Title from "../Components/Title";
import InputWithLabel from "../Components/InputWIthLabel";

function SignUpPage() {
  const [fields, setFieldsValue] = useState({
    name: "",
  });

  return (
    <>
      <Title>PlayTogether hub</Title>
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
    </>
  );
}

export default SignUpPage;
