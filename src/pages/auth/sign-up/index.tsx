import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "router/constants";
import RegistrationComponent from "./SignUp";

const Registration: FC = () => {
  const navigate: any = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNavigate = () => {
    navigate(routes.sign_in.path);
  };

  return (
    <RegistrationComponent
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      handleClickShowPassword={handleClickShowPassword}
      handleNavigate={handleNavigate}
    />
  );
};

export default Registration;
