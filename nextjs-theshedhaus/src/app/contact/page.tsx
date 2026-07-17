import { PageHeader } from "@/components/text/PageHeader";
import { ContactFooter } from "../../components/ContactFooter";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <PageHeader title={slug} description={`Details about ${slug}`} />
      <div className="flex flex-col items-center justify-center w-screen">
        <ContactFooter className="-mt-12" />
      </div>
    </>
  );
}
