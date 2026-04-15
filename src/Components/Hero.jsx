import HeroCards from "./HeroCards";

const Hero = () => {
  return (
    <section className="my-8 md:my-16 overflow-hidden">
      <div className="mx-8">
        <h1 className="text-[clamp(36px,6.5vw,100px)] leading-none font-semibold w-8/12">
          Get Hyped. Get Noticed. Get Results.
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mt-6 max-w-108 font-semibold">
          Klaar met gokken op content die niets oplevert?
        </p>
      </div>

      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        <HeroCards />
      </div>
    </section>
  );
};

export default Hero;
