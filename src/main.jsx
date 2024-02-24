import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import ResidentData from './components/ResidentData.jsx';
import PlanetCard from './components/PlanetCard.jsx';
const router = createBrowserRouter([
  {
    path:"/",element:<App/>,
    children: [
      {
        path: "/",
        element:<PlanetCard/>,
      },
      {
        path: "/resident-info",
        element:<ResidentData/>,
      },
    
    
    ],
  }]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
