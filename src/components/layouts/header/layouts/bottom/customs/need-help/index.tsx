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
        className=" text-[var(--text-1F)] w-fit h-[48px] px-[24px] border-none hover:bg-[var(--light-grey)] focus:bg-[var(--light-grey)]"
        showIcon={false}
      >
        <img className="w-6 mr-[2px]" src="/info.svg" alt="info" />
        <SelectValue placeholder="NeedHelp" />
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
