import { LanguageSwitch } from '@features/i18next/model';
import { store } from '@store';
import { InstrumentResourcesInfo } from '@widgets';
import { ResourcesSection, ServicesSection } from '@features/buildings/ui/CardsSection';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="w-5/6 h-svh flex flex-col mx-auto relative">
        <div className="w-full my-6 flex flex-row justify-between">
          <div className="flex flex-row flex-wrap gap-24">
            <ResourcesSection />
            <ServicesSection />
          </div>
          <InstrumentResourcesInfo />
        </div>
        <div className="absolute bottom-6 right-4">
          <LanguageSwitch />
        </div>
      </div>
    </Provider>
  );
}

export default App;
