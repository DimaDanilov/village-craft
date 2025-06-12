import type { englishNamespaces, russianNamespaces } from '../i18next.namespaces';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof englishNamespaces & typeof russianNamespaces;
  }
}
