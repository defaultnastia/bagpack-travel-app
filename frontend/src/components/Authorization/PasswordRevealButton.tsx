import { IconButton, InputAdornment } from "@mui/material";
import React from "react";
import Icon from "../Icon";

type Props = {
  showPassword: boolean;
  handleClickShowPassword: () => void;
};

const PasswordRevealButton = ({
  showPassword,
  handleClickShowPassword,
}: Props) => {
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label={showPassword ? "hide the password" : "display the password"}
        onClick={handleClickShowPassword}
      >
        {showPassword ? (
          <Icon name="eye-blocked" className=" fill-stone-100 w-5 h-5" />
        ) : (
          <Icon name="eye" className=" fill-stone-100 w-5 h-5" />
        )}
      </IconButton>
    </InputAdornment>
  );
};

export default PasswordRevealButton;
