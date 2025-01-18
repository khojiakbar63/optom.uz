import { FC } from "react";
import Hero from "@/components/layouts/hero";
import Products from "@/components/layouts/products";
import { Bottom } from "@/components/layouts";
import ToTop from "../customs/to-top";
import Chat from "../customs/chat";
import "./_style.scss";

const HomeComponent:FC = () => {
  return (
    <div className="relative">
      <Hero />
      <Products />
      <Bottom />
      <ToTop/>
      <Chat/>
    </div>
  );
};

export default HomeComponent;
