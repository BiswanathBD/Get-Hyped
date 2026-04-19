import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion } from "framer-motion"; // eslint-disable-line
import "swiper/css";
import "swiper/css/free-mode";

// brands logos
import knltb from "../assets/brands/6849d81e72e08110e3fd1a17_knltb.svg";
import SRHK from "../assets/brands/6849d838fc5735f090bd9843_SRHK.svg";
import fides from "../assets/brands/6849d85341bf0d7476e56a8c_fides.svg";
import graafschapCollege from "../assets/brands/6849d86cd6ba384af3c14e58_graafschap-college.svg";
import seesingFlex from "../assets/brands/6849d880bed5996600cbc586_seesing-flex.svg";
import salontopper from "../assets/brands/6849d88f755388cc2c74ecff_salontopper.svg";
import tho from "../assets/brands/684b062ebc242028ca4b3ea1_tho.svg";
import talententuin from "../assets/brands/684c05642bf8f5cea7384403_de-talententuin.svg";
import morssinkhof from "../assets/brands/68c194e6d1b186563459b107_morssinkhof.svg";
import zclv from "../assets/brands/68c1952f22281ee50d3620b5_zclv.svg";
import Bullit from "../assets/brands/69241146b4df63c4ca966552_Bullit Digital.svg";

const brands = [
  knltb,
  SRHK,
  fides,
  graafschapCollege,
  seesingFlex,
  salontopper,
  tho,
  talententuin,
  morssinkhof,
  zclv,
  Bullit,
];

const brandRotations = brands.map(() => {
  const value = Math.random() * 5 + 1;
  return value * (Math.random() > 0.5 ? 1 : -1);
});

const Brands = () => {
  const [isGrab, setIsGrab] = useState(false);

  return (
    <div>
      <h2 className="mx-[clamp(1rem,5vw,2rem)] mt-16 lg:mt-32 text-[8vw] max-w-[60vw] sm:text-[6vw] sm:max-w-full lg:text-[4.2vw] font-semibold lg:max-w-[30vw] leading-none">
        These brands got hyped.
      </h2>

      <div className="pb-[6vw] pt-[4vw] overflow-hidden">
        <Swiper
          onTouchStart={() => setIsGrab(true)}
          onTouchEnd={() => setIsGrab(false)}
          className="cursor-grab active:cursor-grabbing overflow-visible!"
          modules={[Autoplay, FreeMode]}
          spaceBetween={"1%"}
          slidesPerView={4.8}
          speed={3000}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumVelocityRatio: 0,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
        >
          {brands.map((brand, i) => (
            <SwiperSlide key={i}>
              <motion.div
                style={{
                  transformOrigin: "bottom left",
                }}
                animate={{
                  rotate: isGrab
                    ? brandRotations[i % brandRotations.length]
                    : 0,
                  scale: isGrab ? 0.95 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                <img
                  src={brand}
                  alt={`Brand ${i + 1}`}
                  className="w-[20vw] aspect-square object-contain border border-neutral-400 rounded-[1vw] mx-[0.5vw] bg-[#faf4ec]"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mb-[4vw] h-0.5 mx-4 md:mx-8 bg-neutral-300" />
    </div>
  );
};

export default Brands;
