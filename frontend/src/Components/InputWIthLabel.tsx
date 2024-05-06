import React from "react";

type Props = {
  label: string;
  name: string;
  onChange: (value: string) => void;
};

function InputWithLabel(props: Props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}

export default InputWithLabel;
