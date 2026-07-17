export interface ListItemWithLeadProps extends React.HTMLAttributes<HTMLLIElement> {
  leadText: string;
  bodyText: string;
  className?: string;
}
export const ListItemWithLead = ({
  leadText,
  bodyText,
  className,
}: ListItemWithLeadProps) => {
  return (
    <li className={className || ""}>
      <span className="font-inter font-bold text-primary">{leadText}: </span>
      {bodyText}
    </li>
  );
};
