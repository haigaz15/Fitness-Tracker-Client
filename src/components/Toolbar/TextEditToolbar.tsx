import { Box, Select, MenuItem, IconButton, BoxProps } from "@mui/material";

import FormatBoldRoundedIcon from "@mui/icons-material/FormatBoldRounded";
import FormatItalicRoundedIcon from "@mui/icons-material/FormatItalicRounded";
import StrikethroughSRoundedIcon from "@mui/icons-material/StrikethroughSRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";

const TextEditToolbar = (props: BoxProps) => {
  const { sx, ...other } = props;

  return (
    <Box
      {...other}
      sx={{
        display: "flex",
        gap: 0.5,
        "& > button": { fontSize: "12px" },
        ...(Array.isArray(sx) ? sx : [sx]),
      }}
    >
      {/* Select Dropdown */}
      <Select
        size="small"
        defaultValue="1"
        sx={{ minWidth: 120 }}
        variant="outlined"
      >
        <MenuItem value="1">Normal text</MenuItem>
        <MenuItem value="2" sx={{ fontFamily: "monospace" }}>
          Code text
        </MenuItem>
      </Select>

      {/* Bold Button */}
      <IconButton size="small" color="default">
        <FormatBoldRoundedIcon />
      </IconButton>

      {/* Italic Button */}
      <IconButton size="small" color="default">
        <FormatItalicRoundedIcon />
      </IconButton>

      {/* Strikethrough Button */}
      <IconButton size="small" color="default">
        <StrikethroughSRoundedIcon />
      </IconButton>

      {/* List Button */}
      <IconButton size="small" color="default">
        <FormatListBulletedRoundedIcon />
      </IconButton>
    </Box>
  );
};

export default TextEditToolbar;
