import { Button } from "@mui/material";
import BrightModeToggle from "./components/BrightModeToggle";

function App() {
  return (
    <div className="app">
      <p>hello</p>
      <BrightModeToggle />
      <Button color="primary" variant="contained">
        Test
      </Button>
    </div>
  );
}

export default App;
