import React from "react";
import Avatar from "../common/Avatar";

const UserTable = ({ users, onView, onEdit, onDelete }) => {
  if (users.length === 0) {
    return (
      <div style={{ padding: "80px 24px", textAlign: "center", color: "#475569" }}>
        <div style={{ fontSize: 64, opacity: 0.3, marginBottom: 16 }}>⊘</div>
        <div style={{ fontSize: 18, marginBottom: 8 }}>No users found</div>
        <div style={{ fontSize: 15, color: "#64748b" }}>
          Try adjusting your search or add a new member
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "60px 2fr 2fr 1.6fr 1.6fr 140px",
          padding: "16px 24px",
          background: "#141432",
          borderBottom: "1px solid #25254f",
          color: "#94a3b8",
          fontSize: 13,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: 0.5,
        }}
      >
        <div>ID</div>
        <div>User</div>
        <div>Contact / Email</div>
        <div>Role</div>
        <div>Company</div>
        <div>Actions</div>
      </div>

      {users.map((user, idx) => (
        <div
          key={user.id}
          style={{
            display: "grid",
            gridTemplateColumns: "60px 2fr 2fr 1.6fr 1.6fr 140px",
            padding: "16px 24px",
            borderBottom: idx < users.length - 1 ? "1px solid #1e1e3a" : "none",
            alignItems: "center",
            transition: "background 0.18s",
            background: "transparent",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#14142e")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <div style={{ color: "#64748b", fontWeight: 500, fontSize: 13 }}>#{user.id}</div>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Avatar name={user.name} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 15, color: "#e0e0ff" }}>{user.name}</div>
              <div style={{ color: "#64748b", fontSize: 13, marginTop: 2 }}>
                {user.address.split(",").pop()?.trim() || "—"}
              </div>
            </div>
          </div>

          <div>
            <div style={{ color: "#cbd5e1", fontSize: 14 }}>{user.contact}</div>
            <div style={{ color: "#22d3ee", fontSize: 13, marginTop: 3, opacity: 0.9 }}>{user.email}</div>
          </div>

          <div style={{ color: "#cbd5e1", fontSize: 14 }}>{user.designation}</div>
          <div style={{ color: "#a0a0d0", fontSize: 14 }}>{user.company}</div>

          <div style={{ display: "flex", gap: 8 }}>
            <ActionButton onClick={() => onView(user)} color="#a5b4fc" icon="⬤" />
            <ActionButton onClick={() => onEdit(user)} color="#22d3ee" icon="✎" />
            <ActionButton onClick={() => onDelete(user)} color="#f87171" icon="×" hoverBg="#2a1616" />
          </div>
        </div>
      ))}
    </>
  );
};

const ActionButton = ({ onClick, color, icon, hoverBg = "#1e1e44" }) => (
  <button
    onClick={onClick}
    style={{
      width: 36,
      height: 36,
      borderRadius: 10,
      border: "1px solid #2a2a55",
      background: "transparent",
      color,
      fontSize: icon === "⬤" ? 16 : icon === "✎" ? 18 : 20,
      cursor: "pointer",
      transition: "all 0.15s",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.background = hoverBg)}
    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
  >
    {icon}
  </button>
);

export default UserTable;