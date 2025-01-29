import Button from "../Button/Button";
import css from "./HomeHeaderOptions.module.css";

const addedStyle =
  "border-none hover:bg-transparent hover:text-[var(--accent)]";

const HeaderNavigation = () => {
  return (
    <ul className={css.menu}>
      <li>
        <Button addedStyle={addedStyle}>Theme</Button>
      </li>
      <li>
        <Button addedStyle={addedStyle}>Language</Button>
      </li>

      <li className="">
        <Button addedStyle={addedStyle}>Cookies</Button>
      </li>
    </ul>
  );
};

export default HeaderNavigation;
