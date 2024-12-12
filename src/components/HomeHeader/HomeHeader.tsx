import Image from "next/image";

import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import css from "./HomeHeader.module.css";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <div className={css.stripe}>
      <Link href="/" className={css.logo}>
        <Image
          src="/images/Logo.png"
          alt="backpack logo"
          fill={true}
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100px, 120px"
        />
      </Link>
      <HeaderNavigation />
    </div>
  );
};

export default HomeHeader;
