import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TrackOrder: FC = () => {
  return (
    <Select>
      <SelectTrigger
        className="flex items-center text-[9px] sm:text-[14px] w-fit lg:px-[12px] sm:px-[24px] border-none hover:bg-[var(--light-grey)] focus:bg-[var(--light-grey)]"
        showIcon={false}
      >
        <img className="w-3 sm:w-6" src="/location.svg" alt="location" />
        <SelectValue placeholder="Track Order" />
      </SelectTrigger>
      <SelectContent className="bg-white w-[400px]">
        <SelectItem value="one">Order One</SelectItem>
        <SelectItem value="two">Order Two</SelectItem>
        <SelectItem value="three">Order Three</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default TrackOrder;
