
import { eq } from 'drizzle-orm';
import { usersTable } from '../db/schema';

import db from "../db/instance"


export const createUser = async (req) => {
  const { name, age, email } = req.body;
  const user = { name, age, email };
  await db.insert(usersTable).values(user);
  return { message: 'New user created!', user };
};

export const getAllUsers = async () => {
  const users = await db.select().from(usersTable);
  return users;
};

export const getUserById = async (id) => {
  const user = await db.select().from(usersTable).where(eq(usersTable.id, id));
  return user.length ? user[0] : { error: 'User not found' };
};

export const updateUser = async (id, req) => {
  const { name, age, email } = req.body;
  // console.log(id)
  const result = await db
    .update(usersTable)
    .set({ name, age, email })
    .where(eq(usersTable.id, id));
  return  { message: 'User info updated!'};
};

export const deleteUser = async (id) => {
  const result = await db.delete(usersTable).where(eq(usersTable.id, id));
  return result.changes ? { message: 'User deleted!' } : { error: 'User not found' };
};
