import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Registro } from "./components/Registro";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Registro /> 
    },
    {
        path: "/dashboard",
        element: <Dashboard /> 
    }
]);