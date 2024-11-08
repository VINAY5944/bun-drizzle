import { createComment, getAllComments } from '../controllers/commentController';

export const commentsRoutes = (app: any) => {
  // Create a new comment
  app.post('/comments', async (req) => {
    const result = await createComment(req);  // Call the controller to create a comment
    return result;  // Return the new comment
  });

  // Get all comments
  app.get('/comments', async () => {
    const comments = await getAllComments();  // Call the controller to get all comments
    return comments;  // Return the list of comments
  });

  // Get a comment by ID
  // app.get('/comments/:id', async ({ params }) => {
  //   const comment = await getCommentById(Number(params.id));  // Call the controller to get the comment by ID
  //   if (!comment) {
  //     return { message: 'Comment not found' };  // Return a 404-like response if no comment found
  //   }
  //   return comment;  // Return the specific comment
  // });
};
