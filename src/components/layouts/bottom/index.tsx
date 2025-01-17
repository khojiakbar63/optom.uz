import Container from "@/components/container";
import { FC } from "react";
import { Top, Actions, Lists } from "./customs";
import "./_style.scss";

const Bottom: FC = () => {
  return (
    <div className="bottom">
      <Container>
        <div className="wrapper">
          <Top />
          <Lists />
          <Actions />
        </div>
      </Container>
    </div>
  );
};

export default Bottom;
