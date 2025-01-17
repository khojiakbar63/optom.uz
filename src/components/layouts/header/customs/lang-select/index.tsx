import { FC, useState } from "react";
import { LuEye } from "react-icons/lu";
import "./_style.scss";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger
} from "@/components/ui/select";
import { lang_data } from "@/db/langs";

interface PropsI {
  className?: string;
}


const LangSelectBtn: FC<PropsI> = () => {
  const [selectedLang, setSelectedLang] = useState("EN");

  return (
    <Select onValueChange={(value) => {
        // Update the selected language
        setSelectedLang(value.toUpperCase());
      }}>
      {/* Custom Trigger */}
      <SelectTrigger showIcon={false} className="w-fit border-none shadow-none flex gap-[5px] font-[700] text-[24px]">
       <span>{selectedLang.slice(0, 2)}</span>

        <LuEye className="text-[24px] text-[var(--green-40)]" />
      </SelectTrigger>

      {/* Content */}
      <SelectContent className="w-[180px] bg-white">
        <SelectGroup>
          {

            lang_data.map((item, index) => (
              <SelectItem value={item.title} key={index}>
                <img
                  src={item.flag}
                  alt={item.title}
                  className="w-5 h-5 inline-block mr-2 rounded-full"
                />
                {item.title}
              </SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LangSelectBtn;
