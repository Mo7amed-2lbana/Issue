import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "./Component/LayOut/LayOut";
import { HandleActiveContextProvider } from "./Context/HandleActive";
import CalendarComp from "./Component/Calendar/Calendar";

const routers = createBrowserRouter([
  {
    path: "",
    element: <LayOut />,
    children: [{ path: "calendar", element: <CalendarComp /> }],
  },
]);

export default function App() {
  return (
    <>
      <HandleActiveContextProvider>
        <RouterProvider router={routers} />
      </HandleActiveContextProvider>
    </>
  );
}
