import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import Icon from "../Icon";
import css from "./HomeHeader.module.css";

const HomeHeader = () => {
  return (
    <div className={css.stripe}>
      <Icon name="logo" size={160} />
      <HeaderNavigation />
    </div>
  );
};

export default HomeHeader;
