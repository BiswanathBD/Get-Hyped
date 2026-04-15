import { useState } from "react";
import { useSpring, useTransform, motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import salonVideo from "../assets/Loop Salontopper.mp4";
import petrolheadVideo from "../assets/petrolhead-loop.mp4";

const randomRotation = (min, max) =>
  (Math.random() * (max - min) + min) * (Math.random() < 0.5 ? 1 : -1);

const springConfig = { stiffness: 300, damping: 20, mass: 0.8 };
const marginSpringConfig = { stiffness: 280, damping: 22, mass: 0.8 };

const HeroCard = ({
  children,
  initialRotation,
  isFirst,
  isLast,
  className = "",
}) => {
  const [rotation, setRotation] = useState(initialRotation);

  const rotateSpring = useSpring(rotation, springConfig);
  const scaleSpring = useSpring(1, springConfig);
  const marginLSpring = useSpring(0, marginSpringConfig);
  const marginRSpring = useSpring(0, marginSpringConfig);

  const rotateValue = useTransform(rotateSpring, (v) => `${v}deg`);
  const marginLValue = useTransform(marginLSpring, (v) => `${v}px`);
  const marginRValue = useTransform(marginRSpring, (v) => `${v}px`);

  const handleMouseEnter = () => {
    rotateSpring.set(0);
    scaleSpring.set(1.08);
    if (!isFirst) marginLSpring.set(64);
    if (!isLast) marginRSpring.set(64);
  };

  const handleMouseLeave = () => {
    const next = randomRotation(2, 7);
    setRotation(next);
    rotateSpring.set(next);
    scaleSpring.set(1);
    marginLSpring.set(0);
    marginRSpring.set(0);
  };

  return (
    <motion.div
      className={`rounded-2xl overflow-hidden cursor-pointer shrink-0 ${className}`}
      style={{
        rotate: rotateValue,
        scale: scaleSpring,
        marginLeft: marginLValue,
        marginRight: marginRValue,
        zIndex: 1,
        width: "calc((100% - 3 * 12px) / 4)",
        aspectRatio: "3 / 4",
      }}
      whileHover={{ zIndex: 10 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

const CARDS = [
  {
    type: "stat",
    bg: "bg-[#3B82F6]",
    stat: "10M+",
    title: "Organische views",
    sub: "Groei door slimme content",
  },
  { type: "video", src: salonVideo },
  {
    type: "stat",
    bg: "bg-[#34D399]",
    stat: "30+",
    title: "Merken geholpen",
    sub: "Van start-up tot multinational",
  },
  { type: "video", src: petrolheadVideo },
];

const Hero = () => {
  const initialRotations = useState(() =>
    Array.from({ length: CARDS.length }, () => randomRotation(2, 7)),
  )[0];

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

      {/* Hero cards */}
      <div className="m-12 flex items-center px-8">
        {CARDS.map((card, i) => (
          <HeroCard
            key={i}
            initialRotation={initialRotations[i]}
            isFirst={i === 0}
            isLast={i === CARDS.length - 1}
            className={
              card.type === "stat"
                ? `${card.bg} text-black p-5 flex flex-col justify-between`
                : "bg-black"
            }
          >
            {card.type === "stat" ? (
              <>
                <span className="text-4xl font-bold">{card.stat}</span>
                <div>
                  <p className="font-semibold text-base">{card.title}</p>
                  <p className="text-sm opacity-70">{card.sub}</p>
                </div>
              </>
            ) : (
              <video
                src={card.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </HeroCard>
        ))}
      </div>
    </section>
  );
};

export default Hero;
