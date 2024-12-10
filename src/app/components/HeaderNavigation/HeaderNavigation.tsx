import { Tooltip } from "@mui/material";

import Icon from "../Icon";
import css from "./HeaderNavigation.module.css";

const HeaderNavigation = () => {
  return (
    <ul className={css.menu}>
      <li>
        <Tooltip title="Change theme" arrow>
          <Icon name="koi" />
        </Tooltip>
      </li>
      <li>
        <Tooltip title="Change language" arrow>
          <Icon name="monkey" />
        </Tooltip>
      </li>
      <li>
        <Tooltip title="Contact developer" arrow>
          <Icon name="crab" />
        </Tooltip>
      </li>
    </ul>
  );
};

export default HeaderNavigation;
