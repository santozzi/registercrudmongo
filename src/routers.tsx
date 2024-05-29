import { Outlet, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Registro } from "./components/Registro";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/Registro",
        element: <Registro />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
    ],
  },
]);
function NavbarWrapper(){
    return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
    )
};
