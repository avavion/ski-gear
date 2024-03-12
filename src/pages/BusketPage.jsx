
import img1a from "../assets/images/catalog/1a.png";
import del from "../assets/images/icons/del.svg";
import {Link} from "react-router-dom";

const CATALOG = [
  {
    id: 1,
    title: "Oakley Flight Deck M",
    price: 24950,
    category: "Маска",
    preview_img: img1a,
  },
]

const Busket = () => {
  return (
    <div className="busket w-100">
      <div className="container">
        <div className="busket-inner w-100 d-flex-columns">
        <div className="breadcrumbs d-flex-rows">
            <Link to="/">Главная / </Link>
          <a href="#" className="here">Корзина</a>
          </div>
          <div className="busket-title d-flex-rows">
            <h2>Корзина</h2>
            <p>1 товар</p>
          </div>
          <div className="selectAll d-flex-rows">
            <input type="checkbox" name="c" id="c" />
            <p>Выбрать все</p>
          </div>
          <div className="busket-items d-flex-rows w-100">
            <div className="items-inner d-flex-columns">
              <div className="busket-item d-flex-rows">
                <img src={img1a} alt="" className="busket-img" />
                <div className="item-info d-flex-columns">
                  <h3>{CATALOG[0].title}</h3>
                  <p>
                    <span>Размер:</span> 38
                  </p>
                  <div className="counter d-flex-rows">
                    <p>
                      <span>-</span>
                    </p>
                    <p>1</p>
                    <p>+</p>
                  </div>
                  <div className="item-price d-flex-rows">
                    <p className="price">{CATALOG[0].price} ₽ </p>
                    <img src={del} alt="" />
                  </div>
                </div>
              </div>

              <div className="busket-total d-flex-rows">
                <p>Всего товаров на сумму :</p>
                <h5>40 950 ₽</h5>
              </div>
            </div>

            <div className="order-registration d-flex-columns">
              <h3>Оформление заказа</h3>
              <form action="#" className="d-flex-columns">
                <input type="text" placeholder="Имя" />
                <input type="text" placeholder="Фамилия" />
                <input type="text" placeholder="Номер телефона" />
                <a href="#" className="btn">
                  <p>Перейти к оплате</p>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BusketPage = () => {
  return (
    <Busket />
  )
}

export default BusketPage;