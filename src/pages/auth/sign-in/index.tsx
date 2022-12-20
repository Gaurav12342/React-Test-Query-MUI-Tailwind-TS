import { FC, useState } from "react";
import LoginComponent from "./Login";
import { useNavigate } from "react-router-dom";
import { IForm } from "./types";
import axios from "axios";
import { useMutation } from "react-query";
import { LOGIN_ROUTE } from "resources";
import { routes } from "router/constants";

const Login: FC = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<IForm>({
    email: "",
    password: "",
    isEmail: false,
    isPassword: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleAddUser = (obj: IForm) => {
    return axios.post(LOGIN_ROUTE, obj);
  };
  const handleLoginSuccess = (res: any) => {
    if (res?.status === 200) {
      navigate(routes.home_page.path);
    }
  };

  const { mutate, isLoading: isSignInLoader } = useMutation(handleAddUser, {
    onSuccess: handleLoginSuccess,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      isEmail: false,
      isPassword: false,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    if (!userData?.password && !userData?.email) {
      setUserData({ ...userData, isEmail: true, isPassword: true });
    } else if (!userData?.email) {
      setUserData({ ...userData, isEmail: true });
    } else if (!userData?.password) {
      setUserData({ ...userData, isPassword: true });
    } else {
      mutate(userData);
      console.log("Dhanna pani", userData);
    }
  };

  const handleNavigate = () => {
    navigate("/sign-up");
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
        isLoading={isSignInLoader}
        userData={userData}
      />
    </div>
  );
};

export default Login;
