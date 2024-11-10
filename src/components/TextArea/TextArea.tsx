import { TextField } from "@mui/material";

const TextArea: React.FC<{ label: string }> = ({ label }) => {
  return (
    <TextField
      label={label}
      multiline
      rows={2} // Controls the height (number of visible rows)
      variant="standard"
      fullWidth
    />
  );
};

export default TextArea;
