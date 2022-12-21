import { FC, useState } from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import deskImage from "assets/images/image-desktop.jpg";
import { useNavigate } from "react-router-dom";
import { routes } from "router/constants";

const Registration: FC<any> = ({
  showPassword,
  setShowPassword,
  handleClickShowPassword,
  handleNavigate,
}) => {
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="max-h-full max-w-md md:max-w-full">
        <div className="flex flex-col max-w-3xl ml-48 -mr-32 md:mx-auto mt-1 md:mt-32 rounded-xl overflow-hidden bg-slate-300 md:flex md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={deskImage}
              alt="registration-image"
              className="w-full h-52 md:h-96"
            />
          </div>
          <div className="w-full mt-2 md:mt-10 md:w-1/2">
            <div className="-ml-5 px-8 py-2 text-4xl">
              <p className="font-alkalami">{"Registration"}</p>
            </div>

            <div className="space-y-2 flex-col ml-5 mr-16 md:mx-8 md:ml-3">
              <TextField
                fullWidth
                id="username"
                label="Username"
                name="username"
                variant="outlined"
                aria-labelledby="username"
              />
              <TextField
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                name="email"
                aria-labelledby="email"
              />
              <FormControl
                fullWidth
                aria-labelledby="password"
                variant="outlined"
              >
                <InputLabel
                  aria-label="password"
                  htmlFor="outlined-adornment-password"
                  aria-labelledby="password"
                  id="password"
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  aria-label="password"
                  id="standard-adornment-password"
                  name="password"
                  aria-labelledby="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>

            <div className="-ml-9 mr-4 mt-4 flex justify-center md:-ml-1">
              <button className="w-64 py-2 rounded-md font-robotSlabSerif bg-sky-600 text-white">
                {"Sign Up"}
              </button>
            </div>

            <div className="-ml-9 mr-4 my-4 mt-2 flex justify-center md:-ml-1">
              <a
                aria-labelledby="sign-in"
                className="font-robotSlabSerif text-sky-600 cursor-pointer"
                onClick={handleNavigate}
              >
                {"Sign In"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
