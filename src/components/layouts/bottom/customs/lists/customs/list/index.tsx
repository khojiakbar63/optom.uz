import { FC } from "react";
import "./_style.scss";

interface PropsI {
  item: string;
}
const List: FC<PropsI> = ({ item }) => {
  return (
    <ul className="flex flex-col gap-[20px]">
      <li className="font-[400] text-[#01011B] text-[14px] leading-[19px] cursor-pointer">
        <a href="#">{item}</a>
      </li>
    </ul>
  );
};

export default List;
