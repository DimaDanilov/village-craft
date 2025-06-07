import type { englishNamespaces, russianNamespaces } from '../i18next.config';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'Main';
    resources: typeof englishNamespaces & typeof russianNamespaces;
  }
}
