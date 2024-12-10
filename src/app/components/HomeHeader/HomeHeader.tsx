import Image from "next/image";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import css from "./HomeHeader.module.css";

const HomeHeader = () => {
  return (
    <div className={css.stripe}>
      <Image
        src="/images/Logo.png"
        alt="backpack logo"
        width={120}
        height={48}
      />
      <HeaderNavigation />
    </div>
  );
};

export default HomeHeader;
