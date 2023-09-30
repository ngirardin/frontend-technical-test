import zod from "zod";

export type User = {
  id: number;
  name: string;
  email: string;
  type: string;
};

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("http://localhost:3000/users");
  const json = await response.json();

  const users = zod
    .object({
      id: zod.number(),
      name: zod.string(),
      email: zod.string(),
      type: zod.string(),
    })
    .array()
    .parse(json);

  return users;
};
