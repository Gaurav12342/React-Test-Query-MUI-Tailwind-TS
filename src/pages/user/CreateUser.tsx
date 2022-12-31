import { FC, useState } from "react";
import CreateUserComp from "components/CreateUser";
import { useNavigate, useParams } from "react-router-dom";
import { IForm, IGetUserSuccessData, ISuccessData } from "./interface.types";
import axios from "utils/AxiosInterceptor";
import common from "pages/user/userConstant.json";
import { useMutation, useQuery } from "react-query";
import { routes } from "router/constants";

const CreateUser: FC = () => {
  const navigate = useNavigate();
  const params: any = useParams();

  const [userData, setUserData] = useState<IForm>({
    id: "0",
    name: "",
    email: "",
    location: "",
  });

  const manageUser = (obj: IForm) => {
    if (params?.id) {
      return axios.put(`${common.GET_USERS}/${obj?.id}`, obj);
    } else {
      return axios.post(common.GET_USERS, obj);
    }
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

  const fetchuserById = (id: string) => {
    return axios.get(`${common.GET_USERS}/${id}`);
  };

  const getUserOnSucess = (data: IGetUserSuccessData) => {
    if (data?.status === 200) {
      setUserData({
        id: data?.data?.id as string,
        name: data?.data?.name as string,
        email: data?.data?.email as string,
        location: data?.data?.location as string,
      });
    }
  };

  useQuery(["fetch-user-by-id", params?.id], () => fetchuserById(params?.id), {
    onSuccess: getUserOnSucess,
  });
  
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
