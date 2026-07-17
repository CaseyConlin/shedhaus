import { LinkButton } from "./buttons/LinkButton";

export const CTAFooter = () => {
  return (
    <div className="flex justify-center items-center mt-6 mb-0 md:my-24 min-h-25 bg-black/75 w-screen">
      <div className="flex flex-col justify-center items-center w-full max-w-6xl py-7 gap-4">
        <p className="flex text-xl text-center font-inter font-semibold text-white">
          Ready to upgrade your property?
        </p>
        <LinkButton text="Request a Quote" link="/contact" className="w-40" />
      </div>
    </div>
  );
};
