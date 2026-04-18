import { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "./Shared/Logo";
import NavIItemsAnimation from "./Shared/NavIItemsAnimation";
import SkewBtn from "./Shared/SkewBtn";

const Navbar = () => {
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
    <div
      ref={navRef}
      className="flex justify-between items-center mx-7 my-6 sticky top-6 z-50"
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
    </div>
  );
};

export default Navbar;
