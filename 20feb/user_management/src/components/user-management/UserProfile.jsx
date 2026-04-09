import React from "react";
import Avatar from "../common/Avatar";

const UserProfile = ({ user, onEdit, onClose }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          padding: 24,
          background: "#0a0b1f",
          borderRadius: 12,
          border: "1px solid #25254f",
          marginBottom: 32,
        }}
      >
        <Avatar name={user.name} size={72} />
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: 0, fontSize: 26, fontWeight: 700 }}>{user.name}</h3>
          <div style={{ color: "#a5b4fc", marginTop: 6, fontSize: 15 }}>
            {user.designation} • {user.company}
          </div>
        </div>
        <div
          style={{
            background: "#1e1e44",
            borderRadius: 10,
            padding: "6px 14px",
            color: "#94a3b8",
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          ID #{user.id}
        </div>
      </div>

      <div style={{ display: "grid", gap: 20 }}>
        <DetailSection label="CONTACT" value={user.contact} />
        <DetailSection label="EMAIL" value={user.email} color="#22d3ee" />
        <DetailSection label="ADDRESS" value={user.address} multiline />
      </div>

      <div style={{ display: "flex", gap: 16, marginTop: 40 }}>
        <button
          onClick={() => {
            onClose();
            onEdit(user);
          }}
          style={{
            flex: 1,
            padding: "14px",
            background: "linear-gradient(135deg, #6366f1, #22d3ee)",
            border: "none",
            borderRadius: 10,
            color: "white",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Edit Profile
        </button>
        <button
          onClick={onClose}
          style={{
            padding: "14px 32px",
            border: "1px solid #3a3a66",
            background: "transparent",
            borderRadius: 10,
            color: "#b0b0e0",
            fontSize: 15,
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const DetailSection = ({ label, value, color, multiline }) => (
  <div>
    <div style={{ color: "#94a3b8", fontSize: 13, fontWeight: 500, marginBottom: 6 }}>{label}</div>
    <div style={{ fontSize: 16, color, lineHeight: multiline ? 1.5 : "normal" }}>{value}</div>
  </div>
);

export default UserProfile;