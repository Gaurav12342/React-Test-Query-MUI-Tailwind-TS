import { FC } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import Header from "layout/Header";
import { isLogin } from "utils/auth";

const PrivateOutlet: FC = () => {
    const { pathname } = useLocation();
    const isLogged = JSON.parse(isLogin)

    return isLogged?.Token ? (
        <>
            <Header />
            <Outlet />
        </>
    ) : <Navigate to="/" state={{ from: pathname }} replace />
};

export default PrivateOutlet;
