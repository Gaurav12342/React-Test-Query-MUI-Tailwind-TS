export interface IRowData {
  createdat?: string;
  email?: string;
  id?: number;
  location?: string;
  name?: string;
  profilepicture?: string;
}

export interface ICurrentUser {
  createdat?: string;
  email?: string;
  id?: number;
  location?: string;
  name?: string;
  profilepicture?: string;
}

export interface ConfirmPopupProps {
  open?: any;
  handleConfirm: () => void;
  rowData?: ICurrentUser;
  handleCancel: () => void;
  deleteUserLoader?: boolean;
}

export interface IForm {
  id?: string;
  name: string;
  email: string;
  location: string;
}
export interface ICreateUser {
  setUserData?: any;
  userData?: IForm;
  handleSubmit?: () => void;
  isLoading?: boolean;
}
