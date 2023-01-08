import { Provider } from "react-redux";
import store from "./redux/store";
import Search from "./Search";
import NewSearch from "./NewSearch";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NewSearch />
      </div>
    </Provider>
  );
}

export default App;
