import { LanguageSwitch } from '@features/i18next/model';
import { store } from '@store';
import { InstrumentResourcesInfo } from '@widgets';
import { ResourcesSection, ServicesSection } from '@widgets/CardsSection';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="w-5/6 flex flex-col mx-auto my-6">
        <div className="w-full flex flex-row justify-between">
          <div className="w-full flex flex-row flex-wrap gap-24">
            <ResourcesSection />
            <ServicesSection />
          </div>
          <InstrumentResourcesInfo />
        </div>
        <LanguageSwitch />
      </div>
    </Provider>
  );
}

export default App;
