import { Body } from "../text/Body";

export const XRayCard = ({
  heading,
  description,
  action,
  active,
}: {
  heading: string;
  description: string;
  action?: () => void;
  active: boolean;
}) => {
  return (
    <div
      className={`max-w-55 h-60 text-center rounded-md overflow-hidden shadow-xl border-black border-[0.5px] bg-white ${active ? "shadow-2xl " : ""} transition hover:shadow-2xl cursor-pointer`}
      onClick={action}
    >
      <div className="px-3 py-4">
        <div
          className={`mb-2 border-b-2  ${active ? "border-primary" : "border-transparent"} `}
        >
          <h3 className="font-bold text-lg text-primary ">{heading}</h3>
        </div>

        <Body className="text-sm" text={[description]} />
      </div>
    </div>
  );
};
