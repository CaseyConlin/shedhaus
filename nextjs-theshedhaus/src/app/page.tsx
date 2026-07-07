import Image from "next/image";
import { Hero } from "@/components/Hero";
import { InventorySection } from "@/components/InventorySection";
import { ShedXray } from "@/components/shedxray/ShedXray";
import { LocallyTrustedSection } from "@/components/TwoColRightImage";
import { ShedDesignOptions } from "@/components/HomeMasonrySection";
import { OurProcess } from "@/components/OurProcess";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <Hero />
        <InventorySection />
        <ShedXray />
        <LocallyTrustedSection
          title={"Locally Trusted for Sheds That Last"}
          description={
            "At The Shed Haus, we believe your property deserves better than a temporary solution. We started this business to bring durable, architecturally-sound structures to our local community. Being family-owned means our name is on every floor joist and roofing shingle we install. We treat every project like it's going in our own backyard, ensuring that 'locally trusted' is a reputation we earn with every build."
          }
          image={{
            src: "/images/shedhaus-sign.webp",
            alt: "Shed Haus Sign",
            width: 600,
            height: 400,
          }}
          buttonText={"More About Us"}
        />
        <OurProcess />
        <ShedDesignOptions />
      </main>
    </div>
  );
}
