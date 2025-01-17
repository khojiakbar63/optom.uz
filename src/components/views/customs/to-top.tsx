import  { FC } from 'react'
import { MdArrowUpward } from "react-icons/md";

const ToTop :FC= () => {
  return (
    <div className="w-[42px] h-[42px] bg-[#E8E8F3] absolute bottom-20 right-10 cursor-pointer flex items-center justify-center rounded-full hover:bg-slate-300 duration-100">
    <a href="#">
      <MdArrowUpward className="text-[#01011B]  text-2xl " />
    </a>
  </div>
  )
}

export default ToTop
