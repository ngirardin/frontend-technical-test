import { users } from "../../../mockData";
import { User } from "./fetchUsers";

type Params = {
  users: User[];
  search?: string;
  page: number;
};

const PAGE_SIZE = 10;

export const searchUsers = (params: Params) => {
  const page = params.page || 1;

  const sortedUsers = sortUsers(users);
  const filteredUsers = filterUsers(sortedUsers, params.search);
  const paginatedUsers = paginateUsers(filteredUsers, page);

  return {
    users: paginatedUsers,
    pages: Math.ceil(filteredUsers.length / PAGE_SIZE),
  };
};

const sortUsers = (users: User[]) => {
  return users.sort((a, b) => a.name.localeCompare(b.name));
};

const filterUsers = (users: User[], search?: string) => {
  if (!search) {
    return users;
  }

  const searchLower = search?.toLowerCase();

  return users.filter((user) => {
    return (
      user.email.toLowerCase().includes(searchLower) ||
      user.name.toLowerCase().includes(searchLower)
    );
  });
};

const paginateUsers = (users: User[], page: number) => {
  return users.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
};
