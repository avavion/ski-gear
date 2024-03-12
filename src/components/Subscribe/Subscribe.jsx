import Container from "../Container/Container";
import img1 from "../../assets/images/home/subscribe/1.png";
import arrow from "../../assets/images/icons/arrow.svg";

const Subscribe = () => {
  return (
    <div className="subscribe w-100">
      <Container>
        <div className="subscribe-inner w-100 d-flex-rows">
          <div className="inner-info w-100 d-flex-columns">
            <div className="info-title d-flex-columns">
              <h3>Скидка 15% </h3>
              <h4>на первый заказ</h4>
            </div>
            <form action="#" className="info-form">
              <input type="text" placeholder="Ваш email" />
              <a href="#" className="btn"><p>Получить скидку</p>
              <img src={arrow} alt="" /></a>
            </form>
            <div className="approval d-flex-rows">
              <input type="checkbox" />
              <p>Нажимая, я даю согласие на обработку персональных данных </p>
            </div>
          </div>
          <img src={img1} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;