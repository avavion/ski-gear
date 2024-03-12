import arrow from "../../assets/images/icons/arrow.svg";
import Container from "../Container/Container";

const CATEGORIES = [
  {
    id: 1,
    title: "Ботинки",
    img: "https://i.imgur.com/ntDVfPB.png",
  },
  {
    id: 2,
    title: "Шлемы",
    img: "https://i.imgur.com/nWKszmh.png",
  },
  {
    id: 3,
    title: "Маски",
    img: "https://i.imgur.com/UJkkHxI.png",
  },
  {
    id: 4,
    title: "Перчатки",
    img: "https://i.imgur.com/vusfD1d.png",
  },
];

const Categories = () => {
  return (
    <div className="categories w-100">
      <Container>
        <div className="categories-inner w-100 d-flex-columns">
          <h2>Спортивное снаряжение</h2>
          <div className="categories-items d-flex-rows w-100">
            <div className="items-inner d-flex-rows">
              {CATEGORIES.map((category, index) => {
                return (
                  <div className="categories-item" key={category.id}>
                    <img src={category.img} alt="" className="item-img" />
                    <div className="item-info">
                      <p>
                        {category.title}
                        <img src={arrow} alt="" />
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="categories-item">
              <img src="https://i.imgur.com/ED7Du5R.png" className="item-img" alt="" />
              <div className="item-info">
                <p>
                  Доски
                  <img src={arrow} alt="" />
                </p>
              </div>
            </div>
            <div className="categories-item">
              <img src="https://i.imgur.com/txfZDjI.png" className="item-img" alt="" />
              <div className="item-info">
                <p>
                  Лыжи
                  <img src={arrow} alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
