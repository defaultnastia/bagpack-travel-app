import HomeHeader from "./components/HomeHeader/HomeHeader";
import HomeHero from "./components/HomeHero/HomeHero";
import HomeCTA from "./components/HomeCTA/HomeCTA";
import HomeFooter from "./components/HomeFooter/HomeFooter";
import Container from "./components/Container";

const page = () => {
  return (
    <div className="homepage">
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
