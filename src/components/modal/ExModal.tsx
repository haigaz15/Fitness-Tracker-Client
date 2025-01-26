import * as React from "react";
import Modal from "@mui/material/Modal";
import { ExerciseModalProps } from "../../types/exercise-types";

const ExModal: React.FC<ExerciseModalProps> = ({
  open,
  handleClose,
  renderModalContent,
}) => {
  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <>{renderModalContent && renderModalContent()}</>
      </Modal>
    </React.Fragment>
  );
};

export default ExModal;
