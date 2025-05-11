import { Forge } from '@features/instruments/ui';
import { Forest } from '@features/resources/ui';
import { Market } from '@features/resources/ui';
import { Mines } from '@features/resources/ui';
import { DECK_CARD_RESOURCE_PALETTE, DECK_CARD_SERVICE_PALETTE } from '@shared/DeckCard';
import { store } from '@store';
import { InstrumentResourcesInfo } from '@widgets';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="w-5/6 flex flex-col mx-auto my-6">
        <div className="w-full flex flex-row justify-between">
          <div className="w-full flex flex-row flex-wrap gap-24">
            <div className="flex flex-col gap-4">
              <h1 className={`text-2xl font-bold ${DECK_CARD_RESOURCE_PALETTE.textColorClassName}`}>Resources</h1>
              <div className="grid grid-cols-2 gap-4">
                <Forest />
                <Mines />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className={`text-2xl font-bold ${DECK_CARD_SERVICE_PALETTE.textColorClassName}`}>Services</h1>
              <div className="grid grid-cols-2 gap-4">
                <Market />
                <Forge />
              </div>
            </div>
          </div>
          <InstrumentResourcesInfo />
        </div>
      </div>
    </Provider>
  );
}

export default App;
