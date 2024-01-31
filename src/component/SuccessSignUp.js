import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./SuccessSignUp.css";
export const SuccessSignUp = ({ open, userNameSignUp, setShowModel }) => {
  return (
    <div className="dialog">
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="dialog"
      >
        <DialogTitle id="alert-dialog-title">
          {" "}
          <CheckCircleIcon /> Sign Up Successful!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {userNameSignUp}, Your registration was successful. Welcome aboard!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setShowModel(false)}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
