import { useState } from "react";

const Footer = () => {
  const [borderColour, setBorderColour] = useState("border-white");

  return (
    <div className="footer flex flex-col items-center gap-2">
      <span className="font-medium">Powered by</span>
      <span
        className={`py-[0.4rem] px-[1rem] border-2 border-dashed rounded-xl ${borderColour} transition-all duration-300 ease-in-out`}
      >
        <a
          className="text-blue-300 hover:text-blue-400 font-bold"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/dakshchoudhary"
          onMouseEnter={() => setBorderColour("border-blue-500")}
          onMouseLeave={() => setBorderColour("border-white")}
          >
          @Daksh Choudhary{" "}
        </a>
        <a
          className="text-red-400 hover:text-red-500 font-bold"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/zeroone-network/"
          onMouseEnter={() => setBorderColour("border-red-600")}
          onMouseLeave={() => setBorderColour("border-white")}
          >
          @ZeroOne Network
        </a>
      </span>
    </div>
  );
};

export default Footer;
