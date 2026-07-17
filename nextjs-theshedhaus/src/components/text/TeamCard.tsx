import {
  ListItemWithLead,
  type ListItemWithLeadProps,
} from "./ListItemWithLead";

interface TeamCardProps {
  name: string;
  title: string;
  details: ListItemWithLeadProps[];
}

export const TeamCard = ({ name, title, details }: TeamCardProps) => {
  return (
    <div className="team-card block w-full md:min-w-md">
      <h3 className="text-lg font-medium italic mb-0 text-[#706E6E]">
        <span className="font-montserrat not-italic font-black">{name}</span> |{" "}
        {title}
      </h3>
      <ul className="ps-4 list-disc marker:text-primary">
        {details.map(({ leadText, bodyText }, index) => (
          <ListItemWithLead
            key={index}
            leadText={leadText}
            bodyText={bodyText}
          />
        ))}
        {/* <li>
          <span className="font-inter font-bold text-primary">Expertise: </span>
          {expertise}
        </li>
        <li>
          <span className="font-inter font-bold text-primary">Role: </span>
          {role}
        </li> */}
      </ul>
    </div>
  );
};
