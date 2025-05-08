import { Stone } from '@features/resources/ui/Stone/Stone';
import { Wood } from '@features/resources/ui/Wood/Wood';
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
