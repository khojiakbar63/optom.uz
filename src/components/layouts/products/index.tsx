import { FC } from "react";
import { ForYou, Interested, LookingFor } from "./customs";
import Container from "@/components/container";
import "./_style.scss";

const Products: FC = () => {
  return (
    <div>
      <Container>
        <div className="border border-[#000] px-[20px] pb-[20px]">
          <Interested />
          <ForYou />
          <LookingFor />
        </div>
      </Container>
    </div>
  );
};

export default Products;
