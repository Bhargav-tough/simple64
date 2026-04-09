import React, { useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import Header from "../layout/Header";
import SearchBar from "./SearchBar";
import UserTable from "./UserTable";
import UserForm from "./UserForm";
import UserProfile from "./UserProfile";
import DeleteConfirmation from "./DeleteConfirmation";
import Modal from "../common/Modal";
import "../../App.css"; // Import the CSS

const EMPTY_FORM = { name: "", contact: "", email: "", designation: "", company: "", address: "" };

export default function UserManagement() {
  const {
    filteredUsers,
    search,
    setSearch,
    searchField,
    setSearchField,
    addUser,
    updateUser,
    deleteUser,
    totalUsers,
  } = useUsers();

  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  const openAdd = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setModal("add");
  };

  const openEdit = (user) => {
    setSelected(user);
    setForm({ ...user });
    setErrors({});
    setModal("edit");
  };

  const openView = (user) => {
    setSelected(user);
    setModal("view");
  };

  const openDelete = (user) => {
    setSelected(user);
    setModal("delete");
  };

  const closeModal = () => {
    setModal(null);
    setSelected(null);
    setErrors({});
  };

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.contact.trim()) e.contact = "Contact number is required";
    if (!form.designation.trim()) e.designation = "Designation is required";
    if (!form.company.trim()) e.company = "Company name is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleAdd = () => {
    if (!validate()) return;
    addUser(form);
    closeModal();
  };

  const handleEdit = () => {
    if (!validate()) return;
    updateUser(selected.id, form);
    closeModal();
  };

  const handleDelete = () => {
    deleteUser(selected.id);
    closeModal();
  };

  return (
    <div className="app-container">
      <div className="bg-glow"></div>
      <div className="bg-particles"></div>
      
      <div className="content-wrapper">
        <Header totalUsers={totalUsers} />

        <div className="controls-bar">
          <SearchBar
            search={search}
            onSearchChange={setSearch}
            searchField={searchField}
            onSearchFieldChange={setSearchField}
          />
          <button onClick={openAdd} className="btn btn-primary add-button">
            <span>+</span> Add Member
          </button>
        </div>

        <div className="table-container">
          <UserTable
            users={filteredUsers}
            onView={openView}
            onEdit={openEdit}
            onDelete={openDelete}
          />
        </div>

        {search && (
          <p className="search-info">
            Showing {filteredUsers.length} of {totalUsers} results for "{search}"
          </p>
        )}
      </div>

      <Modal open={modal === "add"} title="Add New Member" onClose={closeModal}>
        <UserForm
          form={form}
          onChange={handleChange}
          errors={errors}
          onSubmit={handleAdd}
          submitLabel="Create Member"
          onCancel={closeModal}
        />
      </Modal>

      <Modal open={modal === "edit"} title="Edit Member" onClose={closeModal}>
        <UserForm
          form={form}
          onChange={handleChange}
          errors={errors}
          onSubmit={handleEdit}
          submitLabel="Save Changes"
          onCancel={closeModal}
        />
      </Modal>

      <Modal open={modal === "view"} title="Member Profile" onClose={closeModal} maxWidth={620}>
        {selected && <UserProfile user={selected} onEdit={openEdit} onClose={closeModal} />}
      </Modal>

      <Modal open={modal === "delete"} title="Confirm Deletion" onClose={closeModal} maxWidth={460}>
        {selected && <DeleteConfirmation user={selected} onConfirm={handleDelete} onCancel={closeModal} />}
      </Modal>
    </div>
  );
}