import { FC } from "react";
import { RiHeart3Line } from "react-icons/ri";
import Btn from "../btn";
import "./_style.scss";

interface PropsI{
  img: string;
  title: string;
  price: string;
}

const Card: FC<PropsI> = ({img, title, price}) => {
  return (
    <div className="card">
      <img className="mx-auto mb-4 h-[195px]" src={img} alt="shower" />
      <RiHeart3Line className="absolute top-[50%] right-0 text-[24px] font-bold" />

      <div className="card__content">
        <p className="card__content--title">{title}</p>
        <span className="card__content--price">{price} сум</span>
        <Btn/>
      </div>
    </div>
  );
};

export default Card;
