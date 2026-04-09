import React from "react";

const DeleteConfirmation = ({ user, onConfirm, onCancel }) => {
  return (
    <div style={{ textAlign: "center", padding: "20px 0" }}>
      <div style={{ fontSize: 64, color: "#f87171", marginBottom: 24, opacity: 0.9 }}>⚠</div>
      <h3 style={{ margin: "0 0 12px", fontSize: 22, color: "#fda4af" }}>Delete Member?</h3>
      <p style={{ color: "#e0e0ff", fontSize: 17, margin: "0 0 32px" }}>
        <strong>{user.name}</strong> will be permanently removed.
      </p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
        <button
          onClick={onCancel}
          style={{
            padding: "14px 36px",
            border: "1px solid #3a3a66",
            background: "transparent",
            borderRadius: 10,
            color: "#b0b0e0",
            fontSize: 15,
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          style={{
            padding: "14px 36px",
            background: "linear-gradient(135deg, #ef4444, #f87171)",
            border: "none",
            borderRadius: 10,
            color: "white",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(239,68,68,0.35)",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;