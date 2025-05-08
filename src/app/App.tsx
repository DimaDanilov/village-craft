import { Stone, Wood } from '@features/resources/ui';
import { store } from '@store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="w-5/6 flex flex-col mx-auto">
        <Wood />
        <Stone />
      </div>
    </Provider>
  );
}

export default App;
