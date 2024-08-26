import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const CloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <IconButton
      aria-label="close"
      onClick={onClose}
      sx={{
        position: "absolute",
        top: 8,
        right: 8,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default CloseButton;
