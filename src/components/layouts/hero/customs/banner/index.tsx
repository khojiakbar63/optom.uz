import { FC } from "react";
import bannerImage from "/banner.png"; // Correct import for image
import "./_style.scss";

const Banner: FC = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-content">
        <h2 className="title">Become a seller <br /> on optom.uz!</h2>
        <button className="check-btn">Check in now.</button>
      </div>
    </div>
  );
};

export default Banner;
