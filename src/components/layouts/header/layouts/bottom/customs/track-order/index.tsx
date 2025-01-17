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
        className=" text-[var(--text-1F)] w-fit h-[48px] px-[24px] border-none hover:bg-[var(--light-grey)] focus:bg-[var(--light-grey)]"
        showIcon={false}
      >
        <img className="w-6 mr-[2px]" src="/location.svg" alt="location" />
        <SelectValue placeholder="Track Order" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectItem value="one">Order One</SelectItem>
        <SelectItem value="two">Order Two</SelectItem>
        <SelectItem value="three">Order Three</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default TrackOrder;
