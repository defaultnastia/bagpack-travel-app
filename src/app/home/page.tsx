import Container from "../components/Container";
import HomeCTA from "../components/HomeCTA/HomeCTA";
import HomeFooter from "../components/HomeFooter/HomeFooter";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import HomeHero from "../components/HomeHero/HomeHero";
import css from "./home.module.css";

const page = () => {
  return (
    <div className={css.page}>
      <Container>
        <HomeHeader />
        <HomeHero />
        <HomeCTA />
        <HomeFooter />
      </Container>
    </div>
  );
};

export default page;
