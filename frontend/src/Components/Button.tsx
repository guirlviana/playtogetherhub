import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant: "default";
  size: "small" | "medium";
  onClick?: () => void;
  disabled?: boolean;
};

const DISABLED_BUTTON_COLOR = "bg-gray-300 text-gray-500 cursor-not-allowed";
const PRIMARY_BUTTON_COLOR = "bg-primary hover:bg-primary-700 text-white";

function Button({ children, variant, size, onClick, disabled }: Props) {
  const variants = {
    default: "py-2 px-4 rounded-lg",
  };

  const color = disabled ? DISABLED_BUTTON_COLOR : PRIMARY_BUTTON_COLOR;

  const sizes = {
    small: "w-24 h-12",
    medium: "w-48 h-20",
  };

  const combinedStyles = `${color} ${variants[variant]} ${sizes[size]}`;

  return (
    <button className={combinedStyles} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
