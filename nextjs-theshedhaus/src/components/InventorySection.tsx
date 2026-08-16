import Link from "next/link";
import { H2 } from "./text/H2";
import { Body } from "./text/Body";

interface Category {
  name: string;
  slug: {
    current: string;
  };
  image?: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
  seo?: {
    socialImage?: {
      asset?: {
        url: string;
      };
      alt?: string;
    };
  };
}

interface InventorySectionProps {
  categories: Category[];
  limit?: number;
}

const InventoryItem = ({
  title,
  link,
  imgSrc,
}: {
  title: string;
  link: string;
  imgSrc: string;
}) => {
  return (
    <Link href={link}>
      <div
        className="bg-white w-87 h-66 md:w-67 md:h-49 rounded-md shadow-xl bg-cover bg-bottom hover:scale-101 transition-transform duration-300"
        style={{ backgroundImage: `url('${imgSrc}')` }}
      >
        <div className="flex justify-start items-end  pb-4 w-full h-full">
          <div className="bg-black/65 text-white p-1 px-2 rounded-md rounded-l-none w-3/4">
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const InventorySection = ({
  categories,
  limit,
}: InventorySectionProps) => {
  const displayedCategories = limit
    ? categories.slice(0, limit)
    : categories;

  return (
    <div className="flex flex-col items-center justify-center gap-5 px-2 py-16">
      <H2
        className="text-primary"
        text="Find A Great Shed Right in Your Backyard"
      />
      <div className="font-medium max-w-xl text-center">
        <Body
          text={[
            "Whether you need a quiet backyard retreat, a rugged workspace, or a custom shelter for your next project, our team can help you find a structure built with industrial precision to meet your needs.",
            "Explore the collections below to find your perfect fit.",
          ]}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full max-w-7xl flex-wrap">
        {displayedCategories.map((category) => (
          <InventoryItem
            key={category.slug.current}
            title={category.name}
            imgSrc={
              category.seo?.socialImage?.asset?.url ||
              category.image?.asset?.url ||
              "/images/tempImage.png"
            }
            link={`/signature-styles/${category.slug.current}`}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 ">
        {/* <LinkButton text="See All Our Structures" link="/inventory" />
        <LinkButton
          text="Design Your Own Shed"
          link="/custom"
          variant="transRed"
        /> */}
      </div>
    </div>
  );
};
