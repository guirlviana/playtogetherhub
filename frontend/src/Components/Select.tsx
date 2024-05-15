import React from "react";

type Props = {
  onChange: (value: string) => void;
  label: string;
  name: string;
  options: { name: string; value: string }[];
  direction?: "col" | "row";
  required?: boolean;
  disabled?: boolean;
  customStyle?: string;
};

function Select({
  label,
  direction,
  onChange,
  name,
  options,
  disabled,
  required,
  customStyle,
}: Props) {
  return (
    <div className={`flex gap-1 ${direction === "col" && "flex-col"} `}>
      <label htmlFor={name}>
        {required && "* "}
        {label}
      </label>
      <select
        disabled={disabled}
        name={name}
        id={name}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="p-1 rounded-xl bg-white"
      >
        <option value="" className="">
          Please choose a game
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
