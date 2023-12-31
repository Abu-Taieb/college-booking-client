import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Layout/Mail/Main";
import College from "../../Pages/College/College";
import Admission from "../../Pages/Admission/Admission";
import MyCollege from "../../Pages/MyCollege/MyCollege";
import Contact from "../../Pages/Contact/Contact";
import Form from "../../Pages/Admission/Form";
import Error from "../../Pages/Error/Error";
import SignIn from "../../Pages/Authentication/SignIn";
import SignUp from "../../Pages/Authentication/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "college",
        element: <College></College>,
      },
      {
        path: "admission",
        element: <Admission></Admission>,
      },
      {
        path: "myCollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "form",
        element: <Form></Form>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
