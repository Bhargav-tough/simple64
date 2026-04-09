import { useState, useMemo } from "react";
import { initialUsers } from "../utils/constants";
import { filterUsers } from "../utils/helpers";

export const useUsers = () => {
  const [users, setUsers] = useState(initialUsers);
  const [nextId, setNextId] = useState(5);
  const [search, setSearch] = useState("");
  const [searchField, setSearchField] = useState("all");

  const filteredUsers = useMemo(() => {
    return filterUsers(users, search, searchField);
  }, [users, search, searchField]);

  const addUser = (user) => {
    setUsers(prev => [...prev, { ...user, id: nextId }]);
    setNextId(prev => prev + 1);
  };

  const updateUser = (id, updatedUser) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...updatedUser, id } : u));
  };

  const deleteUser = (id) => {
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  return {
    users,
    filteredUsers,
    search,
    setSearch,
    searchField,
    setSearchField,
    addUser,
    updateUser,
    deleteUser,
    totalUsers: users.length,
  };
};