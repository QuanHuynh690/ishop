import React, { FC } from "react";
import { Dialog } from "@material-ui/core";
import "./index.scss";
import { images } from "../../assets";
interface ModalProps {
  open: boolean;
  handleClose?: () => void;
  children: any;
}
const Modal: FC<ModalProps> = (props) => {
  const { open, handleClose, children } = props;
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth="lg"
      PaperProps={{
        style: {
          overflow: "visible",
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      {/* <DialogTitle>Set backup account</DialogTitle> */}
      {children}
      <span className="close-modal" onClick={handleClose}>
        <images.Close />
      </span>
    </Dialog>
  );
};
export default Modal;
