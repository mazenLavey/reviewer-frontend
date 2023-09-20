import { ModeContext } from 'context/ModeContext';
import { useContext } from "react";
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from 'layouts/RootLayout';
import Home from 'pages/Home';
import Admin from 'pages/Admin';
import Profile from 'pages/Profile';
import Review from 'pages/Review';
import LogIn from 'pages/LogIn';
import Register from 'pages/Register';
import NewPost from 'pages/NewPost';
import ProtectedRoute from 'components/ProtectedRoute';
import routes from 'routes';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from 'styles/customizedTheme';
import 'normalize.css';
import './index.scss';

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={routes.home} element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path={routes.admin} element={<Admin />} />
        <Route path={routes.login} element={<LogIn />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.profile} element={
          <ProtectedRoute >
            <Profile />
          </ProtectedRoute>
        } />
        <Route path={routes.newPost} element={
          <ProtectedRoute >
            <NewPost />
          </ProtectedRoute>
        } />
        <Route path={routes.review} element={<Review />} />

        <Route path='*' element={<Navigate to={routes.home} replace />} />
      </Route>
    )
  );

  const { isDarkMode } = useContext(ModeContext);

  return (
    <ThemeProvider
      theme={isDarkMode ? darkTheme : lightTheme}
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
