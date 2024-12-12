import React from "react";

interface IconProps {
  name: string;
  className?: string;
  width?: number;
  height?: number;
}

const Icon = ({
  name,
  width = 40,
  height = width,
  className = "",
}: IconProps) => {
  return (
    <svg width={width} height={height} className={className}>
      <use xlinkHref={`/images/icons.svg#${name}`} />
    </svg>
  );
};

export default Icon;
