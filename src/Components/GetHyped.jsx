import React from "react";
import SkewBtn from "./Shared/SkewBtn";
import { IoMail } from "react-icons/io5";

const GetHyped = () => {
  return (
    <div className="mt-[20vw] hidden sm:block">
      <h1 className="text-[clamp(4.5rem,6.4vw,6.4rem)] font-bold mx-4 text-center">
        Let's Get Hyped!
      </h1>

      <div className="flex justify-center items-center gap-4">
        <SkewBtn>
          <a className="group border tex-[2vw] sm:text-[clamp(8px,1.5vw,16px)] font-semibold py-1 pr-1 pl-2 rounded-xl flex items-center gap-2">
            <span>Mail ons direct</span>{" "}
            <span className="bg-black p-2.5 rounded-lg group-hover:rounded-xl transition-all">
              <IoMail color="white" />
            </span>
          </a>
        </SkewBtn>
        <SkewBtn>
          <a
            href="#"
            className="bg-[#fa5424] py-3 pl-2 pr-1 rounded-xl font-semibold text-white"
          >
            Get Results <span className="bg-white p-2 rounded-lg">🔥</span>
          </a>
        </SkewBtn>
      </div>
    </div>
  );
};

export default GetHyped;
