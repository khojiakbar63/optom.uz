import { FC } from "react";
import "./_style.scss";
import Container from "@/components/container";

const Footer: FC = () => {
  return (
    <div className="bg-[#8BB239]   text-white">
      <Container>
        <div className="h-[64px] flex gap-10 items-center justify-center">
          <span className="text-[#C4C2C2]">Become a seller on Optom.uz</span>
          <button className="bg-[#FFD400] text-[#000] text-[14px] font-[700] px-[17px] py-[9px] rounded-[8px]">Sign up now</button>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
