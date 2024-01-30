import { render, waitFor } from '@testing-library/react';
import * as React from 'react';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { EmbeddedSearchProvider } from '../src/EmbeddedSearchProvider';
import { EmbeddedSearch } from '../src/types';

describe('EmbeddedSearchProvider Integration Tests', () => {
  let originalEmbeddedSearch: EmbeddedSearch | undefined;

  beforeAll(() => {
    originalEmbeddedSearch = window.EmbeddedSearch;
  });

  afterAll(() => {
    window.EmbeddedSearch = originalEmbeddedSearch;
  });

  it('loads the script and initializes EmbeddedSearch object correctly', async () => {
    const domain = 'app.glean.com';

    window.EmbeddedSearch = undefined;

    render(
      <EmbeddedSearchProvider domain={domain} elementId="test-element">
        <div id="test-element">Integration Test Child</div>
      </EmbeddedSearchProvider>,
    );

    await waitFor(
      () =>
        expect(
          document.querySelector(
            `script[src="https://${domain}/embedded-search-latest.min.js"]`,
          ),
        ).toBeDefined(),
      { timeout: 10000 },
    );

    await waitFor(() => expect(window.EmbeddedSearch).toBeDefined(), { timeout: 15000 });
  }, 20000);
});
