export const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

export const filterUsers = (users, search, searchField) => {
  const q = search.toLowerCase().trim();
  if (!q) return users;
  
  return users.filter((user) => {
    if (searchField === "all") {
      return Object.values(user).join(" ").toLowerCase().includes(q);
    }
    if (searchField === "id") {
      return String(user.id).includes(q);
    }
    return String(user[searchField] || "").toLowerCase().includes(q);
  });
};