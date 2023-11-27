"use client";

import { IconType } from "react-icons/lib";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  icon: Icon,
  onClick,
}) => {
  return (
    <div>
      <button
        disabled={disabled}
        className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-md
        hover:opacity-80
        transition
        w-full
        flex
        justify-center
        items-center
        gap-2
        ${outline ? "bg-white" : "bg-slate-500"}
        ${outline ? "border-black" : "border-slate-300"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "py-1" : "py-3"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
        ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
      `}
      >
        {Icon && <Icon size={24} />}
        {label}
      </button>
    </div>
  );
};

export default Button;
