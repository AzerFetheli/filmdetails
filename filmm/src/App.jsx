import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import MainLayout from './layouts/main/MainLayout'
import Home from './layouts/main/pages/Home'
import Details from './layouts/main/pages/Details'
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home/:id",
        element: <Details />,
      },
      {
        path: "/",
        element: <Home />

      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "*",
        element: <h1>Page Not Found</h1>
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
