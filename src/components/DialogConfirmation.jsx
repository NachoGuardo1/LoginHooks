import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React from "react";

export const DialogConfirmation = ({
  title,
  functionConfirm,
  openClean,
  setOpenClean,
}) => {
  const confirmFn = () => {
    functionConfirm();
    setOpenClean(false);
  };
  return (
    <Dialog open={openClean} onClose={() => setOpenClean(false)}>
      <DialogTitle>{title}</DialogTitle>
      <DialogActions>
        <Button autoFocus onClick={() => setOpenClean(false)}>
          Cancel
        </Button>
        <Button autoFocus onClick={confirmFn}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
