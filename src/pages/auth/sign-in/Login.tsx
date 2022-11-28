import { FC } from 'react';
import {
    OutlinedInput,
    IconButton,
    InputAdornment,
    TextField,
    FormControl,
    InputLabel,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import deskImage from 'assets/images/image-desktop.jpg';
import { ILogin } from './types';

const Login: FC<ILogin> = ({
    showPassword,
    handleChange,
    handleSubmit,
    handleNavigate,
    handleClickShowPassword,
    isLoading
}) => {
    return (
        <>
            <div data-testid="form-data" className="max-h-full max-w-md md:max-w-full">
                <div className="flex flex-col max-w-3xl ml-48 -mr-32 md:mx-auto mt-1 md:mt-32 rounded-xl overflow-hidden bg-slate-300 md:flex md:flex-row">
                    <div className="w-full md:w-1/2">
                        <img src={deskImage} className="w-full h-52 md:h-96" />
                    </div>
                    <div className="w-full mt-4 md:mt-10 md:w-1/2">
                        <div className="-ml-5 px-8 py-2 text-4xl">
                            <p className="font-mono">Sign In</p>
                        </div>

                        <div className="space-y-6 flex-col ml-5 mr-16 md:mx-8 md:ml-3">
                            <TextField
                                fullWidth
                                name="email"
                                onChange={handleChange}
                                id="email"
                                label="Email"
                                variant="outlined"
                            />

                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    name="password"
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={handleChange}
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
                                    label="Password"
                                />
                            </FormControl>
                        </div>

                        <div className="-ml-9 mr-4 mt-6 flex justify-center md:-ml-1">
                            <LoadingButton
                                className="w-64 py-2 rounded-md font-robotSlabSerif bg-sky-600 text-white"
                                onClick={handleSubmit}
                                loading={isLoading}
                                variant="contained"
                            >
                                Sign In
                            </LoadingButton>
                        </div>

                        <div className="-ml-9 mr-4 my-4 flex justify-center md:-ml-1">
                            <a
                                className="font-robotSlabSerif text-sky-600 cursor-pointer"
                                onClick={handleNavigate}
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login