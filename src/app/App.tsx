import { LootResources, ResourcesStats } from '@features/resources/ui';
import { store } from '@store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="w-5/6 flex flex-col mx-auto my-6">
        <div className="flex flex-row justify-between">
          <div>
            <LootResources />
          </div>
          <div className="w-3/12">
            <ResourcesStats />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
