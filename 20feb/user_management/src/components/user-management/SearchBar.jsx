import React from "react";
import { SEARCH_FIELDS } from "../../utils/constants";

const SearchBar = ({ search, onSearchChange, searchField, onSearchFieldChange }) => {
  return (
    <div
      style={{
        flex: 1,
        minWidth: 280,
        display: "flex",
        background: "#0f112a",
        border: "1px solid #25254f",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <select
        value={searchField}
        onChange={(e) => onSearchFieldChange(e.target.value)}
        style={{
          background: "#141432",
          border: "none",
          color: "#a0a0d0",
          padding: "0 16px",
          fontSize: 14,
          cursor: "pointer",
          outline: "none",
        }}
      >
        {SEARCH_FIELDS.map(field => (
          <option key={field.value} value={field.value}>{field.label}</option>
        ))}
      </select>
      <input
        placeholder="Search members..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          flex: 1,
          background: "transparent",
          border: "none",
          padding: "14px 16px",
          color: "#e0e0ff",
          fontSize: 15,
          outline: "none",
        }}
      />
      {search && (
        <button
          onClick={() => onSearchChange("")}
          style={{
            background: "none",
            border: "none",
            color: "#777799",
            fontSize: 20,
            padding: "0 16px",
            cursor: "pointer",
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;