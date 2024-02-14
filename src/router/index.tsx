import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../Pages/Home";
import RootLayout from "../Pages/Layout";
import Cart from "../Pages/Cart";

export interface IUser {
  email: string;
  password: string;
}

const Router = () => {
  // create router with all routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* root layout */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </>
    )
  );

  return router;
};

export default Router;
