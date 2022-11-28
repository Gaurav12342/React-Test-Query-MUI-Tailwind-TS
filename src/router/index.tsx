import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/sign-in';
import { routes } from './constants';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={routes.sign_in.path} element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router