import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import CatalogFilter from "../components/Catalog/CatalogFilter";
import CatalogCardIem from "../components/Catalog/CatalogCardIem";
import CatalogIntro from "../components/Catalog/CatalogIntro";
import { getAllProducts } from "../utils/catalog";
import CatalogInfo from "../components/Catalog/CatalogInfo";
import {Link} from "react-router-dom";

const CatalogPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => setProducts(getAllProducts()), []);

  return (
    <div className="catalog">
      <Container>
        <div className="catalog-inner w-100 d-flex-columns">
        <div className="breadcrumbs d-flex-rows">
            <Link to="/">Главная / </Link>
          <a href="#" className="here">Каталог</a>
          </div>
          <CatalogIntro />
          <CatalogFilter />
          <div className="cards w-100 d-flex-rows">
            {products.map((product) => {
              return (
                <CatalogCardIem
                  key={`product_${product.id}`}
                  product={product}
                />
              );
            })}
          </div>
          <CatalogInfo />
        </div>
      </Container>
    </div>
  );
};

export default CatalogPage;
