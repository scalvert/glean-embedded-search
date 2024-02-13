import { useScript } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';

import { EmbeddedSearch } from './types';

const GLEAN_JS_API_URL = 'https://app.glean.com/embedded-search-latest.min.js';

export interface UseEmbeddedSearchResult {
  embeddedSearch: EmbeddedSearch | null;
  status: 'unknown' | 'loading' | 'ready' | 'error';
}

export function useEmbeddedSearch(): UseEmbeddedSearchResult {
  const [embeddedSearch, setEmbeddedSearch] = useState<EmbeddedSearch | null>(null);
  const status = useScript(GLEAN_JS_API_URL, {
    removeOnUnmount: false,
  });

  useEffect(() => {
    if (status === 'ready' && typeof window.EmbeddedSearch !== 'undefined') {
      setEmbeddedSearch(window.EmbeddedSearch);
    }
  }, [status]);

  return { status, embeddedSearch };
}
