import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import AppRouting from "./App.routing";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRouting />
      </Router>
    </Provider>
  );
}

export default App;
