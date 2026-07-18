import { ButtonBase, type ButtonBaseProps } from "./ButtonBase";

type LinkButtonProps = Omit<ButtonBaseProps, "onClick">;

export const LinkButton = ({
  text,
  className,
  link,
  variant,
  target,
  rel,
}: LinkButtonProps) => {
  return (
    <ButtonBase
      text={text}
      className={className}
      link={link}
      variant={variant}
      target={target}
      rel={rel}
    />
  );
};
