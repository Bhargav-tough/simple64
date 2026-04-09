import React from "react";

const Header = ({ totalUsers }) => {
  return (
    <header style={{ marginBottom: 48 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
        <h1 style={{ margin: 0, fontSize: "clamp(28px, 6vw, 42px)", fontWeight: 800, letterSpacing: -1 }}>
          User Directory
        </h1>
        <div
          style={{
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: 9999,
            padding: "6px 16px",
            fontSize: 14,
            fontWeight: 500,
            color: "#a5b4fc",
          }}
        >
          {totalUsers} members
        </div>
      </div>
      <p style={{ margin: "12px 0 0", color: "#94a3b8", fontSize: 15 }}>
        Manage team members, contacts and profiles
      </p>
    </header>
  );
};

export default Header;