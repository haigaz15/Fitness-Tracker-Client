import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

const ExTimeField: React.FC<{
  label: string;
  handleTimeChange: (newValue: Dayjs | null) => void;
}> = ({ label, handleTimeChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={label}
        ampm={false} // Use 24-hour format, no AM/PM
        views={["hours", "minutes", "seconds"]} // Allow hours, minutes, and seconds
        onChange={handleTimeChange}
      />
    </LocalizationProvider>
  );
};

export default ExTimeField;
