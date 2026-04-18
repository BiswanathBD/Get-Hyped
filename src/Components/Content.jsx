import SkewBtn from "./Shared/SkewBtn";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import salontopper from "../assets/Loop Salontopper.mp4";
import newReach from "../assets/new-reach-loop.mp4";
import petrolhead from "../assets/petrolhead-loop.mp4";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
motion;
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cards = [
  {
    title: "Van nul naar vol,\nbinnen 3 weken",
    btn: "Bullit",
    video: salontopper,
    color: "#FF4F19",
  },
  {
    title: "Zacht in smaak,\nsterk in beeld",
    btn: "Roasta",
    video: newReach,
    color: "#3b82f6",
  },
  {
    title: "Content die écht\nsmaakt (en raakt)",
    btn: "Loco",
    video: petrolhead,
    color: "#34d399",
  },
];

const Content = () => {
  const videoRefs = useRef([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const handleMouseEnter = (i) => {
    if (videoRefs.current[i]) {
      videoRefs.current[i].play();
    }
  };
  const handleMouseLeave = (i) => {
    if (videoRefs.current[i]) {
      videoRefs.current[i].pause();
      // videoRefs.current[i].currentTime = 0;
    }
  };

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const cardEls = cardRefs.current;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 640px)", () => {
      cardEls.forEach((el, i) => {
        if (!el) return;

        gsap.to(el, {
          y: -(i * 0.15 * window.innerHeight),
          ease: "none",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top bottom+=300",
            end: "top top",
            scrub: true,
          },
        });
      });
    });

    // Cleanup: this kills all triggers and animations created within mm.add
    return () => mm.revert();
  }, []);

  return (
    <section className="px-4 lg:px-0 mt-24 lg:mt-48 lg:w-6/7 md:mx-auto">
      {/* text content */}
      <div className="md:mx-12">
        <h1 className="text-[clamp(3rem,9vw,6.5rem)] md:text-[6.5vw] w-10/12 sm:w-full md:w-[34vw] font-bold leading-none">
          Content dat scoort.
        </h1>
        <p className="my-4 text-[4.9vw] sm:text-[clamp(16px,3vw,24px)] w-[80vw] sm:w-[65vw] md:w-[60vw] lg:max-w-sm font-bold">
          Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
          doelgroep. Met creatieve content die werkt en het verschil maakt.
        </p>
        <SkewBtn>
          <a className="group border tex-[2vw] sm:text-[clamp(8px,1.5vw,16px)] font-bold py-1 pr-1 pl-2 rounded-xl flex items-center gap-2">
            <span>Bekijk al ons werk</span>{" "}
            <span className="bg-black p-2.5 rounded-lg group-hover:rounded-xl transition-all">
              <FaArrowRight color="white" />
            </span>
          </a>
        </SkewBtn>
      </div>

      {/* cards */}
      <div
        ref={sectionRef}
        className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-[5vw] mt-16 mx-8 sm:mx-0 items-start"
      >
        {cards.map((card, i) => (
          <div
            key={card.brand}
            ref={(el) => (cardRefs.current[i] = el)}
            className="flex-1"
          >
            <motion.div
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              whileHover={{ rotate: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{ borderColor: card.color, marginBottom: `${i * 5}px` }}
              className={`group relative rounded-[7vw] sm:rounded-[3vw] sm:rotate-0 overflow-hidden border-[1.5vw] sm:border-[0.8vw] mb-[${i * 5}px]
            ${i % 2 === 0 ? "-rotate-3" : "rotate-3"}
              `}
            >
              {/* Background Video */}
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={card.video}
                className="w-full aspect-3/4 object-cover"
                loop
                muted
                playsInline
              />

              <div className="absolute bottom-0 left-0 right-0 h-[40%] flex items-end m-[clamp(0.5rem,1vw,1rem)]">
                <div className="relative w-full h-full">
                  <svg
                    viewBox="0 0 208 120"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 207.793 18.4091 V 104.8219 C 207.793 113.2049 200.998 120 192.615 120 H 16 C 5 120 0 115 0 105 V 39 C 0 33.8732 2.6933 30.6933 9 30 L 186.384 0.2518 C 197.596 -1.6049 207.793 7.0427 207.793 18.4049"
                      fill={card.color}
                    />
                  </svg>

                  {/* arrow btn */}
                  <button className="absolute top-[1.8vw] sm:top-[0.6vw] right-[1.8vw] sm:right-[0.6vw] bg-white rounded-full p-[2vw] sm:p-[0.6vw] overflow-hidden">
                    <div className="relative">
                      <span className="absolute inset-0 translate-y-full -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:translate-x-0">
                        <MdArrowOutward className="text-black text-[5vw] sm:text-[1.5vw]" />
                      </span>
                      <span className="absolute inset-0  translate-y-0 translate-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-full group-hover:-translate-y-full">
                        <MdArrowOutward className="text-black text-[5vw] sm:text-[1.5vw]" />
                      </span>

                      <MdArrowOutward className="text-white text-[5vw] sm:text-[1.5vw]" />
                    </div>
                  </button>

                  {/* title */}
                  <div className="absolute z-5 p-[3vw] sm:p-[1vw] bottom-0">
                    <h3 className="text-white font-bold text-[5vw] sm:text-[1.5vw] leading-tight whitespace-pre-line mb-[3vw] sm:mb-[0.5vw]">
                      {card.title}
                    </h3>

                    {/* btn */}
                    <button className="bg-white/40 text-[3vw] sm:text-[1vw] text-white sm:font-medium p-[1.5vw] sm:p-[0.5vw] rounded-lg">
                      {card.btn}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content;
