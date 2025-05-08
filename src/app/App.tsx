import { ResourcesPanel } from '@features/resources/ui';
import { store } from '@store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="w-5/6 flex flex-col mx-auto">
        <div className="w-fit mr-0 ml-auto">
          <ResourcesPanel />
        </div>
      </div>
    </Provider>
  );
}

export default App;
