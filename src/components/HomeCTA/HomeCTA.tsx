import React from "react";

import css from "./HomeCTA.module.css";
import Button from "../Button/Button";

const HomeCTA = () => {
  return (
    <div className={css.box}>
      <ul className={css.buttonsList}>
        <li>
          <Button href="/sign-in">Sign In</Button>
        </li>
        <li>
          <Button href="/sign-up">Sign Up</Button>
        </li>
        <li>
          <Button href="/inspiration">Get Inspo</Button>
        </li>
      </ul>

      <p className={css.motto}>
        Backpack is designed to help you track every aspect of the trip in one
        place. Input flight details, accommodations, activities, collaborate
        with friends, and save the itinerary to PDF.
      </p>
    </div>
  );
};

export default HomeCTA;
