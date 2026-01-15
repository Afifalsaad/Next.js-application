import TestButton from "@/components/Buttons/TestButton";
import Banner from "@/components/Home/Banner";
import Animals from "@/components/Home/Animals";
import WhatYouCanDo from "@/components/Home/WhatYouCanDo";

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
    </div>
  );
}
