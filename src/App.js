import Bugs from './components/Bugs';
import UnresolvedBugs from "./components/UnresolvedBugs";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Bugs />
      Unresolved Bugs:
      <UnresolvedBugs />
    </Provider>
  );
}

export default App;
