import { FC } from "react";
import { BsChatRightDots } from "react-icons/bs";

const Chat: FC = () => {
  return (
    <div className="w-[100px] h-[40px] bg-[#0000EE] text-[#fff] font-[400] text-[14px] absolute bottom-4 right-10 cursor-pointer flex items-center justify-center gap-[12px] rounded-full hover:bg-[#0000eeb8] duration-100">
      <BsChatRightDots />
      <span>Chat</span>
    </div>
  );
};

export default Chat;
