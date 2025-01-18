import { FC } from "react";
import { AllCategory, Compare, NeedHelp, TrackOrder } from "./customs";
import Container from "@/components/container";
import CustomerSupport from "./customs/support";
import { PiPhoneCall } from "react-icons/pi";
import "./_style.scss";

const HeaderBottom: FC = () => {
  return (
    <div className="header-bottom border-b border-gray-200 flex">
      <Container>
        <div className="flex items-center lg:justify-between h-[40px] gap-2">
          {/* Left Section */}
          <div className="flex items-center gap-2 ">
            <AllCategory />
            <TrackOrder />
            <Compare />
            <CustomerSupport />
            <NeedHelp />
          </div>

          {/* Right Section */}
          <a
            className="flex items-center gap-[2px] text-[9px] lg:text-[18px] font-medium text-blue-600 hover:text-blue-800 transition"
            href="tel:+998999999909"
            aria-label="Call us at +998 99 999 99 09"
          >
            <PiPhoneCall className=" text-[9px] sm:text-[28px]" />
            <span className="lg:hidden">Call</span>
            <span className="hidden lg:inline">+998 99 999 99 09</span>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default HeaderBottom;
