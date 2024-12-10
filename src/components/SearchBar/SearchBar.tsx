import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";
interface SearchBarProps {
  handleSearchedExercises: (
    e: React.SyntheticEvent<Element, Event>,
    newValue: string
  ) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ handleSearchedExercises }) => {
  return (
    <div className="search-bar">
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => handleSearchedExercises(e, e.target.value)}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
