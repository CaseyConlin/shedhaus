import Image from "next/image";
import { LinkButton } from "@/components/buttons/LinkButton";
import { H2 } from "@/components/text/H2";
import { Body } from "@/components/text/Body";
interface MyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

interface LocallyTrustedSectionProps {
  title: string;
  description: string;
  image: MyImageProps;
  buttonText: string;
  primaryColor?: string;
}
export const LocallyTrustedSection = ({
  title,
  description,
  image,
  buttonText,
}: LocallyTrustedSectionProps) => {
  return (
    <div className="w-full max-w-105 mx-auto md:max-w-none">
      <div className="relative py-4 md:pt-4 md:pb-40">
        <div className="bg-[#f2f2f2] border-gray-300 border-[0.5px] shadow-xl">
          <div className="max-w-6xl mx-auto px-4 flex flex-col gap-8 items-center md:flex-row-reverse md:gap-12 md:px-8">
            <div className="w-full max-w-full transition-all duration-500 md:w-1/2">
              <div className="w-full flex justify-center items-center overflow-visible pt-6 md:pt-0">
                {image && (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className={`shadow-xl rounded-md aspect-3/2 md:scale-115 md:origin-center ${image.className ?? ""}`}
                  />
                )}
              </div>
            </div>
            <div className="w-full  flex flex-col gap-4 items-center text-center px-2 md:w-1/2 md:px-6">
              <H2 className="text-primary" text={title} />
              <Body text={[description]} className="text-black" />
              <LinkButton
                text={buttonText}
                link="/about"
                className="mb-12 md:mb-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
