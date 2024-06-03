import React, { useEffect, useState } from "react";
import Title from "../Components/Title";
import InputWithLabel from "../Components/InputWIthLabel";
import Button from "../Components/Button";
import Page from "../Components/Page";

function ModalEditGamer() {
  const [fields, setFieldsValue] = useState({
    name: "",
    gamerTag: "",
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="flex flex-col h-full w-full align-center items-center justify-around">
        <div className="flex flex-col gap-4 bg-secondary-100 rounded-xl p-5 md:w-1/4 xl:w-1/4">
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

          <div className="self-center">
            <Button variant="default" size="small" onClick={() => {}}>
              Save
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="absolute inset-0"></div> */}
    </div>
  );
}

export default ModalEditGamer;
