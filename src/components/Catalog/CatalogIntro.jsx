import catalogText from "../../assets/images/catalog/intro_text.svg";


const CatalogIntro = () => {
  return (
    <div className="catalog-intro w-100">
      <div className="container">
        <div className="catalog-intro-inner d-flex-columns w-100">
          <img src={catalogText} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CatalogIntro