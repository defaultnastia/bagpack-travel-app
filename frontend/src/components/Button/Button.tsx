import clsx from "clsx";
import React from "react";
import Link from "next/link";

import css from "./Button.module.css";

type Props = {
  addedStyle?: string;
  onClick?: () => void;
  children: React.ReactNode;
  href?: string;
};

const Button = ({ onClick, addedStyle, children, href }: Props) => {
  return (
    <>
      {href ? (
        <Link href={href} className={clsx(addedStyle || css.common)}>
          {children}
        </Link>
      ) : (
        <button className={clsx(addedStyle || css.common)} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
