import { useScript } from '@uidotdev/usehooks';
import {
  createContext,
  FC,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { EmbeddedSearchHandle, ModalSearchOptions } from './types';

interface EmbeddedSearchContextProps {
  status: 'unknown' | 'loading' | 'ready' | 'error';
  embeddedSearchHandle: EmbeddedSearchHandle | null;
}

const EmbeddedSearchContext = createContext<EmbeddedSearchContextProps | null>(null);

interface EmbeddedSearchProviderProps {
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
  children,
  domain,
  elementId,
  options,
  fallbackComponent = <div>Error loading EmbeddedSearch</div>,
}) => {
  const [embeddedSearchHandle, setEmbeddedSearchHandle] =
    useState<EmbeddedSearchHandle | null>(null);
  const status = useScript(`https://${getDomain(domain)}/embedded-search-latest.min.js`, {
    removeOnUnmount: false,
  });

  useEffect(() => {
    if (status === 'ready' && typeof window.EmbeddedSearch !== 'undefined') {
      const element = document.getElementById(elementId);

      if (!element) {
        throw new Error(`Element with id ${elementId} not found`);
      }

      const handle = window.EmbeddedSearch.attach(element, options);

      setEmbeddedSearchHandle(handle);
    }
  }, [status, elementId, options]);

  if (status === 'error') {
    return fallbackComponent;
  }

  return (
    <EmbeddedSearchContext.Provider value={{ status, embeddedSearchHandle }}>
      {children}
    </EmbeddedSearchContext.Provider>
  );
};

export const useEmbeddedSearch = () => useContext(EmbeddedSearchContext);
