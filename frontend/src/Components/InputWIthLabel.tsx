import React from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
};

function InputWithLabel(props: Props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
      />
    </div>
  );
}

export default InputWithLabel;
