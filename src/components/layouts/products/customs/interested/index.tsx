import { FC } from "react";
import { Card } from "./customs";
import { interested_db } from "@/db/interested";
import "./_style.scss";

const Interested: FC = () => {
  return (
    <div className="interested">
      <p className="title">You'll be interested.</p>

      <div className="flex gap-[32px] overflow-x-auto scrollbar-hide">
        {interested_db.map((item) => (
          <Card title={item.title} img={item.img} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Interested;
