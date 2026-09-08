import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import Login from '../../features/auth/ui/pages/Login'
import Register from '../../features/auth/ui/pages/Register'

const AppRoutes = () => {
    let router=createBrowserRouter([
        {
            path:"/",
            element:<AuthLayout/>,
            children:[
                {
                    path:"",
                    element:<Login/>,
                },
                {
                    path:"register",
                    element:<Register/>
                }
            ]

        }
    ])
  return <RouterProvider router={router}/>
    
  
}

export default AppRoutes