import { FC } from "react";
import { AllCategory, Compare, NeedHelp, TrackOrder } from "./customs";
import Container from "@/components/container";
import CustomerSupport from "./customs/support";
import { PiPhoneCall } from "react-icons/pi";
import './_style.scss'

const HeaderBottom: FC = () => {
  return (
    <div className="header-bottom">
      <Container>
        <div className="!px-10 flex items-center justify-between h-[60px]">
          <div className="flex items-center">
            <AllCategory />
            <TrackOrder />
            <Compare />
            <CustomerSupport />
            <NeedHelp />
          </div>

          <a className="flex items-center gap-2 text-[18px]" href="tel:+998 99 999 99 09">
            <PiPhoneCall className="text-[28px]"/>
            +998 99 999 99 09
          </a>
        </div>
      </Container>
    </div>
  );
};

export default HeaderBottom;
