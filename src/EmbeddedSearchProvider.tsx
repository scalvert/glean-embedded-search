import {
  createContext,
  FC,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useScript } from './hooks/useScript';
import { EmbeddedSearchHandle, ModalSearchOptions } from './types';

interface EmbeddedSearchContextProps {
  loaded: boolean;
  embeddedSearchHandle: EmbeddedSearchHandle | null;
}

const EmbeddedSearchContext = createContext<EmbeddedSearchContextProps | null>(null);

interface EmbeddedSearchProviderProps {
  id?: string;
  children: ReactNode;
  domain: string;
  elementId: string;
  options?: ModalSearchOptions;
  fallbackComponent?: ReactElement;
}

function getDomain(domain: string) {
  const GLEAN_DOMAIN = 'glean.com';

  if (!domain.includes(GLEAN_DOMAIN)) {
    return `${domain}.${GLEAN_DOMAIN}`;
  }

  return domain;
}

export const EmbeddedSearchProvider: FC<EmbeddedSearchProviderProps> = ({
  id = 'glean-sdk',
  children,
  domain,
  elementId,
  options,
  fallbackComponent = <div>Error loading EmbeddedSearch</div>,
}) => {
  const [embeddedSearchHandle, setEmbeddedSearchHandle] =
    useState<EmbeddedSearchHandle | null>(null);
  const { loaded, error } = useScript({
    id,
    src: `https://${getDomain(domain)}/embedded-search-latest.min.js`,
  });

  useEffect(() => {
    if (loaded && window.EmbeddedSearch) {
      const element = document.getElementById(elementId);

      if (!element) {
        throw new Error(`Element with id ${elementId} not found`);
      }

      const handle = window.EmbeddedSearch.attach(element, options);

      setEmbeddedSearchHandle(handle);
    }
  }, [loaded, elementId, options]);

  if (error) {
    return fallbackComponent;
  }

  return (
    <EmbeddedSearchContext.Provider value={{ loaded, embeddedSearchHandle }}>
      {children}
    </EmbeddedSearchContext.Provider>
  );
};

export const useEmbeddedSearch = () => useContext(EmbeddedSearchContext);
