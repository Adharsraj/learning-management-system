import React, { FC } from "react";
import { Modal, Box } from "@mui/material";
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: any;
  component: any;
  setRoute?: (route: string) => void;
};

const CustomModal: FC<Props> = ({
  open,
  setOpen,
  setRoute,
  component: Component,
}) => {
  return (
    <div className="">
      <Modal
        open={open}
        onClose={() => onclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Component setOpen={setOpen} setRoute={setRoute} />
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
