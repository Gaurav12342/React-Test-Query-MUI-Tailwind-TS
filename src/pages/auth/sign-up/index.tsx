import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "router/constants";
import RegistrationComponent from "./Registration";

const Registration: FC = () => {
  const navigate: any = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNavigate = () => {
    navigate("/sign-up");
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
