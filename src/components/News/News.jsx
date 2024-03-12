import Container from "../Container/Container";

import arrow_orange from "../../assets/images/icons/arrow_orange.svg";
const NEWS = [
  {
    id: 1,
    title: "Мужчинам",
    img: "https://i.imgur.com/5zJPKp2.png",
  },
  {
    id: 2,
    title: "Женщинам",
    img: "https://i.imgur.com/NIB34lY.png",
  },
  {
    id: 3,
    title: "Снаряжение",
    img: "https://i.imgur.com/ThZ5hDD.png",
  },
];

const News = () => {
  return (
    <div className="news w-100">
      <Container>
        <div className="news-inner w-100 d-flex-columns">
          <h2>Горячие предложения</h2>
          <div className="news-items w-100 d-flex-rows">
            <div className="sale-item d-flex-columns">
              <h3>Скидки до <span className="fz-bigger">20%</span> <br /> на коллекцию <br /> <span className="fs-italic">winter23</span> </h3>
              <a href="#" className="btn">
                <p>Перейти</p>
                <img src={arrow_orange} alt="" />
              </a>
            </div>

            {NEWS.map((item, index) => {
              return(
                <div className="news-item d-flex-columns" key={item.id}>
                  <img src={item.img} alt="" />
                  <div className="news-info">
                    <p>{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default News;
