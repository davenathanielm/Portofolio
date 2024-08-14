// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css'
// import Home from './views/Home'
// import { Children } from 'react';

import { RouterProvider,createBrowserRouter} from "react-router-dom";

import HomeRoot from "./routes/HomeRoot";
import HomeMain from"./views/home/HomeMain";
// import HomeMain from "./views/Default";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot/>,
    // ini untuk halaman loader 
    // loader: rootLoader,
    children: [
      {
        // index home root = true ini digunakan untuk masuk ke outlet yang di homeroot 
        index: true,
        element: <HomeMain/>,
      },
    ],
  },
]);

const App = () => {
  return(
    <>
    <RouterProvider router={router} />
    </>
  );
};
export default App
