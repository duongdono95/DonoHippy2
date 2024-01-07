import { IconButton, useColorScheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const BrightModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <IconButton
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "dark" ? (
        <Brightness7Icon color="secondary" />
      ) : (
        <Brightness4Icon color="secondary" />
      )}
    </IconButton>
  );
};

export default BrightModeToggle;
