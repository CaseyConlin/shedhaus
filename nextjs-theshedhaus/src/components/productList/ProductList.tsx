import { ProductCard, type Product } from "./Product";
import { SideBarCard } from "../../components/SideBarCard";
import { LinkButton } from "../buttons/LinkButton";
/**
 * ProductList
 * Displays an elegant product grid wrapping cards. Fits Frame 167.jpg and Frame 168.jpg layouts.
 * Interleaves Lot Update cards exactly after the 3rd and 9th card elements.
 */
export const ProductList = ({ products }: { products?: Product[] }) => {
  // Method to interleave Lot Update Cards beautifully at the indices matching both mobile and desktop frames
  const renderList = () => {
    const listItems: React.ReactNode[] = [];
    if (products?.length) {
      products.forEach((product, index) => {
        // Add the active product card
        listItems.push(
          <ProductCard
            key={`prod-${product.productName}-${index}`}
            {...product}
          />,
        );

        // Frame 167.jpg (mobile) and Frame 168.jpg (desktop) insert the "Lot Update" card
        // after the 3rd product card (index 2) and after the 9th product card (index 8).
        if (index % 4 === 0 && index !== 0) {
          listItems.push(
            <SideBarCard
              shadow="shadow-xl"
              key={`lot-update-index-${index}`}
              topBadgeTitle="Lot Update"
              bannerTitle="Looking for today's lot arrivals in Pawling?"
              bodyText={[
                "Our inventory moves fast.",
                "We post live arrivals daily straight to our social channels.",
              ]}
            >
              <LinkButton
                text="Check Our Instagram"
                link="https://instagram.com/theshedhaus"
              />
              <LinkButton
                text="Check Our Facebook"
                link="https://facebook.com/theshedhaus"
              />
            </SideBarCard>,
          );
        }
      });
    }

    return listItems;
  };

  return (
    <section className="w-full py-12 px-5 md:px-8 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Responsive flex wrapping list. Maps perfectly to Frame 167.jpg and Frame 168.jpg */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-8 w-full">
          {renderList()}
        </div>
      </div>
    </section>
  );
};
