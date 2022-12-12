import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/sign-in";
import Registration from "../pages/auth/sign-up";
import { routes } from "./constants";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.sign_in.path} element={<Login />} />
          <Route path={routes.sign_up.path} element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
