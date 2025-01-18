import { FC } from "react";
import Container from "@/components/container";
import { HeaderBtn } from "@/components/ui/customs";
import { LangSelectBtn } from "../../customs";
import Search from "@/components/ui/customs/search";
import "./_style.scss";

const HeaderBase: FC = () => {
  return (
    <header className="header">
      <Container>
        <div className="wrapper">
          {/* ------------------ Logo ------------------ */}
          <img className="optom-logo" src="/optom-logo.svg" alt="optom-logo" />
          {/* ------------------ Search ------------------ */}
       
          <Search
            className="py-[10.5px] px-4 !w-full"
            type="email"
            placeholder="I'm looking for..."
            suffix={"Find"}
          />
          {/* ------------------ Actions ------------------ */}
          <div className="actions">
            <HeaderBtn title="Basket" img="/assets/basket.svg" />
            <HeaderBtn title="Selected" img="/assets/heart.svg" />
            <HeaderBtn title="Cabinet" img="/assets/user.svg" />
            <LangSelectBtn />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderBase;
