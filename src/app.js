import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Header from "./Components/Header";
import RestroList from "./Utils/mockData";
import About from"./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";


// const jsxHeading =<h1 id="Hii">Hi Welcome to jsxheading</h1> 
// console.log(jsxHeading);

const Grocery=lazy(()=> import("./Components/Grocery"));
const AppLayout=() => {
    return( <div className="App">
           <Header />
           <Outlet />
        </div>
    );
};
  const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children : [
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/About",
                element:<About />,
            },
            {
                path:"/Contact",
                element:<Contact />,
            },
            {
                path:"/Grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery/>
                    </Suspense>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />,
            },
],
     errorElement:<Error/>,
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);