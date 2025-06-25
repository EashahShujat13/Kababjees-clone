import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import AboutUs from "../components/AboutUs";
import Location from "../components/Location";
import BankDiscount from "../components/BankDiscount";
import Contact from "../components/ContactPage";
import HeroSection from "../components/HeroSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><HeroSection/></>,
  },
   {
    path: "about",
    element: <><AboutUs/></>,
  },
   {
    path: "location",
    element: <><Location/></>,
  },
   {
    path: " bankDiscount",
    element: <><BankDiscount/></>,
  },
   {
    path: "contact",
    element: <><Contact/></>,
  },
]);

function Router(){
    return(
         <RouterProvider router={router} />
    )
}

export default Router;