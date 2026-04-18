import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Logo from "./Shared/Logo";
import NavIItemsAnimation from "./Shared/NavIItemsAnimation";
import SkewBtn from "./Shared/SkewBtn";
import { Cross as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
motion;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigationLinks = ["Expertises", "Work", "About", "Contact"];

  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  // hide and show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const change = currentY - lastScrollY.current;

      if (change > 5) {
        gsap.to(navRef.current, {
          y: -100,
          duration: 0.4,
          ease: "power3.out",
          overwrite: true,
        });
      } else if (change < -5) {
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          overwrite: true,
        });
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        ref={navRef}
        className="flex justify-between items-center mx-[4vw] md:mx-7 my-8 lg:my-4 sticky top-6 z-20"
      >
        <Logo />

        {/* Navigation links */}
        <nav className="hidden lg:flex gap-1 bg-white p-1 rounded-xl font-semibold text-sm">
          {navigationLinks.map((link) => (
            <NavIItemsAnimation key={link}>{link}</NavIItemsAnimation>
          ))}
        </nav>

        {/* get results button */}
        <div className="hidden lg:block">
          <SkewBtn>
            <a
              href="#"
              className="bg-[#fcb8fa] py-3 pl-2 pr-1 rounded-xl font-medium"
            >
              Get Results <span className="bg-white p-2 rounded-lg">🔥</span>
            </a>
          </SkewBtn>
        </div>

        {/* hamburger menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-xl z-50 lg:hidden ${isOpen ? "bg-white" : "bg-[#f0abfc] transition-all"}`}
        >
          <Hamburger direction="right" size={20} />
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ y: "-110vh", rotate: 16 }}
              animate={{ y: 0, rotate: 0 }}
              exit={{ y: "-110vh", rotate: -6 }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="fixed lg:hidden inset-0 m-[2vw] w-[calc(100%-4vw)] h-[calc(100%-4vw)] bg-[#f0abfc] p-[1vw] z-10 rounded-2xl"
            ></motion.div>

            <div className="fixed lg:hidden my-20 inset-0 z-20 text-2xl font-bold flex flex-col gap-2 justify-center items-center">
              {navigationLinks.map((nav, i) => (
                <motion.button
                  key={i}
                  initial={{ scale: 0, opacity: 0, y: -40 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0, opacity: 0, y: -40 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: i * 0.02,
                  }}
                  className="bg-white px-5 py-3 rounded-2xl z-50"
                >
                  {nav}
                </motion.button>
              ))}
            </div>

            {/* get results button */}
            <motion.button
              initial={{ y: "300%" }}
              animate={{ y: 0 }}
              exit={{ y: "300%" }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="fixed lg:hidden left-1/2 -translate-x-1/2 bottom-[8vw] z-20 bg-black text-white py-3 pl-3 pr-1.5 rounded-xl font-semibold"
            >
              Get Results <span className="bg-white p-2 rounded-lg">🔥</span>
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
