import Logo from "./Shared/Logo";
import NavIItemsAnimation from "./Shared/NavIItemsAnimation";
import SkewBtn from "./Shared/SkewBtn";

const Navbar = () => {
  const navigationLinks = ["Expertise", "Work", "About", "Contact"];
  return (
    <div className="flex justify-between items-center mx-8 my-6">
      <Logo />

      {/* Navigation links */}
      <nav className="hidden lg:flex gap-1 bg-white p-1 rounded-lg font-bold text-sm">
        {navigationLinks.map((link) => (
          <NavIItemsAnimation key={link}>{link}</NavIItemsAnimation>
        ))}
      </nav>

      {/* get results button */}
      <div className="hidden lg:block">
        <SkewBtn>
          <a
            href="/results"
            className="bg-fuchsia-300 py-3 pl-2 pr-1 rounded-lg font-bold"
          >
            Get Results <span className="bg-white p-2 rounded-md">🔥</span>
          </a>
        </SkewBtn>
      </div>
    </div>
  );
};

export default Navbar;
