import anniekBril from "../assets/6894757aa6dd3f84f6e463a2_Anniek Bril.webp";
import SkewBtn from "./Shared/SkewBtn";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
import newReach from "../assets/new-reach-loop.mp4";

const LearnMore = () => {
  return (
    <section className="mx-4 md:mx-8 my-8 md:my-16 lg:my-24">
      <h2 className="text-[clamp(16px,5vw,60px)] w-[70%] md:mx-[10vw] md:leading-16 font-semibold">
        Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep
        raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
      </h2>

      <article className="flex flex-col sm:flex-row justify-between items-end mt-12 md:mt-24">
        <video src={newReach} autoPlay loop muted className="rounded-2xl w-10/12 mx-auto my-8 rotate-6 aspect-3/4 sm:hidden overflow-hidden object-cover "></video>
        <img
          src={anniekBril}
          alt="Anniek Bril"
          className="rounded-2xl w-2/6 xl:w-1/6 hidden sm:block"
        />

        <div className="sm:mx-6 p-2 lg:w-2/6">
          <p className="text-[4vw] sm:text-[clamp(16px,2.5vw,24px)] font-bold mb-6">
            We stoppen niet bij mooie plaatjes en vette beelden. We maken het
            meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer
            content zonder strategie. Nooit meer content zonder resultaat.
          </p>
          <SkewBtn>
            <a className="border tex-[2vw] sm:text-[clamp(8px,1.5vw,16px)] font-bold py-1 pr-1 pl-2 rounded-xl flex items-center gap-2">
              <span>Leer ons kennen</span>{" "}
              <span className="bg-black p-2.5 rounded-lg">
                <FaArrowRight color="white" />
              </span>
            </a>
          </SkewBtn>
        </div>

        <div className="hidden sm:flex justify-center md:w-1/6">
          <button className="group relative border w-fit p-3 rounded-xl m-2 overflow-hidden hover:scale-[1.02] transition-all hover:-skew-y-2">

            <span className="block transition-transform duration-300 ease-in-out group-hover:translate-y-[300%]">
              <FaArrowDown color="red" />
            </span>

            <span className="absolute inset-0 flex items-center justify-center translate-y-[-300%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              <FaArrowDown color="red" />
            </span>
          </button>
        </div>
      </article>
    </section>
  );
};

export default LearnMore;
