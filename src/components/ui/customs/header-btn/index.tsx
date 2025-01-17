import { FC, ReactNode } from "react";
import "./_style.scss";

interface PropsI {
  title: ReactNode;
  img: string;
}
const HeaderBtn: FC<PropsI> = ({ title, img }) => {
  return (
    <button className="item">
      <img className="img" src={img} alt="basket" />
      <p className="text">{title}</p>
    </button>
  );
};

export default HeaderBtn;
