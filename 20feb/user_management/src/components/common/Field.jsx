import React from "react";

const Field = ({ label, name, value, onChange, type = "text", textarea, error }) => (
  <div style={{ marginBottom: 20 }}>
    <label
      style={{
        display: "block",
        color: "#a0a0d0",
        fontSize: 13,
        fontWeight: 600,
        marginBottom: 6,
        letterSpacing: 0.4,
      }}
    >
      {label}
    </label>
    {textarea ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        style={{
          width: "100%",
          minHeight: 84,
          background: "#0a0b1f",
          border: `1px solid ${error ? "#ff5555" : "#2a2a55"}`,
          borderRadius: 10,
          padding: "12px 16px",
          color: "#e8e8ff",
          fontSize: 15,
          resize: "vertical",
          outline: "none",
          transition: "border-color 0.2s",
        }}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          background: "#0a0b1f",
          border: `1px solid ${error ? "#ff5555" : "#2a2a55"}`,
          borderRadius: 10,
          padding: "12px 16px",
          color: "#e8e8ff",
          fontSize: 15,
          outline: "none",
          transition: "border-color 0.2s",
        }}
      />
    )}
    {error && (
      <div style={{ color: "#ff7777", fontSize: 13, marginTop: 6, fontWeight: 500 }}>{error}</div>
    )}
  </div>
);

export default Field;