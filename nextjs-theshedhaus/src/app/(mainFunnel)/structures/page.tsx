export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  //   const OUR_WORK_QUERY = `*[_type == "ourWork" && slug.current == "${slug}"]`;

  //   const ourWorkData = await sanityFetchData(OUR_WORK_QUERY);

  //   const { title, body } = ourWorkData[0];

  return (
    <div>
      <h1>{slug}</h1>
      {/* <p>{body}</p> */}
    </div>
  );
}
