import Elysia from 'elysia';

const app = new Elysia();

// Import route definitions
import { postsRoutes } from './src/routes/postRoute';
import { commentsRoutes } from './src/routes/commentRoutes';
import { userRoutes } from './src/routes/userRoutes';

// Register routes with the app
postsRoutes(app);
commentsRoutes(app);
userRoutes(app);

// Start the server
app.listen(3000);
console.log('Server running on http://localhost:3000');
