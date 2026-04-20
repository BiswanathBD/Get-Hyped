import { useRef, useState } from "react";
import gsap from "gsap";
import salonVideo from "../assets/Loop-Salontopper.mp4";
import petrolheadVideo from "../assets/petrolhead-loop.mp4";

function randomRotation(min, max) {
  const degree = Math.random() * (max - min) + min;
  const direction = Math.random() < 0.5 ? 1 : -1;
  return degree * direction;
}

const cards = [
  {
    type: "stat",
    bg: "#0d8dff",
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
    bg: "#34D399",
    stat: "30+",
    title: "Merken geholpen",
    sub: "Van start-up tot multinational",
  },
  {
    type: "video",
    src: petrolheadVideo,
  },
];

function HeroCard({ card, isFirst, isLast }) {
  const cardRef = useRef(null);
  const [startRotation] = useState(() => randomRotation(2, 7));

  function handleMouseEnter() {
    gsap.to(cardRef.current, {
      rotation: 0,
      scale: 1.1,
      marginLeft: isFirst ? 0 : 64,
      marginRight: isLast ? 0 : 64,
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
    width: "calc((100% - (var(--cols) - 1) * 1px) / var(--cols))",
    aspectRatio: "3 / 4",
    position: "relative",
    zIndex: 1,
    transform: `rotate(${startRotation}deg)`,
    backgroundColor: card.bg ?? undefined,
    ...(card.type === "stat" && {
      padding: "0 1.6vw 1.6vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: "#000",
    }),
  };

  return (
    <div
      ref={cardRef}
      className="rounded-[3vw] shrink-0 overflow-hidden"
      style={wrapperStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {card.type === "stat" ? (
        <>
          <span
            style={{ fontSize: "clamp(2rem, 5vw, 5rem)", fontWeight: 600 }}
          >
            {card.stat}
          </span>
          <div>
            <p className="font-semibold text-lg sm:text-2xl border-b-2 mb-1 pb-1">
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
    <div className="hero-cards flex items-center px-8 mt-8" style={{ "--cols": 2 }}>
      <style>{`
        @media (min-width: 768px)  { .hero-cards { --cols: 3 !important; } }
        @media (min-width: 1024px) { .hero-cards { --cols: 4 !important; } }
      `}</style>

      <HeroCard card={cards[0]} isFirst isLast={false} />
      <HeroCard card={cards[1]} isFirst={false} isLast={false} />

      <span className="hidden md:contents">
        <HeroCard card={cards[2]} isFirst={false} isLast={false} />
      </span>

      <span className="hidden lg:contents">
        <HeroCard card={cards[3]} isFirst={false} isLast />
      </span>
    </div>
  );
}

export default HeroCards;
