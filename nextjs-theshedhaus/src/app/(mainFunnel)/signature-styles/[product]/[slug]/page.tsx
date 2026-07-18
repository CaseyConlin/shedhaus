import { PageHeader } from "@/components/text/PageHeader";
import { KeyFeatures } from "@/components/text/KeyFeatures";
import { SpecTable } from "@/components/text/SpecTable";
import { ProductGallery } from "@/components/ProductGallery";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const specs = [
    {
      lead: "Roofline",
      text: "High-pitch A line",
    },
    {
      lead: "Doors",
      text: "Signature double doors with black iron hardware",
    },
    {
      lead: "Windows",
      text: "Two windows double-hung 18″x27″",
    },
    {
      lead: "Siding",
      text: "Super vinyl moss green",
    },
    {
      lead: "Trim",
      text: "Permatrim",
    },
    {
      lead: "Vent",
      text: "Gable vent",
    },
    {
      lead: "Footprints",
      text: "8'x8'-8'x10'-8'x12' 8'x14'-8'x16' 10'x10'-10'x12'-10'x14'- 10'x16'-10'x18'-10'x20'-10'x24' 12'x12'-12'x14'-12'x16' 12'x18'-12'x20'-12'x24'-12'x28'",
    },
  ];
  const features = [
    {
      lead: "Symmetrical High-Pitch Profile",
      text: "The traditional 7/12 roof pitch provides a classic New England look while offering excellent rainwater run-off and a high snow-load capacity.",
    },
    {
      lead: "Maximized Overhead Headspace",
      text: "The steep rafter design naturally creates generous vertical clearance, making it the ideal model for adding overhead loft storage.",
    },
    {
      lead: "Premium Material Construction",
      text: "Built using high-performance siding options (including durable T1-11 and weather-resistant vinyl) and heavy-duty pressure-treated framing to guarantee structural integrity for decades.",
    },
  ];
  const { slug } = await params;
  //   const OUR_WORK_QUERY = `*[_type == "ourWork" && slug.current == "${slug}"]`;

  //   const ourWorkData = await sanityFetchData(OUR_WORK_QUERY);

  //   const { title, body } = ourWorkData[0];

  return (
    <>
      <PageHeader title={slug} description={`Details about ${slug}`} />
      <div className="flex flex-col items-center justify-center w-screen">
        <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl gap-4 md:gap-10 py-4 md:py-8 md:px-0">
          <div className="flex-4 flex justify-start items-start min-w-screen md:min-w-0 w-full">
            <ProductGallery />
          </div>
          <div className="flex-3 flex flex-col items-start justify-start w-full ">
            <KeyFeatures features={features} />
            <SpecTable specs={specs} />
          </div>
        </div>
      </div>
    </>
  );
}
