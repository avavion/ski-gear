import Categories from "../components/Categories/Categories";
import Intro from "../components/Intro/Intro";
import Subscribe from "../components/Subscribe/Subscribe";
import News from "../components/News/News";
import Brands from "../components/Brands/Brands";
import Features from "../components/Features/Features";


const HomePage = () => {
  return (
    <>
      <Intro />
      <Categories/>
      <Subscribe/>
      <News/>
      <Brands/>
      <Features/>
    </>
  );
};

export default HomePage;
