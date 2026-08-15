import { BreadCrumbs } from "@/components/navigation/BreadCrumbs";
export const PageHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string | React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="flex flex-col items-start justify-start w-full max-w-6xl px-4 md:px-2 md:pl-0">
        <BreadCrumbs />
        <h1 className="flex text-3xl font-montserrat text-primary font-black">
          {title}
        </h1>
      </div>
      <div className="flex justify-center min-h-25 bg-black/75 w-screen">
        <div className="flex flex-col items-start justify-start w-full max-w-6xl py-2 md:py-4 px-4 md:px-2 md:pl-0 md: font-semibold">
          {typeof description === "string" ? (
            <p className="text-white font-inter max-w-2xl">{description}</p>
          ) : (
            <div className="text-white font-inter max-w-2xl">{description}</div>
          )}
        </div>
      </div>
    </div>
  );
};
