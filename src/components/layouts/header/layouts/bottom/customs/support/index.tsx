import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";

const CustomerSupport: FC = () => {
  return (
    <Select>
      <SelectTrigger
        className="flex items-center text-[9px] sm:text-[14px] text-[var(--text-1F)] w-fit sm:w-fit h-[40px] sm:h-[48px] lg:px-[12px] sm:px-[24px] border-none hover:bg-[var(--light-grey)] focus:bg-[var(--light-grey)]"
        showIcon={false}
      >
        <img className="w-3 sm:w-6 mr-[2px]" src="/headphones.svg" alt="support" />
        <span>Customer Support</span>
      </SelectTrigger>

      <SelectContent className="bg-white shadow-md rounded-md">
        <SelectGroup>
          <SelectLabel className="text-gray-500 px-3 py-1">Options</SelectLabel>
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

export default CustomerSupport;
