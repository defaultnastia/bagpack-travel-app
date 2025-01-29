import Button from "../Button/Button";
import HomeHeaderOptions from "../HomeHeaderOptions/HomeHeaderOptions";
import css from "./HomeHeader.module.css";

const HomeHeader = () => {
  return (
    <div className={css.stripe}>
      <div className={css.ctaBox}>
        <Button href="/sign-in">Sign In</Button>
        <Button href="/inspiration">Get Inspo</Button>
      </div>
      <HomeHeaderOptions />
    </div>
  );
};

export default HomeHeader;
