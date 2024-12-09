import React from "react";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon = ({ name, size = 40, className = "" }: IconProps) => {
  return (
    <svg width={size} height="auto" className={className}>
      <use xlinkHref={`/images/icons.svg#${name}`} />
    </svg>
  );
};

export default Icon;
