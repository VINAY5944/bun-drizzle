
// usersTable.js
import { mysqlTable, int, varchar, timestamp } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('users_table', {
  id: int().notNull().primaryKey().autoincrement(),
  name: varchar({ length: 255 }).notNull(),
  age: int().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

// postsTable.js
export const postsTable = mysqlTable('posts_table', {
  id: int().notNull().primaryKey().autoincrement(),
  userId: int().notNull().references(() => usersTable.id), // Foreign key
  title: varchar({ length: 255 }).notNull(),
  content: varchar({ length: 1000 }).notNull(),
  createdAt: timestamp().notNull().defaultNow(),
});

// commentsTable.js
export const commentsTable = mysqlTable('comments_table', {
  id: int().notNull().primaryKey().autoincrement(),
  postId: int().notNull().references(() => postsTable.id), // Foreign key
  userId: int().notNull().references(() => usersTable.id), // Foreign key
  content: varchar({ length: 1000 }).notNull(),
  createdAt: timestamp().notNull().defaultNow(),
});
