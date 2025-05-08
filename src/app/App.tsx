import { Stone, Wood } from '@features/resources/ui';
import { store } from '@store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Wood />
        <Stone />
      </div>
    </Provider>
  );
}

export default App;
