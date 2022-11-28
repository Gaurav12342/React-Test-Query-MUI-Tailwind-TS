import { FC, useState } from 'react';
import LoginComponent from './Login';
import { useNavigate } from 'react-router-dom';
import { IForm } from './types';

const Login: FC = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState<IForm>({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
        console.log("Dhanna pani", userData);
    }

    const handleNavigate = () => {
        navigate('/sign-up');
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div>
            <LoginComponent
                showPassword={showPassword}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleNavigate={handleNavigate}
                handleClickShowPassword={handleClickShowPassword}
                isLoading={false} />
        </div>
    )
}

export default Login