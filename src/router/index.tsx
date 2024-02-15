import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../Pages/Home";
import RootLayout from "../Pages/Layout";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import ProductsPage from "../Pages/ProductsPage";
import ProtectedRouter from "../Components/Auth/ProtectedRouter";
import { useSelector } from "react-redux";
import { authSelector } from "../RTK/features/Auth/Auth";
import ErrorHandler from "../Components/Errors/ErrorHandler";
import PageNotFound from "../Pages/NotFoundPage";
import ProductDetails from "../Pages/ProductDetails";
import WishList from "../Pages/WishList";

export interface IUser {
  email: string;
  password: string;
}

const Router = () => {
  const { isLoggedIn } = useSelector(authSelector);

  // create router with all routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* root layout */}
        <Route
          path="/"
          element={<RootLayout />}
          errorElement={<ErrorHandler />}
        >
          <Route index element={<Home />} />
          <Route
            path="/cart"
            element={
              <ProtectedRouter isLoggedIn={isLoggedIn} pathName="/login">
                <Cart />
              </ProtectedRouter>
            }
          />
          <Route
            path="/wishList"
            element={
              <ProtectedRouter isLoggedIn={isLoggedIn} pathName="/login">
                <WishList />
              </ProtectedRouter>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRouter isLoggedIn={!isLoggedIn} pathName="/products">
                <Login />
              </ProtectedRouter>
            }
          />
          <Route path="/products" element={<ProductsPage />} /> {/* 404 */}
          <Route
            path="/productDetails/:productId"
            element={<ProductDetails />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );

  return router;
};

export default Router;
