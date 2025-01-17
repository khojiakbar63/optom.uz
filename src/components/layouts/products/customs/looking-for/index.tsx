import { FC } from "react";
import { lookingFor_db } from "@/db/looking-for";
import "./_style.scss";

const LookingFor: FC = () => {
  return (
    <div className="looking_for">
      <p className="title mt-[32px]">What are they looking for?</p>

      {/* Parent container with baseline alignment */}
      <div className="flex items-center flex-wrap">
        {lookingFor_db.map((item) => {
          // Replace "</br>" with <br /> in the title
          const titleWithBreak = item.title.includes("</br>")
            ? item.title.replace(/<\/br>/g, "<br />")
            : item.title;

          return (
            <div
              style={{ width: `${item.width}px` }}
              className="text-[#0670EB] text-[14px] font-[400] h-[64px] flex items-center justify-center px-[24px] py-[16px] cursor-pointer hover:text-[green] active:text-[#0670EB]"
              key={item.id}
              dangerouslySetInnerHTML={{ __html: titleWithBreak }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LookingFor;
