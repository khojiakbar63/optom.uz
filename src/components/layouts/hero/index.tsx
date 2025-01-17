import { FC } from "react";
import Container from "@/components/container";
import { Banner, Create, Menu } from "./customs";
import Services from "./customs/services";
import "./_style.scss";

const Hero: FC = () => {
  return (
    <div className="hero">
      <Container>
        <div className="hero--content">
          <Menu />
          <Banner />
          <Create />
        </div>
      </Container>
      <Services />
    </div>
  );
};

export default Hero;
