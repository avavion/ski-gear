import Container from "../Container/Container";

import img1 from "../../assets/images/home/features/1.svg";
import img2 from "../../assets/images/home/features/2.svg";
import img3 from "../../assets/images/home/features/3.svg";
import img4 from "../../assets/images/home/features/4.svg";

const FEATURES = [
  {
    id: 1,
    title: "Быстрая доставка",
    img: img1,
  },
  {
    id: 2,
    title: "Высокое качество",
    img: img2,
  },
  {
    id: 3,
    title: "Скидка в день рождения",
    img: img3,
  },
  {
    id: 4,
    title: "Большой ассортимент",
    img: img4,
  },
];

const Features = () => {
  return (
    <div className="about w-100">
      <Container>
        <div className="about-inner w-100 d-flex-columns">
          <h2>О нас</h2>
          <p>
            У нас есть все, что нужно для активного отдыха и отличной каталки,
            включая доски, стильную одежду и экипировку от топовых
            outdoor-брендов.
          </p>

          <div className="features w-100 d-flex-rows">
            {FEATURES.map((feature, index) => {
              return(
                <div className="features-item d-flex-columns" key={feature.id}>
                  <img src={feature.img} alt="" />
                  <p>{feature.title}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
