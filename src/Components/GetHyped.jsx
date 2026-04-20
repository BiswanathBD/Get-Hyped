import React, { useRef, useEffect } from "react";
import SkewBtn from "./Shared/SkewBtn";
import { IoMail } from "react-icons/io5";
import gsap from "gsap";

const GetHyped = () => {
  const containerRef = useRef(null);
  const randomColors = ["#0d8dff", "#33c791", "#fa5424", "#fcb8fa"];

  const lastPos = useRef({ x: 0, y: 0 });
  const lastDir = useRef({ x: 0, y: 0 });
  const lastSpawnPos = useRef({ x: 0, y: 0 });
  const lastScrollPos = useRef(0);

  const createLogoInstance = (x, y, vx, vy) => {
    const color = randomColors[Math.floor(Math.random() * randomColors.length)];
    const logoDiv = document.createElement("div");

    logoDiv.className = "absolute z-10 pointer-events-none select-none";
    logoDiv.style.left = `${x}px`;
    logoDiv.style.top = `${y}px`;
    logoDiv.style.width = "15vw";
    logoDiv.style.transform = "translate(-50%, -50%)";

    logoDiv.innerHTML = `
      <svg viewBox="0 0 208 84" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M207.793 18.4091V68.8219C207.793 77.2049 200.998 84 192.615 84H7.46524C3.34207 84 0 80.6579 0 76.5348V37.5951C0 33.8732 2.69331 30.6933 6.36831 30.0829L186.384 0.251801C197.596 -1.60491 207.793 7.04266 207.793 18.4049" fill="${color}" />
         <path d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z" fill="black" />
         <path d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z" fill="white" />
         <path d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z" fill="white" />
         <path d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z" fill="white" />
         <path d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z" fill="white" />
         <path d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.989 13.3085L162.993 13.3042Z" fill="white" />
         <path d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z" fill="black" />
         <path d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z" fill="black" />
         <path d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 33.95 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z" fill="black" />
      </svg>
    `;

    containerRef.current.appendChild(logoDiv);

    gsap.fromTo(
      logoDiv,
      { scale: 0.2, opacity: 0, x: 0, y: 0, rotate: 0 },
      {
        scale: 1,
        opacity: 1,
        x: vx * 6,
        y: vy * 6,
        duration: 0.9,
        ease: "power3.out",
        onComplete: () => {
          gsap.to(logoDiv, {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            onComplete: () => logoDiv.remove(),
          });
        },
      },
    );
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      // 1. Check if scrolling is happening
      const currentScroll = window.scrollY;
      const isScrolling = currentScroll !== lastScrollPos.current;
      lastScrollPos.current = currentScroll;

      // If page is scrolling, don't create animation
      if (isScrolling) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dx = x - lastSpawnPos.current.x;
      const dy = y - lastSpawnPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const vx = x - lastPos.current.x;
      const vy = y - lastPos.current.y;

      const currentDirX = vx > 0 ? 1 : vx < 0 ? -1 : 0;
      const currentDirY = vy > 0 ? 1 : vy < 0 ? -1 : 0;

      const changedX = currentDirX !== 0 && currentDirX !== lastDir.current.x;
      const changedY = currentDirY !== 0 && currentDirY !== lastDir.current.y;

      if ((changedX || changedY) && distance > 150) {
        createLogoInstance(x, y, vx, vy);
        lastDir.current = { x: currentDirX, y: currentDirY };
        lastSpawnPos.current = { x, y };
      }

      lastPos.current = { x, y };
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="mt-[10vw] hidden sm:flex relative overflow-visible flex-col items-center justify-center bg-transparent">
      <div ref={containerRef} className="relative z-10 ">
        <h1 className="text-[clamp(4.5rem,6.4vw,6.4rem)] font-bold text-center select-none leading-none">
          Let's Get Hyped!
        </h1>
      </div>

      <div className="flex justify-center items-center gap-4 mt-12 z-20">
        <SkewBtn>
          <a className="group border text-[clamp(8px,1.5vw,16px)] font-semibold py-1 pr-1 pl-2 rounded-xl flex items-center gap-2 bg-white">
            <span>Mail ons direct</span>{" "}
            <span className="bg-black p-2.5 rounded-lg group-hover:rounded-xl transition-all">
              <IoMail color="white" />
            </span>
          </a>
        </SkewBtn>
        <SkewBtn>
          <a
            href="#"
            className="bg-[#fa5424] text-[clamp(8px,1.5vw,16px)] py-1.25 pl-2 pr-1.25 rounded-xl font-semibold text-white flex items-center gap-2 h-fit"
          >
            Get Results{" "}
            <span className="bg-white p-1.75 rounded-lg">🔥</span>
          </a>
        </SkewBtn>
      </div>
    </div>
  );
};

export default GetHyped;
