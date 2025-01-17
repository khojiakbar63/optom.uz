import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";

const AllCategories: FC = () => {
  return (
    <Select>
      <SelectTrigger className="text-[var(--text-1F)] w-[164px] h-[48px] px-[24px] border-none hover:bg-[var(--light-grey)] focus:bg-[var(--light-grey)]" showIcon={true}>
        All Category
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

export default AllCategories;
