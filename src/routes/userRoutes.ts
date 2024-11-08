import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/userController';

export const userRoutes = (app: any) => {
  // Create a new user
  app.post('/users', async (req) => {
    const result = await createUser(req);  // Calls the controller function to create a user
    return result;  // Returns the newly created user
  });

  // Get all users
  app.get('/users', async () => {
    const users = await getAllUsers();  // Calls the controller function to get all users
    return users;  // Returns the list of users
  });

  // Get a user by ID
  app.get('/users/:id', async ({ params }) => {
    const user = await getUserById(Number(params.id));  // Calls the controller function to get the user by ID
    if (!user) {
      return { message: 'User not found' };  // If no user is found, returns a "User not found" message
    }
    return user;  // Returns the user object
  });

  // Update a user by ID
  app.put('/users/:id', async (req) => {
  
    const result = await updateUser(Number(req.params.id), req);  // Calls the controller to update the user
    // if (!result) {
    //   return { message: 'User not found dfsds' };  // If user not found, returns a "User not found" message
    // }
    return result;  // Returns the updated user
  });

  // Delete a user by ID
  app.delete('/users/:id', async ({ params }) => {
    const result = await deleteUser(Number(params.id));  // Calls the controller to delete the user
    if (!result) {
      return { message: 'User not found' };  // If user not found, returns a "User not found" message
    }
    return { message: 'User deleted', user: result };  // Returns a success message with the deleted user
  });
};
