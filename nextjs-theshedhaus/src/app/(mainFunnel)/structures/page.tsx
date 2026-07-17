const STRUCTURES_PAGE_SLUG = "structures";

export default async function Page() {
  //   const OUR_WORK_QUERY = `*[_type == "ourWork" && slug.current == "${STRUCTURES_PAGE_SLUG}"]`;

  //   const ourWorkData = await sanityFetchData(OUR_WORK_QUERY);

  //   const { title, body } = ourWorkData[0];

  return (
    <div>
      <h1>{STRUCTURES_PAGE_SLUG}</h1>
      {/* <p>{body}</p> */}
    </div>
  );
}
