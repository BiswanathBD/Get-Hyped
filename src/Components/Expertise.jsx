import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../assets/Loop Salontopper.mp4";
import SkewBtn from "./Shared/SkewBtn";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    number: "01",
    tag: "Expertise",
    title: "Social strategy",
    subtitle: "Slimme strategie. Sterke start.",
    body: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    cta: "Meer over social strategie",
    bg: "#fff",
  },
  {
    number: "02",
    tag: "Expertise",
    title: "Content creation",
    subtitle: "Content die opvalt en raakt.",
    body: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    cta: "Meer over content creatie",
    bg: "#f0abfc",
  },
  {
    number: "03",
    tag: "Expertise",
    title: "Activation",
    subtitle: "Zichtbaar waar en wanneer het telt.",
    body: "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
    cta: "Meer over activatie",
    bg: "#34d399",
  },
  {
    number: "04",
    tag: "Expertise",
    title: "Data",
    subtitle: "Inzichten die impact maken.",
    body: "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    cta: "Meer over data",
    bg: "#0d8dff",
  },
];

const rotations = cards.map(() => (Math.random() - 0.5) * 12);
const rotateX = 15;

const Expertise = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cardEls = cardRefs.current;
    cardEls.forEach((card, i) => {
      if (i === cardEls.length - 1) return;

      gsap.to(card, {
        scale: 0.8 - i * 0.02,
        top: 100,
        rotate: rotations[i],
        rotateX: rotateX,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: cardEls[i + 1],
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });

      gsap.to(card, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: cardEls[i + 1],
          start: "top center",
          end: "center center",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mx-4 md:mx-8 mt-24 lg:mt-48"
      style={{ perspective: "1000px" }}
    >
      {cards.map((card, i) => (
        <div
          key={card.number}
          ref={(el) => (cardRefs.current[i] = el)}
          className="p-8 md:p-12 my-8 rounded-2xl sticky top-16 w-full h-[calc(100vh-7rem)] will-change-transform flex flex-col justify-between"
          style={{ backgroundColor: card.bg }}
        >
          <aside className="relative flex-1">
            <div>
              {/* tag */}
              <button className="text-[clamp(8px,2vw,20px)] px-2.5 py-1 rounded-lg bg-[#eae4d8]">
                {card.tag}
              </button>
              {/* title */}
              <h2 className="text-[clamp(2rem,6.5vw,6.5rem)] font-semibold leading-tight my-4">
                {card.title}
              </h2>
            </div>

            {/* card number */}
            <span
              className={`absolute top-0 right-0 text-[clamp(1.5rem,7vw,7rem)] font-semibold leading-none 
              ${i === 0 ? "text-[#eae4d8]" : "text-white/30"}
              `}
            >
              {card.number}
            </span>
          </aside>

          <aside className="flex flex-2 flex-col justify-between sm:flex-row-reverse sm:items-end relative">
            <div className="sm:flex-1">
              <video
                src={video}
                className={`sm:absolute w-1/2 sm:w-2/5 md:w-1/4 lg:w-2/9 bottom-0 right-0 aspect-3/4 object-cover rounded-2xl border-5 ${i === 0 ? "border-red-600" : "border-white"} rotate-3 m-2`}
                autoPlay
                loop
                muted
              ></video>
            </div>

            <div className="sm:flex-1">
              {/* Subtitle */}
              <p className="text-[clamp(1rem,3vw,1.6rem)] font-semibold mb-4">
                {card.subtitle}
              </p>

              {/* Body */}
              <p className="text-[clamp(0.875rem,2vw,1.18rem)] opacity-90 font-semibold max-w-104 mb-6">
                {card.body}
              </p>

              <div className="relative z-10">
                <SkewBtn>
                  <a
                    href="#"
                    className={`text-[clamp(0.8rem,2vw,1rem)] font-semibold p-1 flex items-center gap-2 rounded-xl z-50 
                  ${i === 0 ? "text-white bg-orange-500" : "text-black bg-white"}
                  `}
                  >
                    <span className="pl-1">{card.cta}</span>
                    <span
                      className={`p-2.5 rounded-lg ${i === 0 ? "bg-white text-black" : "bg-black text-white"}`}
                    >
                      <FaArrowRight />
                    </span>
                  </a>
                </SkewBtn>
              </div>
            </div>
          </aside>
        </div>
      ))}
    </section>
  );
};

export default Expertise;
