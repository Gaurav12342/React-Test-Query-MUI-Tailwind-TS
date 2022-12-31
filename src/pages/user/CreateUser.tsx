import { FC, useState } from "react";
import CreateUserComp from "components/CreateUser";
import { useNavigate } from "react-router-dom";
import { IForm, ISuccessData } from "./interface.types";
import axios from "utils/AxiosInterceptor";
import common from "pages/user/userConstant.json";
import { useMutation } from "react-query";
import { routes } from "router/constants";

const CreateUser: FC = () => {
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState<IForm>({
    id: "0",
    name: "",
    email: "",
    location: "",
  });

  const manageUser = (obj: IForm) => {
    return axios.post(common?.GET_USERS, obj);
  };

  const onSuccess = (data?: ISuccessData) => {
    if (data?.status === 201 || data?.status === 200) {
      navigate(`/${routes.privateRoute.dashboard.path}`);
    }
  };

  const { isLoading, mutate } = useMutation("manage-user", manageUser, {
    onSuccess,
  });

  const handleSubmit = () => {
    const obj: IForm = {
      id: userData?.id,
      name: userData?.name || "",
      email: userData?.email || "",
      location: userData?.location || "",
    };
    console.log("Obj =>", obj);
    mutate(obj);
  };

  return (
    <div>
      <CreateUserComp
        setUserData={setUserData}
        userData={userData}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
};

export default CreateUser;
