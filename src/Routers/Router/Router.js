import About from "../../components/About/About";
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
      }
    ],
  },
]);