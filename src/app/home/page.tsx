import Container from "../components/Container";
import HomeFooter from "../components/HomeFooter/HomeFooter";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import css from "./home.module.css";

const page = () => {
  return (
    <div className={css.page}>
      <Container>
        <HomeHeader />
        <HomeFooter />
      </Container>
    </div>
  );
};

export default page;
