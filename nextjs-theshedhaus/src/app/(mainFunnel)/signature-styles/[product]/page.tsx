import { PageHeader } from "@/components/text/PageHeader";
import { ProductList } from "@/components/productList/ProductList";
export default async function Page({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const DEFAULT_PRODUCTS = [
    {
      id: "p1",
      title: "Quaker Shed",
      dimensions: "Available from 8'x10' to 14'x24'",
      bullets: [
        "Quaker roof style line",
        "Vented side pergola decoration",
        "Super vinyl clean siding",
      ],
      imageUrl: "/images/tempImage.png",
      category: "sheds",
      slug: "quaker",
    },
    {
      id: "p2",
      title: "Cape Shed",
      dimensions: "Available from 8'x10' to 14'x24'",
      bullets: [
        "High-pitch New England roof",
        "Double secure entry door",
        "Super green wood-look siding",
      ],
      imageUrl: "/images/tempImage.png",
      category: "sheds",
      slug: "cape",
    },
    {
      id: "p3",
      title: "Monterey Shed",
      dimensions: "Available from 8'x10' to 14'x24'",
      bullets: [
        "Stylish Carriage roof profile",
        "Double entry wide frame doors",
        "Premium heavy T1-11 siding",
      ],
      imageUrl: "/images/tempImage.png",
      category: "sheds",
      slug: "monterey",
    },
    {
      id: "p4",
      title: "Quaker Shed",
      dimensions: "Available from 8'x10' to 14'x24'",
      bullets: [
        "Quaker roof style line",
        "Vented side pergola decoration",
        "Super vinyl clean siding",
      ],
      imageUrl: "/images/tempImage.png",
      category: "sheds",
      slug: "quaker",
    },
    {
      id: "p5",
      title: "Cape Shed",
      dimensions: "Available from 8'x10' to 14'x24'",
      bullets: [
        "High-pitch New England roof",
        "Double secure entry door",
        "Super green wood-look siding",
      ],
      imageUrl: "/images/tempImage.png",
      category: "sheds",
      slug: "cape",
    },
    {
      id: "p6",
      title: "Monterey Shed",
      dimensions: "Available from 8'x10' to 14'x24'",
      bullets: [
        "Stylish Carriage roof profile",
        "Double entry wide frame doors",
        "Premium heavy T1-11 siding",
      ],
      imageUrl: "/images/tempImage.png",
      category: "sheds",
      slug: "monterey",
    },
    {
      id: "p7",
      title: "Quaker Shed",
      dimensions: "Available from 8'x10' to 14'x24'",
      bullets: [
        "Quaker roof style line",
        "Vented side pergola decoration",
        "Super vinyl clean siding",
      ],
      imageUrl: "/images/tempImage.png",
      category: "sheds",
      slug: "quaker",
    },
    {
      id: "p8",
      title: "Cape Shed",
      dimensions: "Available from 8'x10' to 14'x24'",
      bullets: [
        "High-pitch New England roof",
        "Double secure entry door",
        "Super green wood-look siding",
      ],
      imageUrl: "/images/tempImage.png",
      category: "sheds",
      slug: "cape",
    },
    {
      id: "p9",
      title: "Monterey Shed",
      dimensions: "Available from 8'x10' to 14'x24'",
      bullets: [
        "Stylish Carriage roof profile",
        "Double entry wide frame doors",
        "Premium heavy T1-11 siding",
      ],
      imageUrl: "/images/tempImage.png",
      category: "sheds",
      slug: "monterey",
    },
    {
      id: "p10",
      title: "Quaker Shed",
      dimensions: "Available from 8'x10' to 14'x24'",
      bullets: [
        "Quaker roof style line",
        "Vented side pergola decoration",
        "Super vinyl clean siding",
      ],
      imageUrl: "/images/tempImage.png",
      category: "sheds",
      slug: "quaker",
    },
    {
      id: "p11",
      title: "Cape Shed",
      dimensions: "Available from 8'x10' to 14'x24'",
      bullets: [
        "High-pitch New England roof",
        "Double secure entry door",
        "Super green wood-look siding",
      ],
      imageUrl: "/images/tempImage.png",
      category: "sheds",
      slug: "cape",
    },
  ];
  const { product } = await params;
  //   const OUR_WORK_QUERY = `*[_type == "ourWork" && product.current == "${product}"]`;

  //   const ourWorkData = await sanityFetchData(OUR_WORK_QUERY);

  //   const { title, body } = ourWorkData[0];

  return (
    <>
      <PageHeader title={product} description={`Details about ${product}`} />
      <div className="flex flex-col items-center justify-center w-screen">
        <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl gap-4 md:gap-10 py-4 md:py-8 md:px-0">
          <ProductList products={DEFAULT_PRODUCTS} />
        </div>
      </div>
    </>
  );
}
