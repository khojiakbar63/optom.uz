import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { heroMenu } from "@/db/hero-menu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./_style.scss";

const Menu: FC = () => {
  return (
    <div className="menu">
      <div className="menu--content">
        <div className="flex flex-col items-start">
          {heroMenu.map((item) => (
            <DropdownMenu  key={item.id}>
              <DropdownMenuTrigger
                className="flex items-center justify-between w-[284px] mb-4"
               
              >
                <p>{item.name}</p>
                <MdOutlineKeyboardArrowRight className="text-[20px]" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
