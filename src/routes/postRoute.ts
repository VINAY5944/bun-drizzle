import { createPost, getAllPosts, getPostById } from '../controllers/postController';

export const postsRoutes = (app: any) => {
  // Create a new post
  app.post('/posts', async (req) => {
    const result = await createPost(req);  // Call the controller to create a post
    return result;  // Return the new post
  });

  // Get all posts
  app.get('/posts', async () => {
    const posts = await getAllPosts();  // Call the controller to get all posts
    return posts;  // Return the list of posts
  });

  // Get a post by ID
  app.get('/posts/:id', async ({ params }) => {
    const post = await getPostById(Number(params.id));  // Call the controller to get the post by ID
    if (!post) {
      return { message: 'Post not found' };  // If no post found, return a "not found" message
    }
    return post;  // Return the specific post
  });
};
