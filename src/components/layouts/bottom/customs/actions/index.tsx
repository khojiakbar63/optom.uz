import { FC } from "react";
import { WiDaySunny } from "react-icons/wi";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "./_style.scss";

const Actions: FC = () => {
  return (
    <div className="mt-[30px] flex items-start justify-around gap-[20px]">
      <div className="flex items-center gap-[20px]">
        <img src="/qr.svg" alt="qr" />

        <p className="text-[#7D7D91] text-[14px] font-[400] ml-[10px]">
          Scan the qr code to <br /> Download the mobile application
        </p>

        <div className="flex align-center justify-center gap-[4px]">
          <WiDaySunny className="text-[20px]" />
          <p>Topic - light</p>

          <Select>
            <SelectTrigger className="w-[80px] border-none">
              <p className="text-[#000] text-[12px] font-[400] w-[36px] grid place-content-center h-[20px] rounded-sm bg-[#E8E8F3]">
                BETA
              </p>
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectItem value="default">DEFAULT</SelectItem>
                <SelectItem value="beta">Beta</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FiGlobe />
        <Select>
          <SelectTrigger className="w-[80px] border-none">
            <SelectValue placeholder="Russian" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="uzbek">Uzbek</SelectItem>
              <SelectItem value="russian">Russian</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <div className="flex items-center gap-4">
          <a href="#">
            <FaYoutube className="text-red-500" />
          </a>
          <a href="#">
            <FaFacebook className="text-blue-500" />
          </a>
          <a href="#">
            <FaInstagram className="text-[#E4405F]" />
          </a>
        </div>
        <p className="text-[#7D7D91] text-[14px] font-[400] mt-[10px]">
          ©Optom.uz, 2024 - 2025
        </p>
      </div>
    </div>
  );
};

export default Actions;
