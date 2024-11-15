import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import EventIcon from "@mui/icons-material/Event";
import { IconButton, InputAdornment } from "@mui/material";
import { RefAttributes, useState } from "react";
import { Dayjs } from "dayjs";

const Date = (
  props: JSX.IntrinsicAttributes &
    DatePickerProps<Dayjs, false> &
    RefAttributes<HTMLDivElement>
) => {
  // State to control the open/close of DatePicker
  const [open, setOpen] = useState(false);

  // Toggle date picker visibility when icon is clicked
  const handleIconClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...props}
        label="Basic date picker"
        open={open} // Control the opening of the date picker
        onOpen={() => setOpen(true)} // Triggered when the picker opens
        onClose={() => setOpen(false)} // Triggered when the picker closes
        slotProps={{
          textField: {
            variant: "outlined",
            InputProps: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={handleIconClick}>
                    <EventIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            },
            sx: {
              "& .MuiInputBase-root": {
                fontSize: "0.875rem",
                height: "40px", // Adjust height
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderWidth: "1px", // Thinner border
              },
              "& .MuiInputLabel-root": {
                fontSize: "0.875rem", // Smaller label font
                top: "50%", // Vertically center label
                left: "12px", // Align label to the left
                transform: "translate(0, -50%)", // Center label
                transition: "all 0.2s ease-out", // Label smooth transition
                backgroundColor: "white", // Label background to match input
                padding: "0 4px", // Padding for better readability
              },
              "& .MuiInputLabel-shrink": {
                top: "-6px", // Move label upwards on focus
                left: "12px", // Keep left-aligned label
                transform: "translate(0, 0) scale(0.75)", // Shrink label
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default Date;
