import About from "../../components/About/About";
import Authentication from "../../components/Authentication/Authentication";
import BookTable from "../../components/BookTable/BookTable";
import FoodList from "../../components/FoodList/FoodList";
import Conduct from "../../container/Conduct/Conduct";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../components/Home/Home");
const { default: Main } = require("../../Layout/Main");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/food_menu",
        element: <FoodList />,
      },
      {
        path: "/about_us",
        element: <About/>
      },
      {
        path: "/conduct",
        element: <Conduct/>
      },
      {
        path: "/signup",
        element: <Authentication/>
      },
      {
        path: "/book_table",
        element: <BookTable/>
      }
    ],
  },
]);