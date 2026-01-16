import TestButton from "@/components/Buttons/TestButton";
import Banner from "@/components/Home/Banner";
import Animals from "@/components/Home/Animals";
import WhatYouCanDo from "@/components/Home/WhatYouCanDo";
import Blogs from "@/components/Home/Blogs";
import Species from "@/components/Home/Species";
import ClimateChange from "@/components/Home/ClimateChange";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <section>
        <Banner></Banner>
      </section>

      <section>
        <Animals></Animals>
      </section>

      <section>
        <WhatYouCanDo></WhatYouCanDo>
      </section>

      <section>
        <Blogs></Blogs>
      </section>

      <section>
        <Species></Species>
      </section>

      <section>
        <ClimateChange></ClimateChange>
      </section>
    </div>
  );
}
