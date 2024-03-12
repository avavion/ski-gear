import { Link } from "react-router-dom";
import arrow from "../../assets/images/icons/arrow.svg";
import fav_gray from "../../assets/images/icons/fav_gray.svg";

const CatalogCardIem = ({ product }) => {
  return (
    <div className='catalog-item d-flex-columns'>
      <div className='catalog-img'>
        <img src={product.img_url} alt='Preview' className='preview_img' />
        <img src={fav_gray} alt='Like' className='like' />
      </div>
      <div className='catalog-info d-flex-columns'>
        <p className='category'>{product.category}</p>
        <h3>{product.title}</h3>
        <p className='price'>{product.price} ₽</p>

        <Link to={`/catalog/${product.id}`} className='btn'>
          <p>Купить</p>
          <img src={arrow} alt='Buy now' />
        </Link>
      </div>
    </div>
  );
};

export default CatalogCardIem;
