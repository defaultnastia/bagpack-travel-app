"use client";

import { usePathname } from "next/navigation";
import Button from "../Button/Button";
import HomeHeaderOptions from "../HomeHeaderOptions/HomeHeaderOptions";
import css from "./HomeHeader.module.css";

const HomeHeader = () => {
  const pathname = usePathname();

  return (
    <div className={css.stripe}>
      <div className={css.ctaBox}>
        {pathname === "/" ? (
          <>
            <Button href="/sign-in">Sign In</Button>
            <Button href="/inspiration">Get Inspo</Button>
          </>
        ) : (
          <Button href="/">Home</Button>
        )}
      </div>
      <HomeHeaderOptions />
    </div>
  );
};

export default HomeHeader;
