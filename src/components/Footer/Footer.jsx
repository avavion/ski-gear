import Container from "../Container/Container";
import { Link } from "react-router-dom";

import social1 from "../../assets/images/icons/vk.svg";
import social2 from "../../assets/images/icons/yt.svg";
import social3 from "../../assets/images/icons/tg.svg";


const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
      <div className="footer-inner w-100 d-flex-rows">
          <div className="socials d-flex-columns">
            <h3>Будьте всегда в курсе новостей</h3>
            <div className="socials-items d-flex-rows">
              <a href="#">
                <img src={social1} alt="" />
              </a>
              <a href="#">
                <img src={social2} alt="" />
              </a>
              <a href="#">
                <img src={social3} alt="" />
              </a>
            </div>
          </div>

          <div className="footer-nav d-flex-columns">
            <h4>Навигация</h4>
            <Link to='/' >Главная</Link>
            <a href="#">О нас</a>
            <Link to='/catalog' >Каталог</Link>
            <a href="#">Новости</a>
            <a href="#">Акции</a>
            <a href="#">Контакты</a>
          </div>

          <div className="footer-nav d-flex-columns">
            <h4>Информация</h4>
            <a href="#">Доставка и оплата</a>
            <a href="#">Возврат</a>
            <a href="#">Таблица размеров</a>
            <a href="#">Программа лояльности</a>
            <a href="#">Преимущества</a>
          </div>

          <div className="footer-form d-flex-columns">
            <h3>Остались вопросы?</h3>
            <form action="#">
              <input type="tel" name="tel" id="tel" placeholder="Ваш номер" />
              <a href="#" className="btn">
                <p>Перезвонить мне</p>
              </a>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
