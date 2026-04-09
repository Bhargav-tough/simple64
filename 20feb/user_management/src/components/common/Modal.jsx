import React from "react";

const Modal = ({ open, title, children, onClose, maxWidth = 580 }) => {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#0f112a",
          border: "1px solid #25254f",
          borderRadius: 16,
          padding: "32px",
          width: "100%",
          maxWidth,
          maxHeight: "92vh",
          overflowY: "auto",
          boxShadow: "0 24px 88px rgba(0,0,0,0.6)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
          <h2 style={{ margin: 0, color: "#f0f0ff", fontSize: 24, fontWeight: 700 }}>{title}</h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#777799",
              fontSize: 28,
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;