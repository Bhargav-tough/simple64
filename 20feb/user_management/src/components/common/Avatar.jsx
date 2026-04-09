import React from "react";
import { AVATAR_COLORS } from "../../utils/constants";
import { getInitials } from "../../utils/helpers";

const Avatar = ({ name, size = 44 }) => {
  const color = AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
  const initials = getInitials(name);

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: size / 2.2,
        color: "#0f0f1e",
        flexShrink: 0,
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
      }}
    >
      {initials}
    </div>
  );
};

export default Avatar;