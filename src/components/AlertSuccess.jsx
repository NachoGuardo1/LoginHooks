import { Dialog, DialogContent, DialogContentText, Slide } from "@mui/material";
import React, { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const AlertSuccess = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };
  const handleOpenAlert = () => {
    setOpenAlert(true);
  };
  return (
    <>
      <Dialog
        open={openAlert}
        onClose={handleCloseAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Welcome
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};
