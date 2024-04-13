import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './Screens/Home';
import './index.css';
import { Login } from "./Screens/Login";
import { useAuth } from "./Contexts/Auth";

const router = createBrowserRouter([
  {path: "/", element: <Login/>}
]);

const routerSigned = createBrowserRouter([
  {path: "/", element: <Home/>}
]);

function App() {
  const {signed} = useAuth();

  return (
    <RouterProvider router={!signed ? router : routerSigned} />
  )
}

export default App;
