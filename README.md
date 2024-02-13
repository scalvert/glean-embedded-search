# glean-embedded-search

A React hook for loading the Glean JS SDK for embedded search.

## Installation

You can install this package using npm or yarn:

```sh
npm install glean-embedded-search

# or

yarn add glean-embedded-search
```

## Usage

### `useEmbeddedSearch` hook

The useEmbeddedSearch hook provides access to the embedded search context. It returns an object with the following properties:

- `status`: The status of the embedded search module. It can be one of the following values: 'loading', 'error', or 'ready'.
- `embeddedSearch`: The embedded search handle, which provides access to the Glean JS SDK API.

```jsx
import React, { useEffect } from 'react';
import { useEmbeddedSearch } from 'glean-embedded-search';

const MyCustomSearchComponent = () => {
  const { embeddedSearch, status } = useEmbeddedSearch();

  useEffect(() => {
    if (status === 'ready' && embeddedSearch) {
      // User provides their own initialization logic here
      const element = document.getElementById('my-search-element');
      if (element) {
        // Example of how a user might initialize EmbeddedSearch
        embeddedSearch.attach(element, {/* options here */});
      }
    }
  }, [status, embeddedSearch]);

  if (status === 'loading') return <div>Loading search...</div>;
  if (status === 'error') return <div>Error loading the search functionality.</div>;
  return <div id="my-search-element">Search will be initialized here.</div>;
};

export default MyCustomSearchComponent;

```

## API

Documentation for the API can be found in the [Glean JS SDK documentation](https://app.glean.com/meta/browser_api/index.html).