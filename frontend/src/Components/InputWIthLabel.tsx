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
    <div className={`flex w-max gap-1 ${props.direction === "col" && "flex-col"} `}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        required={props.required}
        className="p-1 border-r-1 bg-white"
      />
    </div>
  );
}

export default InputWithLabel;
