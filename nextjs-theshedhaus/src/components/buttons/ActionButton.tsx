"use client";
import { ButtonBase, type ButtonBaseProps } from "./ButtonBase";
export const ActionButton = ({ text, className, onClick }: ButtonBaseProps) => {
  return <ButtonBase text={text} className={className} onClick={onClick} />;
};
