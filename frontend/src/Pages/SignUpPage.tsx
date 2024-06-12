import React, { useEffect, useState } from "react";
import Title from "../Components/Title";
import InputWithLabel from "../Components/InputWIthLabel";
import Button from "../Components/Button";
import Page from "../Components/Page";
import Select from "../Components/Select";
import { searchGames } from "../http/Games";
import { createGamer } from "../http/Gamer";
import { useNavigate } from "react-router-dom";
import Error from "../Components/Error";
import { validateFields } from "../utils/validateFields";

type SignUpFields = {
  name: "";
  gamerTag: "";
  password: "";
  favoriteGameId: "";
};

function SignUpPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [availableGames, setAvailableGames] = useState([]);
  const [fields, setFieldsValue] = useState<SignUpFields>({
    name: "",
    gamerTag: "",
    password: "",
    favoriteGameId: "",
  });

  useEffect(() => {
    searchGames().then(({ data }) => {
      const games = data.data;
      setAvailableGames(
        games.map((game: { name: string; externalCode: number }) => ({
          name: game.name,
          value: game.externalCode,
        }))
      );
    });
  }, []);

  const onClickSignUp = () => {
    validateFields(fields)
      .then(() => {
        createGamer({
          ...fields,
          favoriteGameId: parseInt(fields.favoriteGameId),
        })
          .then(() => navigate("/login"))
          .catch(({ response }) => {
            if (response.status === 409) {
              setError(response.data.message);
            }
          });
      })
      .catch(({ message }) => setError(message));
  };

  return (
    <Page>
      <div className="flex flex-col h-full w-full align-center items-center">
        <Title customStyle="pb-10">PlayTogether hub</Title>
        <div className="flex flex-col gap-4 bg-secondary-100 rounded-xl p-5 md:w-1/4 xl:w-1/4">
          {error && <Error error={error} />}
          <InputWithLabel
            label="Name"
            name="name-input"
            onChange={(v) =>
              setFieldsValue((prevState: any) => ({ ...prevState, name: v }))
            }
            value={fields.name}
            direction="col"
            required
          />
          <InputWithLabel
            label="Gamertag"
            name="gamertag-input"
            onChange={(v) =>
              setFieldsValue((prevState: any) => ({
                ...prevState,
                gamerTag: v,
              }))
            }
            value={fields.gamerTag}
            direction="col"
            required
          />
          <InputWithLabel
            label="Password"
            name="password-input"
            onChange={(v) =>
              setFieldsValue((prevState: any) => ({
                ...prevState,
                password: v,
              }))
            }
            value={fields.password}
            direction="col"
            type="password"
            required
          />
          <Select
            name="favorite-game"
            label="Your most favorite game"
            direction="col"
            onChange={(v) =>
              setFieldsValue((prevState: any) => ({
                ...prevState,
                favoriteGameId: v,
              }))
            }
            options={availableGames}
            disabled={!availableGames.length}
            required
          />
          <div className="self-center">
            <Button
              variant="default"
              size="small"
              onClick={() => onClickSignUp()}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default SignUpPage;
