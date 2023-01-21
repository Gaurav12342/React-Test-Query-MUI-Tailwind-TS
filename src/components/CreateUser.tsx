import { FC } from "react";
import { TextField, Paper, Grid, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import comman from "resources/userConstant.json";
import LoadingButton from "@mui/lab/LoadingButton";
import { ICreateUser } from "pages/user/type";

const CreateUserComponent: FC<ICreateUser> = ({
  setUserData,
  userData,
  handleSubmit,
  isLoading,
}) => {
  const params = useParams();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <div data-testid="root">
      <Grid
        sx={{
          margin: "1rem 0",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Button href="/dashboard">Back</Button>
        <Typography variant="h3" gutterBottom component="div">
          {params?.id ? `${comman.UPDATE}` : `${comman.CREATE}`} User
        </Typography>
        <Paper
          sx={{
            margin: "1rem 20rem",
            padding: "3rem 1.5rem",
            backgroundColor: "#e3dddd",
            borderRadius: "10px",
            width: "50%",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent={"center"}
            alignItems={"center"}
            spacing={3}
          >
            <Grid item xs={6}>
              <TextField
                name="name"
                value={userData?.name}
                onChange={handleChange}
                id="name"
                label="User Name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="email"
                value={userData?.email}
                onChange={handleChange}
                id="email"
                label="User Email"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="location"
                value={userData?.location}
                onChange={handleChange}
                id="location"
                label="User Location"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <LoadingButton
                className="w-64 py-2 rounded-md font-robotSlabSerif bg-sky-600 text-white"
                onClick={handleSubmit}
                loading={isLoading}
                variant="contained"
                id="user-button"
                name="user-button"
              >
                {params?.id ? `${comman.UPDATE}` : `${comman.CREATE}`}
              </LoadingButton>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default CreateUserComponent;
