import { H2 } from "./H2";
export const SpecTable = ({
  specs,
}: {
  specs: { lead: string; text: string }[];
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl gap-4 px-2 md:px-0">
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <H2 className="text-primary w-full text-left" text="Base Specs" />
        <table className="w-full border-collapse border border-black">
          <tbody>
            {specs.map((spec, index) => (
              <tr key={index} className="border border-black">
                <td className="border border-black border-r-0 px-4 py-2 align-top font-inter font-bold text-primary">
                  {spec.lead}
                </td>
                <td className="border border-black border-l-0 px-4 pl-0 py-2 font-inter">
                  {spec.text}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
