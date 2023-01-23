export interface IForm {
    email: string;
    password: string;
    isEmail?: boolean;
    isPassword?: boolean;
}

export interface ILogin {
    showPassword?: boolean;
    setUserData?: React.Dispatch<React.SetStateAction<IForm>>;
    handleChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    handleSubmit?: () => void;
    handleNavigate?: () => void;
    handleClickShowPassword?: () => void;
    isLoading?: boolean;
    userData?: IForm;
}

export interface ILoginSuccessProps {
    status?: number;
    data?: {
      code?: number;
      data?: {
        Email: string;
        Id: number;
        Name: string;
        Token: string;
      };
    };
  }