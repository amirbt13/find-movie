import { useSelector } from "react-redux";
// import Search from "./Search";
import NewSearch from "./NewSearch";

// MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const mode = useSelector((state) => state.darkmode.mode);
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <NewSearch />
      </div>
    </ThemeProvider>
  );
}

export default App;
