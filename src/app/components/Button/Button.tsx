import React from "react";
import css from "./Button.module.css";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  variant?: "regular" | "CTA" | "formSubmit" | "formCancel";
  onClick?: () => void;
  children: React.ReactNode;
  href?: string;
};

const Button = ({ variant = "regular", onClick, children, href }: Props) => {
  let style = "regular";

  switch (variant) {
    case "regular":
      style = "";
      break;

    case "CTA":
      style = "";
      break;

    case "formSubmit":
      style = "";
      break;

    case "formCancel":
      style = "";
      break;

    default:
      break;
  }

  return (
    <>
      {href ? (
        <Link href={href} className={clsx(css[style], css.common)}>
          {children}
        </Link>
      ) : (
        <button className={clsx(css[style], css.common)} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
