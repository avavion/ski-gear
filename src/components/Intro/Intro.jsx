import { Link } from "react-router-dom";
import Container from "../Container/Container";
import intro_img from "../../assets/images/home/intro/1.png";
import arrow from "../../assets/images/icons/arrow.svg";

const Intro = () => {
  return (
    <div className="intro w-100">
      <Container>
        <div className="intro-inner w-100 d-flex-rows">
          <div className="intro-info d-flex-columns">
            <h1>
              <span>Ski</span>Gear –бесконечная энергия <span>жизни</span>
            </h1>
            <p>Высококачественная горнолыжная экипировка</p>
            <Link className="btn" to="/catalog">
              <p>В каталог</p>
              <img src={arrow} alt="" />
            </Link>
          </div>
          <img src={intro_img} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Intro;
