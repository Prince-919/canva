import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Templates from "./components/Templates";
import CreateDesign from "./components/CreateDesign";
import Main from "./pages/Main";
import Index from "./pages/Index";
import { tokenDecode } from "./utils";

const userInfo = tokenDecode(localStorage.getItem("canva_token"));

const router = createBrowserRouter([
  {
    path: "/",
    element: userInfo ? <Layout /> : <Index />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/templates",
        element: <Templates />,
      },
    ],
  },
  {
    path: "/design/create",
    element: userInfo ? <CreateDesign /> : <Navigate to="/" />,
  },
  {
    path: "/design/:design_id/edit",
    element: userInfo ? <Main /> : <Navigate to="/" />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
