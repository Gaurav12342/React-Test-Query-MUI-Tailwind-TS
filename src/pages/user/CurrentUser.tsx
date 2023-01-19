import { FC } from 'react'
import { isLogin } from 'utils/auth';
import { useQuery } from 'react-query';
import axios from 'utils/AxiosInterceptor';
import common from "pages/user/userConstant.json";
import { Card, CardContent, CardMedia, Typography, CardActionArea, Skeleton, Box } from '@mui/material';

const CurrentUser: FC = () => {
    const loggedUser = JSON.parse(isLogin);

    const fetchCurrentUser = () => {
        return axios.get(`${common?.GET_USERS}/${loggedUser?.Id}`)
    }
    const { isLoading, data } = useQuery(["current-user", loggedUser?.Id], () => fetchCurrentUser());

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                {isLoading ? <CardActionArea>
                    <Box sx={{ width: "100%" }}>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                    </Box>
                </CardActionArea> :
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
                }
            </Card>
        </div>
    )
}

export default CurrentUser