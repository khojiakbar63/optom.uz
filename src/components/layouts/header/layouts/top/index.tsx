import { FC } from "react";
import { useTopFeatures } from "./features"; // Correct import of the hook
import "./_style.scss";

const Top: FC = () => {
  const isVisible = useTopFeatures(); // Call the hook to get visibility state

  return (
    <div
      className="top"
      style={{
        display: isVisible ? "block" : "none",
        transition: "opacity 0.3s ease",
      }}
    >
      <p>Become a seller on Optom.uz</p>
    </div>
  );
};

export default Top;
