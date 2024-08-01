import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

export const App = () => {
  const router = createBrowserRouter(AppRouter())

  return <RouterProvider router={router} />

};