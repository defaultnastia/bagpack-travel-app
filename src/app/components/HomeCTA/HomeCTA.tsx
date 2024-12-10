import React from "react";

import css from "./HomeCTA.module.css";
import Button from "../Button/Button";

const HomeCTA = () => {
  return (
    <div className={css.box}>
      <ul className={css.buttonsList}>
        <li>
          <Button href="#outlined-buttons">Sign In</Button>
        </li>
        <li>
          <Button href="#outlined-buttons">Sign Up</Button>
        </li>
        <li>
          <Button href="#outlined-buttons">Get Inspo</Button>
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
