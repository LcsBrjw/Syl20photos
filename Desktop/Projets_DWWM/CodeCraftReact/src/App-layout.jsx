import {  Outlet } from "react-router";
import { LateralOverlay } from "./components/Modal/LateralOverlay";
import { Header } from "./components/Header/Header";

export const AppLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        {/* <Footer /> */}
    </div>
  );
};