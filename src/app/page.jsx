import TestButton from "@/components/Buttons/TestButton";
import Banner from "@/components/Home/Banner";
import Animals from "@/components/Home/Animals";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <section>
        <Banner></Banner>
      </section>

      <section>
        <Animals></Animals>
      </section>

      {/* <section>
        <TestButton></TestButton>
      </section> */}
    </div>
  );
}
