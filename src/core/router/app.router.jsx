import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../pages/home/views/HomeView";
import LoginView from "../../pages/login/views/LoginView";
import ErrorView from "../../pages/error/views/ErrorView";
import PublicLayout from "../layouts/public/PublicLayout";
import PublicRoutes from "../auth/components/PublicRoutes";
import ProtectedRoutes from "../auth/components/ProtectedRoutes";
import MoviesView from "../../pages/moviesAndSeries/views/MoviesView";
import SeriesView from "../../pages/moviesAndSeries/views/SeriesView";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <PublicLayout>
          <HomeView />
        </PublicLayout>
      </ProtectedRoutes>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoutes>
        <PublicLayout>
          <LoginView />
        </PublicLayout>
      </PublicRoutes>
    ),
  },
  {
    path: "/movies",
    element: (
      <ProtectedRoutes>
        <PublicLayout>
          <MoviesView />
        </PublicLayout>
      </ProtectedRoutes>
    ),
  },
  {path: "/series",
  element: (
    <ProtectedRoutes>
      <PublicLayout>
        <SeriesView />
      </PublicLayout>
    </ProtectedRoutes>
  ),
},
  {
    path: "*",
    element: (
      <PublicLayout>
        <ErrorView />
      </PublicLayout>
    ),
  },
]);
