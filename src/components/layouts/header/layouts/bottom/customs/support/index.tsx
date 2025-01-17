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
      className="text-[var(--text-1F)] w-fit h-[48px] px-[24px] border-none hover:bg-[var(--light-grey)] focus:bg-[var(--light-grey)]"
      showIcon={false}
    >
      <img className="w-6 mr-[2px]" src="/headphones.svg" alt="location" />
      Customer Support
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

export default CustomerSupport;
