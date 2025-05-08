import { Provider } from "react-redux";
import { Stone } from "../features/resources/ui/Stone/Stone";
import { Wood } from "../features/resources/ui/Wood/Wood";
import { store } from "../store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Game Window</h1>
        <Wood />
        <Stone />
      </div>
    </Provider>
  );
}

export default App;
