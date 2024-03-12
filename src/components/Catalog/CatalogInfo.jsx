
import prev from "../../assets/images/icons/prev.svg";
import next from "../../assets/images/icons/next.svg";

const CatalogInfo = () => {
  return (
    <div className="catalog-info w-100 d-flex-rows">
      <p className="catalog-count">Показано 18 из 120 товаров</p>
      <a href="#" className="btn">
        <p>Смотреть еще</p>
      </a>
      <div className="pagination d-flex-rows">
        <img src={prev} alt="" className="prev arrow" />
        <a href="#" className="pages active">
          1
        </a>
        <a href="#" className="pages">
          2
        </a>
        <a href="#" className="pages">
          3
        </a>
        <a href="#" className="pages">
          4
        </a>
        <a href="#" className="pages">
          5
        </a>
        <img src={next} alt="" className="next arrow" />
      </div>
    </div>
  );
};

export default CatalogInfo;