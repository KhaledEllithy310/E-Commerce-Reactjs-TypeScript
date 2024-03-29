import { RouterProvider } from "react-router-dom";
import "./App.css";
import Router from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <RouterProvider router={Router()} />
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default App;
