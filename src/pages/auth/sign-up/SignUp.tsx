import { FC } from "react";
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
import { ISignUpProps } from "./types";

const SignUp: FC<ISignUpProps> = ({
  showPassword,
  handleClickShowPassword,
  handleNavigate,
}) => {
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
                label="username"
                name="username"
                variant="outlined"
                aria-labelledby="username"
              />
              <TextField
                fullWidth
                id="email"
                label="email"
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
                  id="password"
                  aria-label="password"
                  aria-labelledby="password"
                  htmlFor="outlined-adornment-password"
                >
                  password
                </InputLabel>
                <OutlinedInput
                  aria-labelledby="password"
                  name="password"
                  aria-label="password"
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  label="password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
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

export default SignUp;
