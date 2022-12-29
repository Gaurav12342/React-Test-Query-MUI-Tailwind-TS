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
