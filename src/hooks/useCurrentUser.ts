import { isLogin } from "utils/auth";
import { useQuery } from "react-query";
import axios from "utils/AxiosInterceptor";
import common from "resources/userConstant.json";

export const useCurrentUser = () => {
  const loggedUser = JSON.parse(isLogin);

  const fetchCurrentUser = () => {
    return axios.get(`${common?.GET_USERS}/${loggedUser?.Id}`);
  };
  const { data } = useQuery(
    ["current-user", loggedUser?.Id],
    () => fetchCurrentUser(),
    { refetchOnMount: true }
  );

  return {
    id: data?.data?.id,
    name: data?.data?.name,
    email: data?.data?.email,
    location: data?.data?.location,
    profilepicture: data?.data?.profilepicture,
  };
};
