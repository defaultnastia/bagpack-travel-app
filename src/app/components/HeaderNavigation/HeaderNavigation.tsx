import Icon from "../Icon";
import css from "./HeaderNavigation.module.css";

const HeaderNavigation = () => {
  return (
    <ul className={css.menu}>
      <li>
        <Icon name="koi" />
      </li>
      <li>
        <Icon name="monkey" />
      </li>
      <li>
        <Icon name="crab" />
      </li>
    </ul>
  );
};

export default HeaderNavigation;
