import { Forge } from '@features/instruments/ui';
import { LootResources } from '@features/resources/ui';
import { store } from '@store';
import { InstrumentResourcesInfo } from '@widgets';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="w-5/6 flex flex-col mx-auto my-6">
        <div className="w-full flex flex-row justify-between">
          <div className="w-full flex flex-row flex-wrap gap-4">
            <LootResources />
            <Forge />
          </div>
          <InstrumentResourcesInfo />
        </div>
      </div>
    </Provider>
  );
}

export default App;
