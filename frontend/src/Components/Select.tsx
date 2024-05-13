import React, { ReactNode } from "react";

type Props = {
  onChange: (value: string) => void;
  label: string;
  name: string;
  options: { name: string; value: string }[];
  direction?: "col" | "row";
  required?: boolean;
  customStyle?: string;
};

function Select({
  label,
  direction,
  onChange,
  name,
  options,
  required,
  customStyle,
}: Props) {
  const defaultStyle =
    "text-primary flex w-auto lg:text-8xl md:text-6xl sm:text-6xl text-4xl";
  const combinedStyles = customStyle
    ? `${defaultStyle} ${customStyle}`
    : defaultStyle;

  return (
    <div className={`flex gap-1 ${direction === "col" && "flex-col"} `}>
      <label htmlFor={name}>
        {required && "* "}
        {label}
      </label>
      <select
        name={name}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="p-1 rounded-xl bg-white"
      >
        {options.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;