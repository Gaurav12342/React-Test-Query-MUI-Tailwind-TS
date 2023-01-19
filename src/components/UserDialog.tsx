import { FC } from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import comman from "resources/userConstant.json";
import { ConfirmPopupProps } from 'pages/user/interface.types';

const UserDialoag: FC<ConfirmPopupProps> = (props) => {
    const { open, handleConfirm, rowData, handleCancel, deleteUserLoader } = props;
    return (
        <Dialog
            open={open}
            onClose={handleCancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Delete Record"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {`Are you sure you want to delete ${rowData?.id} record ?`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <LoadingButton
                    loading={deleteUserLoader ? true : false}
                    onClick={handleConfirm}
                >
                    {comman.CONFIRM}
                </LoadingButton>
                <Button onClick={handleCancel} autoFocus>
                    {comman.CANCEL}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UserDialoag