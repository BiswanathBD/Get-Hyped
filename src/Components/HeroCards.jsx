import { useRef, useState } from "react";
import gsap from "gsap";
import salonVideo from "../assets/Loop Salontopper.mp4";
import petrolheadVideo from "../assets/petrolhead-loop.mp4";

function randomRotation(min, max) {
  const degree = Math.random() * (max - min) + min;
  const direction = Math.random() < 0.5 ? 1 : -1;
  return degree * direction;
}

const CARDS = [
  {
    type: "stat",
    bg: "#3B82F6", // blue
    stat: "10M+",
    title: "Organische views",
    sub: "Groei door slimme content",
  },
  {
    type: "video",
    src: salonVideo,
  },
  {
    type: "stat",
    bg: "#34D399", // green
    stat: "30+",
    title: "Merken geholpen",
    sub: "Van start-up tot multinational",
  },
  {
    type: "video",
    src: petrolheadVideo,
  },
];

const HOVER_MARGIN = 64;
const HOVER_SCALE = 1.1;

function HeroCard({ card, isFirst, isLast }) {
  const cardRef = useRef(null);

  const [startRotation] = useState(() => randomRotation(2, 7));

  function handleMouseEnter() {
    gsap.to(cardRef.current, {
      rotation: 0,
      scale: HOVER_SCALE,
      marginLeft: isFirst ? 0 : HOVER_MARGIN,
      marginRight: isLast ? 0 : HOVER_MARGIN,
      zIndex: 10,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  }

  function handleMouseLeave() {
    gsap.to(cardRef.current, {
      rotation: randomRotation(2, 7),
      scale: 1,
      marginLeft: 0,
      marginRight: 0,
      zIndex: 1,
      duration: 0.5,
      ease: "back.out(1.4)",
    });
  }

  const wrapperStyle = {
    width: "calc((100% - 3 * 12px) / 4)",
    aspectRatio: "3 / 4",
    position: "relative",
    zIndex: 1,
    transform: `rotate(${startRotation}deg)`,
    backgroundColor: card.bg ?? undefined,
    ...(card.type === "stat" && {
      padding: "1.25rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: "#000",
    }),
  };

  return (
    <div
      ref={cardRef}
      className="rounded-2xl cursor-pointer shrink-0 overflow-hidden"
      style={wrapperStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {card.type === "stat" ? (
        <>
          <span
            style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", fontWeight: 700 }}
          >
            {card.stat}
          </span>
          <div>
            <p className="font-semibold text-2xl border-b-2 mb-1 pb-1">
              {card.title}
            </p>
            <p className="text-base opacity-70">{card.sub}</p>
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
    </div>
  );
}

function HeroCards() {
  return (
    <div className="flex items-center px-8">
      {CARDS.map((card, index) => (
        <HeroCard
          key={index}
          card={card}
          isFirst={index === 0}
          isLast={index === CARDS.length - 1}
        />
      ))}
    </div>
  );
}

export default HeroCards;
