export interface ISignUpProps {
  showPassword?: boolean;
  handleClickShowPassword?: () => void;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
  handleNavigate?: () => void;
}
