import React from "react";
import SkewBtn from "./Shared/SkewBtn";
import NavIItemsAnimation from "./Shared/NavIItemsAnimation";
import icon from "../assets/icon.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const navigationLinks = ["Expertises", "Work", "About", "Contact"];

  return (
    <footer className="relative w-full px-4 md:px-8 z-12">
      {/* small screen logo section */}
      <div className="relative sm:hidden w-full">
        <svg
          viewBox="0 0 208 84"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full -z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M207.793 18.4049c0-11.3622-10.197-20.0098-21.409-18.1531L8 29c-5 1-8 4-8 9V84s0 0 0 0H208s0 0-.207 0V18.4091"
            fill="#eae4d8"
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg>

        <div className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 208 84"
            fill="none"
            className="w-full h-auto drop-shadow-sm"
          >
            <path
              d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z"
              fill="black"
            ></path>
            <path
              d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z"
              fill="white"
            ></path>
            <path
              d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z"
              fill="white"
            ></path>
            <path
              d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z"
              fill="white"
            ></path>
            <path
              d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z"
              fill="white"
            ></path>
            <path
              d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.989 13.3085L162.993 13.3042Z"
              fill="white"
            ></path>
            <path
              d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z"
              fill="black"
            ></path>
            <path
              d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z"
              fill="black"
            ></path>
            <path
              d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 33.95 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z"
              fill="black"
            ></path>
          </svg>
        </div>
      </div>

      {/* sm+ screen logo section */}
      <div className="relative hidden sm:block w-full -mb-4">
        <svg
          viewBox="0 0 208 47"
          preserveAspectRatio="none"
          className="w-full -z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 208 6 c 0 -6 -4 -5 -10 -4 L 2 35 c -2 1 -2 1 -2 4 V 49 s 0 0 0 0 H 208 s 0 0 0 0 V 6"
            fill="#eae4d8"
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg>

        <div className="w-[20vw] absolute left-[0.2vw] bottom-[0.5vw]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 208 80"
            fill="none"
            className="w-full h-auto drop-shadow-sm"
          >
            <path
              d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z"
              fill="black"
            ></path>
            <path
              d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z"
              fill="white"
            ></path>
            <path
              d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z"
              fill="white"
            ></path>
            <path
              d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z"
              fill="white"
            ></path>
            <path
              d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z"
              fill="white"
            ></path>
            <path
              d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.989 13.3085L162.993 13.3042Z"
              fill="white"
            ></path>
            <path
              d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z"
              fill="black"
            ></path>
            <path
              d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z"
              fill="black"
            ></path>
            <path
              d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 33.95 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z"
              fill="black"
            ></path>
          </svg>
        </div>

        {/* sticker */}
        <img
          src={icon}
          alt="sticker"
          className="stickerIcon absolute w-[clamp(4rem,20vw,7.5rem)] -top-[3vw] right-[8vw]"
        />
      </div>

      {/* footer content */}
      <div className="lg:absolute right-[3vw] bottom-[1vw]">
        <div className="bg-[#eae4d8] lg:bg-transparent -mt-px pt-8 sm:pt-4 w-full flex flex-col sm:flex-row gap-[4vw] sm:gap-[10vw] lg:gap-16 px-[4vw] sm:items-center">
          {/* get hyped btn for mobile only */}
          <div className="sm:hidden flex justify-center mt-4">
            <SkewBtn>
              <a
                href="#"
                className="bg-[#fa5424] py-3 pl-2 text-[clamp(1rem,2vw,2rem)] pr-1 rounded-xl font-semibold text-white"
              >
                Get Hyped! Neem contact op{" "}
                <span className="bg-white p-2 rounded-lg">🔥</span>
              </a>
            </SkewBtn>
          </div>

          <div>
            {/* navigation links */}
            <nav className="flex gap-2 justify-center text-[clamp(0.6rem,2.5vw,2rem)] lg:text-[clamp(0.5rem,1vw,0.9rem)] font-semibold mt-4 sm:mt-6 md:mt-8 lg:mt-0">
              {navigationLinks.map((link) => (
                <NavIItemsAnimation key={link}>{link}</NavIItemsAnimation>
              ))}
            </nav>

            {/* social links */}
            <div className="flex justify-center sm:justify-start items-center gap-2 text-[clamp(1rem,2vw,2.2rem)] lg:text-[clamp(0.6rem,1.2vw,1rem)] mt-4 lg:mt-[1.5vw] sm:mt-6 font-bold">
              <span className="hidden sm:block">Follow Us</span>
              <span className="p-3 lg:p-[0.8vw] bg-white rounded-full hover:scale-105 transition-all">
                <FaLinkedinIn />
              </span>
              <span className="p-3 lg:p-[0.8vw] bg-white rounded-full hover:scale-105 transition-all">
                <FaTiktok />
              </span>
              <span className="p-3 lg:p-[0.8vw] bg-white rounded-full hover:scale-105 transition-all">
                <FaInstagram />
              </span>
              <span className="p-3 lg:p-[0.8vw] bg-white rounded-full hover:scale-105 transition-all">
                <FaYoutube />
              </span>
            </div>
          </div>

          {/* contact */}
          <div className="text-center sm:text-left text-[clamp(1rem,2vw,1.8rem)]  lg:text-[0.8vw] font-medium flex flex-col gap-[1vw]">
            <p className="flex flex-col">
              <span className="font-bold hidden sm:block text-[clamp(1.2rem,2vw,2.2rem)] lg:text-[1vw]">
                Contact
              </span>
              <span>info@gethyped.nl</span>
              <span>+31 6 1533 7496</span>
            </p>

            <p className="flex flex-col">
              <span className="font-bold hidden sm:block text-[clamp(1.2rem,2vw,2.2rem)] lg:text-[1vw]">
                Adres
              </span>
              <span>Beltrumsestraat 6,</span>
              <span>7141 AL Groenlo</span>
            </p>
          </div>
        </div>

        <div className="bg-[#eae4d8] lg:bg-transparent flex flex-col sm:flex-row-reverse justify-center sm:justify-end items-center text-[clamp(0.8rem,1vw,1rem)] lg:text-[0.8vw] text-neutral-500 pt-4 pb-4 lg:pt-[1vw] lg:pb-0 px-[4vw] gap-[2vw] sm:gap-[12vw] lg:gap-4 lg:justify-between">
          <p>Privacyvoorwaarden</p>
          <p className="sm:hidden">© 2025 Get Hyped</p>
          <p>© Design by Dylan</p>
          <p className="hidden sm:block">© 2025 Get Hyped</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
