import CakeContainer from "./components/CakeContainer";
import { Provider } from 'react-redux';

import store from '../src/components/redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;