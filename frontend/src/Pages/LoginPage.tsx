import React, { useState } from "react";
import Page from "../Components/Page";
import Title from "../Components/Title";
import InputWithLabel from "../Components/InputWIthLabel";
import Button from "../Components/Button";
import { login } from "../http/Gamer";
import Error from "../Components/Error";
import { validateFields } from "../utils/validateFields";

type SignUpFields = {
  gamerTag: string;
  password: string;
};

function SignUpPage() {
  const [fields, setFieldsValue] = useState<SignUpFields>({
    gamerTag: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const logIn = () => {
    login(fields.gamerTag, fields.password)
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        const token = localStorage.getItem("token");
        if (token) {
          window.location.href = "/match";
        }
      })
      .catch(() => {
        setError("Login Invalid");
      });
  };

  const onClickLogIn = () => {
    setLoading(true);
    validateFields(fields)
      .then(() => logIn())
      .catch(({ message }) => setError(message))
      .finally(() => setLoading(false));
  };

  return (
    <Page>
      <div className="flex flex-col h-full w-full align-center items-center">
        <Title customStyle="pb-10">PlayTogether hub</Title>
        <div className="flex flex-col gap-4 bg-secondary-100 rounded-xl p-5 md:w-2/4 xl:w-1/4 w-3/4">
          {error && <Error error={error} />}
          <InputWithLabel
            label="Gamertag"
            name="gamertag-input"
            onChange={(v) =>
              setFieldsValue((prevState) => ({ ...prevState, gamerTag: v }))
            }
            value={fields.gamerTag}
            direction="col"
            disabled={loading}
            required
          />
          <InputWithLabel
            label="Password"
            name="password-input"
            onChange={(v) =>
              setFieldsValue((prevState) => ({ ...prevState, password: v }))
            }
            value={fields.password}
            direction="col"
            type="password"
            disabled={loading}
            required
          />
          <div className="self-center">
            <Button
              variant="default"
              size="small"
              disabled={loading}
              onClick={() => onClickLogIn()}
            >
              <p>{loading ? "Loading" : "Login"}</p>
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default SignUpPage;
