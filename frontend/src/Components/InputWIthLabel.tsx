import React from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  direction?: "col" | "row";
  onChange: (value: string) => void;
};

function InputWithLabel(props: Props) {
  return (
    <div className={`flex gap-1 ${props.direction === "col" && "flex-col"} `}>
      <label htmlFor={props.name}>
        {props.required && "* "}
        {props.label}
      </label>
      <input
        name={props.name}
        onChange={(e) => props.onChange(e.target.value)}
        disabled={props.disabled}
        value={props.value}
        required={props.required}
        type={props?.type ?? "text"}
        className="p-2 rounded-xl bg-white"
      />
    </div>
  );
}

export default InputWithLabel;
