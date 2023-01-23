import { FC, useEffect } from "react";
import { isLogin } from "utils/auth";
import { useQuery } from "react-query";
import axios from "utils/AxiosInterceptor";
import common from "resources/userConstant.json";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Skeleton,
  Box,
} from "@mui/material";
import { ICurrentUserComp } from "./type";

const CurrentUser: FC<ICurrentUserComp> = ({ selectTabValue }) => {
  const loggedUser = JSON.parse(isLogin);

  const fetchCurrentUser = () => {
    return axios.get(`${common?.GET_USERS}/${loggedUser?.Id}`);
  };
  const { isLoading, data, refetch } = useQuery(
    ["current-user", loggedUser?.Id],
    () => fetchCurrentUser()
    // {
    //   refetchOnWindowFocus: "always",
    //   refetchOnMount: "always",
    //   enabled: !selectTabValue,
    // }
  );

  useEffect(() => {
    refetch();
  }, [selectTabValue]);

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        {isLoading ? (
          <CardActionArea>
            <Box sx={{ width: "100%" }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </CardActionArea>
        ) : (
          <CardActionArea>
            <CardMedia
              component="img"
              height="80"
              image={data?.data?.profilepicture}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data?.data?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data?.data?.id}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data?.data?.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data?.data?.location}
              </Typography>
            </CardContent>
          </CardActionArea>
        )}
      </Card>
    </div>
  );
};

export default CurrentUser;
