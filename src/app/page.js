
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";
export default function Home() {
  return (
    <>

      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={'Our story'} mainHeader={'About us'} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p >
            It all began in a tiny garage, fueled by late-night coffee and big ideas. We wanted to build something meaningful, something that would resonate with people. And so, LuminaCraft was born.
          </p>
          <p >
            At LuminaCraft, we’re more than just a business. We’re a passionate team of creators, dreamers, and problem-solvers. Our mission? To make your life better.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader={'Don\'t hesitate'} mainHeader={'Contact us'} />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+123456789">+123456789</a>
        </div>
      </section>

    </>
  );
}
