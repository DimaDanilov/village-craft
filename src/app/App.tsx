import { Forge } from '@features/instruments/ui';
import { LootResources } from '@features/resources/ui';
import { store } from '@store';
import { InstrumentResourcesInfo } from '@widgets';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="w-5/6 flex flex-col mx-auto my-6">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-2">
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
