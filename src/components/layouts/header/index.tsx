import { FC } from "react";
import { HeaderBase, HeaderBottom, HeaderTop } from "./layouts";

const Header: FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white">
      <HeaderTop />
      <div className="flex  flex-col-reverse lg:flex-col">
        <HeaderBase />
        <HeaderBottom />
      </div>
    </div>
  );
};

export default Header;
