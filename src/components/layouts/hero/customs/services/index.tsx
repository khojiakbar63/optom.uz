import { FC } from "react";
import { heroServices } from "@/db/hero-services";
import "./_style.scss";
import Container from "@/components/container";

const Services: FC = () => {
  return (
    <div className="custom-border">
      <Container>
        <div className="services">
          {heroServices.map((item) => (
            <div key={item.id} className="service-container">
              <div className="service">
                <img src={item.img} alt="box" />
                <div className="service--content">
                  <h2 className="title">{item.title}</h2>
                  <p className="desc">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
