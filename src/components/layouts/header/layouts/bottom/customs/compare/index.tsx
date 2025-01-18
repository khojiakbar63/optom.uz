import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";

const Compare: FC = () => {
  return (
    <Select>
      <SelectTrigger
        className="flex items-center text-[9px] sm:text-[14px] text-[var(--text-1F)] !w-fit sm:w-[164px] h-[40px] sm:h-[48px]  lg:px-[12px] sm:px-[24px] border-none hover:bg-[var(--light-grey)] focus:bg-[var(--light-grey)]"
        showIcon={false}
      >
        <img className="w-3 sm:w-6 mr-[2px]" src="/compare.svg" alt="location" />
        Compare
      </SelectTrigger>

      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Compare;
