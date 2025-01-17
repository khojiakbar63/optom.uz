import { FC } from "react";
import "./_style.scss";
import { Card } from "./customs";
import { forYou_db } from "@/db/for-you";

const ForYou: FC = () => {
  return (
    <div className="for_you">
      <p className="title">For you,</p>
      <div className="flex gap-[32px] overflow-x-auto">
        {
        forYou_db.map((item) =>(
          <Card title={item.title} img={item.img} price={item.price} key={item.id}/>
          ))
        }

      </div>
    </div>
  );
};

export default ForYou;
