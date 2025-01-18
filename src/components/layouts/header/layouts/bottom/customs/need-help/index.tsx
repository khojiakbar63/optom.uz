import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NeedHelp: FC = () => {
  return (
    <Select>
      <SelectTrigger
        className="flex items-center text-[9px] sm:text-[14px] text-[var(--text-1F)] w-fit sm:w-fit h-[40px] sm:h-[48px] lg:px-[12px] sm:px-[24px] border-none hover:bg-[var(--light-grey)] focus:bg-[var(--light-grey)]"
        showIcon={false}
      >
        <img className="w-3 sm:w-6 mr-[2px]" src="/info.svg" alt="info" />
        <SelectValue placeholder="Need Help" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectItem value="one">Support One</SelectItem>
        <SelectItem value="two">Support Two</SelectItem>
        <SelectItem value="three">Support Three</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default NeedHelp;
