// postsController.js
import  db from '../db/instance'; // Ensure you have a proper db instance
import { postsTable, usersTable } from '../db/schema';
import { eq } from 'drizzle-orm';

// Create Post
export const createPost = async (req) => {
  try {
    const { userId, title, content } = req.body;
    const post = { userId, title, content };
    await db.insert(postsTable).values(post);
    return { message: 'New post created!', post };
  } catch (error) {
    return { error: 'Error creating post: ' + error.message };
  }
};

// Get All Posts
export const getAllPosts = async () => {
  try {
    const posts = await db
      .select()
      .from(postsTable)
      .innerJoin(usersTable, eq(postsTable.userId, usersTable.id)); // Inner Join to get user info
    return posts;
  } catch (error) {
    return { error: 'Error fetching posts: ' + error.message };
  }
};

// Get Post By ID
export const getPostById = async (id) => {
  try {
    const post = await db
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, id))
      .innerJoin(usersTable, eq(postsTable.userId, usersTable.id));
    return post.length ? post[0] : { error: 'Post not found' };
  } catch (error) {
    return { error: 'Error fetching post: ' + error.message };
  }
};
