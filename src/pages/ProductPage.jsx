import { useParams } from "react-router-dom";
import { getAllProducts } from "../utils/catalog.js";
import { useEffect, useState } from "react";
import Container from "../components/Container/Container.jsx";
import {Link} from "react-router-dom";

import color1 from "../assets/images/catalog/mask1.png";
import color2 from "../assets/images/catalog/mask2.png";
import color3 from "../assets/images/catalog/mask3.png";
import fav_blue from "../assets/images/icons/fav_blue.svg";

const ProductPage = () => {
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    setProduct(
      getAllProducts().find((item) => item.id === parseInt(productId))
    );
  }, [productId]);

  return (
    <section className="product">
      <Container>
        <div className="product-inner w-100 d-flex-columns">
          <div className="breadcrumbs d-flex-rows">
            <Link to="/">Главная / </Link>
            <Link to="/catalog">Каталог / </Link>
          <a href="#" className="here">{product.title}</a>
          </div>
          <div className="product-item d-flex-rows w-100">
            <div className="images d-flex-rows">
              <div className="choose-image d-flex-columns">
                <img src={product.img1} alt="" className="chosen" />
                <img src={product.img_url} alt="" />
                <img src={product.img2} alt="" />
                <img src={product.img3} alt="" />
                <img src={product.img4} alt="" />
              </div>
              <img className="main-image" src={product.img1} alt="" />
            </div>

            <div className="item-info d-flex-columns">
              <h1>{product.title}</h1>
              <p>
                <span>Категория : </span>
                {product.category}
              </p>
              <p>
                <span>Бренд : </span>
                {product.brand}
              </p>
              <p>
                <span>Пол : </span>
                {product.gender}
              </p>
              <p className="price">{product.price} ₽</p>
              <div className="colours d-flex-rows">
                <img src={product.img_url} alt="" className="chosen" />
                <img src={color1} alt="" />
                <img src={color2} alt="" />
                <img src={color3} alt="" />
              </div>
              <p className="size">
                <span>Размер : </span>One size
              </p>
              <div className="sizes d-flex-rows">
                <a href="#" className="size">
                  One size
                </a>
              </div>

              <div className="btns d-flex-rows">
                <a href="#" className="btn">
                  <p> Добавить в корзину</p>
                </a>
                <a href="#" className="fav-btn">
                  <img src={fav_blue} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="product-info d-flex-columns">
            <p className="arcticle">
              <span>Артикул : </span>134862 FW
            </p>
            <div className="description d-flex-columns">
              <h3>Описание</h3>
              <p>
                Новинка в коллекции Oakley этого сезона - маска Flight Tracker в
                самом большом размере оправы. Отличный обзор, отличное качество
                Oakley, отличные расцветки и линзы - всё это тоже о ней! У маски
                гибкая рамка низкопрофильной оправы O Matter™ (она адаптируется
                под форму лица даже при сильном морозе), технология High
                Definition Optics, отвечающая за визуальную четкость на всех
                углах обзора, большая сферическая линза и силиконовое покрытие
                широкого ремешка с внутренней стороны. А еще - совместимость с
                большинством очков с диотриями и практически всеми шлемами.
                Обратите внимание - это уменьшенная версия классической оправы,
                так что если Вам нужна маска среднего размера, лучше варианта не
                придумать.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductPage;
