import { H2 } from "./H2";
export const KeyFeatures = ({
  features,
}: {
  features: { lead: string; text: string }[];
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl gap-4 px-2 md:px-0">
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <H2
          className="text-primary w-full text-left"
          text="Key Architectural Features"
        />
        <ul className="list-disc pl-5">
          {features.map((feature, index) => (
            <li key={index} className="mb-2 font-inter">
              <strong>{feature.lead}:</strong> {feature.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
