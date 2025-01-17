import { FC } from "react";
import "./_style.scss";
import List from "./customs/list";
import { list_four_db, list_one_db, list_three_db, list_two_db } from "@/db/lists";

const Lists: FC = () => {
  return (
    <ul className="flex items-start justify-around mt-[50px]">
      {/* List One */}
      <div className="flex flex-col gap-[20px]">
        <p className="font-bold text-[#01011B] text-[14px] leading-[19px]">
          To our customers
        </p>
        {list_one_db.map((item) => (
          <List key={item.id} item={item.listItem} />
        ))}
      </div>

      {/* List Two */}
      <div className="flex flex-col gap-[20px]">
        <p className="font-bold text-[#01011B] text-[14px] leading-[19px]">
          To the sellers
        </p>
        {list_two_db.map((item) => (
          <List key={item.id} item={item.listItem} />
        ))}
      </div>

      {/* List Three */}
      <div className="flex flex-col gap-[20px]">
        <p className="font-bold text-[#01011B] text-[14px] leading-[19px]">
        About us
        </p>
        {list_three_db.map((item) => (
          <List key={item.id} item={item.listItem} />
        ))}
      </div>


      {/* List Four */}
      <div className="flex flex-col gap-[20px]">
        <p className="font-bold text-[#01011B] text-[14px] leading-[19px]">
        Partners & partners
        </p>
        {list_four_db.map((item) => (
          <List key={item.id} item={item.listItem} />
        ))}
      </div>

    </ul>
  );
};

export default Lists;
