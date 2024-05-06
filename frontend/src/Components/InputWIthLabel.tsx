import React from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  required?: boolean;
  direction?: "col" | "row";
  onChange: (value: string) => void;
};

function InputWithLabel(props: Props) {
  return (
    <div className={`flex ${props.direction === "col" && "flex-col"} w-max`}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        required={props.required}
      />
    </div>
  );
}

export default InputWithLabel;
