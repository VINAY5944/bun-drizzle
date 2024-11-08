// commentsController.js
import  db from '../db/instance';  // Ensure you have a proper db instance
import { commentsTable, postsTable, usersTable } from '../db/schema';
import { eq } from 'drizzle-orm';

// Create Comment
export const createComment = async (req) => {
  try {
    const { postId, userId, content } = req.body;
    const comment = { postId, userId, content };
    await db.insert(commentsTable).values(comment);
    return { message: 'New comment created!', comment };
  } catch (error) {
    return { error: 'Error creating comment: ' + error.message };
  }
};

// Get All Comments
export const getAllComments = async () => {
  try {
    const comments = await db
      .select()
      .from(commentsTable)
      .innerJoin(postsTable, eq(commentsTable.postId, postsTable.id))
      .innerJoin(usersTable, eq(commentsTable.userId, usersTable.id));
    return comments;
  } catch (error) {
    return { error: 'Error fetching comments: ' + error.message };
  }
};
