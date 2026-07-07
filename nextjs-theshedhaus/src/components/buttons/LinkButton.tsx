import { ButtonBase, type ButtonBaseProps } from "./ButtonBase";

type LinkButtonProps = Omit<ButtonBaseProps, "onClick">;

export const LinkButton = ({
  text,
  className,
  link,
  variant,
}: LinkButtonProps) => {
  return (
    <ButtonBase
      text={text}
      className={className}
      link={link}
      variant={variant}
    />
  );
};
