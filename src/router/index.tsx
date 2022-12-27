import { FC } from "react";
import Home from "pages/user";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/sign-in";
import Registration from "../pages/auth/sign-up";
import { routes } from "./constants";
import PrivateOutlet from "./PrivateRoute";

const Router: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.sign_in.path} element={<Login />} />
          <Route path={routes.sign_up.path} element={<Registration />} />
          <Route path={routes.privateRoute.path} element={<PrivateOutlet />}>
          <Route path={routes.privateRoute.dashboard.path} element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
