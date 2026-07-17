export const Caret = ({
  isOpen,
  className,
}: {
  isOpen: boolean;
  className?: string;
}) => {
  return (
    <svg
      className={`w-3.5 h-3.5 text-primary fill-current  ${isOpen ? "-scale-y-100" : ""} ${className || ""}`}
      viewBox="0 0 100 100"
    >
      <polygon points="10,30 90,30 50,80" />
    </svg>
  );
};
