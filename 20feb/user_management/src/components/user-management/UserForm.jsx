import React from "react";
import Field from "../common/Field";

const UserForm = ({ form, onChange, errors, onSubmit, submitLabel, onCancel }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
        <Field label="Full Name" name="name" value={form.name} onChange={onChange} error={errors.name} />
        <Field label="Contact" name="contact" value={form.contact} onChange={onChange} error={errors.contact} />
        <Field
          label="Email Address"
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          error={errors.email}
          style={{ gridColumn: "1 / -1" }}
        />
        <Field
          label="Designation"
          name="designation"
          value={form.designation}
          onChange={onChange}
          error={errors.designation}
        />
        <Field
          label="Company"
          name="company"
          value={form.company}
          onChange={onChange}
          error={errors.company}
        />
        <Field
          label="Address"
          name="address"
          value={form.address}
          onChange={onChange}
          textarea
          style={{ gridColumn: "1 / -1" }}
        />
      </div>

      <div style={{ display: "flex", gap: 16, justifyContent: "flex-end", marginTop: 32 }}>
        <button
          type="button"
          onClick={onCancel}
          style={{
            padding: "12px 28px",
            borderRadius: 10,
            border: "1px solid #3a3a66",
            background: "transparent",
            color: "#b0b0e0",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: 15,
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          style={{
            padding: "12px 32px",
            borderRadius: 10,
            border: "none",
            background: "linear-gradient(135deg, #6366f1, #22d3ee)",
            color: "white",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 15,
            boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
          }}
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
};

export default UserForm;