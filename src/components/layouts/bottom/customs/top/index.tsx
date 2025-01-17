import { FC } from "react";
import "./_style.scss";
import Button from "./customs/button";

const Top: FC = () => {
  return (
    <div className="flexer">
      <div className="box">
        <img src="/market.png" alt="market" />
        <div className="box__content">
          <p className="title">Want to sell on optom.uz?</p>
          <Button />
        </div>
      </div>

      <div className="box">
        <img className="w-[30px] h-[30px" src="/check.svg" alt="check" />
        <div className="box__content">
          <p className="title">Customer protection program</p>
          <p className="desc">
            Optom. Uz provides protection for purchases up to 1 500 000 sum.
            Order through the basket.
          </p>
        </div>
      </div>

      <div className="box">
        <span></span>
        <div className="links">
          <a className="link" href="#">
            Go to the company office
          </a>
          <a className="link" href="#">
            Go to your personal area
          </a>
        </div>
      </div>
    </div>
  );
};

export default Top;
