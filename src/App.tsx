import React, { Provider } from "react";
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./Components/CustomRoutes";
import "./styles.css";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function App() {
  return (
    <div className="App">
      <ProSidebarProvider>
        <BrowserRouter>
          <CustomRoutes />
        </BrowserRouter>
      </ProSidebarProvider>
    </div>
  );
}
