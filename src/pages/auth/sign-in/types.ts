export interface IForm {
    email: string;
    password: string;
}

export interface ILogin {
    showPassword?: boolean;
    setUserData?: React.Dispatch<React.SetStateAction<IForm>>;
    handleChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    handleSubmit?: () => void;
    handleNavigate?: () => void;
    handleClickShowPassword?: () => void;
    isLoading?: boolean;
}