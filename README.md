# glean-embedded-search

This package provides a React tools for loading and providing the Glean JS SDK for embedded search. It includes a context provider for embedded search and a set of hooks to interact with this context.

## Installation

You can install this package using npm or yarn:

```sh
npm install glean-embedded-search

# or

yarn add glean-embedded-search
```

## Usage

First, wrap your application with the EmbeddedSearchProvider, passing in the :

```jsx
import { EmbeddedSearchProvider } from './EmbeddedSearchProvider';

const App: React.FC = () => {
  const options: ModalSearchOptions = {
    // Define your options here. For a full list of options, see the API section below.
  };

  return (
    <EmbeddedSearchProvider domain="YOUR_GLEAN_DOMAIN" elementId="search-box" options={options}>
      {/* your app goes here */}
    </EmbeddedSearchProvider>
  );
};

export default App;
```

Then, in your components, you can use the useEmbeddedSearch hook to access the embeddedSearchHandle and other properties of the embedded search context. For example, to focus the search input, you can use the embeddedSearchHandle.focus() method. Here's an example of how to use the useEmbeddedSearch hook in a component:

```jsx
import { useEmbeddedSearch } from './EmbeddedSearchProvider';

export default const SearchComponent: React.FC = () => {
  const { loaded, embeddedSearchHandle } = useEmbeddedSearch();

  if (!loaded) {
    return <div>Loading...</div>;
  }

  // Use embeddedSearchHandle here, for example, embeddedSearchHandle.focus()

  return (
    <div>
      {/* Your component logic */}
    </div>
  );
};
```

## API

### `EmbeddedSearchProvider`

# `EmbeddedSearchProvider` Props

`EmbeddedSearchProvider` is a React component that initializes the EmbeddedSearch API. Below is the documentation for its props:

| Prop        | Type                 | Description                                                    | Required |
| ----------- | -------------------- | -------------------------------------------------------------- | :------: |
| `children`  | `React.ReactNode`    | The child components that `EmbeddedSearchProvider` will wrap.  |   Yes    |
| `domain`    | `string`             | The domain from which the EmbeddedSearch script is loaded.     |   Yes    |
| `elementId` | `string`             | The ID of the DOM element to which EmbeddedSearch is attached. |   Yes    |
| `options`   | `ModalSearchOptions` | Optional configuration options for EmbeddedSearch.             |    No    |

## `ModalSearchOptions` Type

The `options` prop accepts an object of type `ModalSearchOptions`, which is structured as follows:

| Property                    | Type                                   | Description                                  | Required |
| --------------------------- | -------------------------------------- | -------------------------------------------- | :------: |
| `authToken`                 | `AuthTokenDetails`                     | Authentication token details.                |    No    |
| `backend`                   | `string`                               | Backend configuration.                       |    No    |
| `datasource`                | `string`                               | Datasource configuration.                    |    No    |
| `datasourcesFilter`         | `string[]`                             | Filters for datasources.                     |    No    |
| `disableAnalytics`          | `boolean`                              | Flag to disable analytics.                   |    No    |
| `domainsToOpenInCurrentTab` | `string[]`                             | Domains to open in the current tab.          |    No    |
| `enableActivityLogging`     | `boolean`                              | Flag to enable activity logging.             |    No    |
| `hideAutocomplete`          | `boolean`                              | Flag to hide autocomplete.                   |    No    |
| `key`                       | `string`                               | Key for configuration.                       |    No    |
| `locale`                    | `string`                               | Locale configuration.                        |    No    |
| `onAuthTokenRequired`       | `() => void`                           | Callback for when an auth token is required. |    No    |
| `onChat`                    | `(chatId?) => void`                    | Callback for chat interactions.              |    No    |
| `onDetach`                  | `() => void`                           | Callback for when the search is detached.    |    No    |
| `onSearch`                  | `(query) => void`                      | Callback for search interactions.            |   Yes    |
| `query`                     | `string`                               | Initial query for the search.                |    No    |
| `showNativeSearchToggle`    | `boolean`                              | Flag to show native search toggle.           |    No    |
| `theme`                     | `Partial<Record<ThemeVariant, Theme>>` | Theme configuration.                         |    No    |
| `themeVariant`              | `ThemeVariantOrAuto`                   | The theme variant to use.                    |    No    |
| `urlsToOpenInCurrentTab`    | `string[]`                             | URLs to open in the current tab.             |    No    |
| `webAppUrl`                 | `string`                               | Web app URL.                                 |    No    |

### `AuthTokenDetails` Type

`AuthTokenDetails` is used within `ModalSearchOptions` and is defined as:

| Property         | Type     | Description                                      | Required |
| ---------------- | -------- | ------------------------------------------------ | :------: |
| `expirationTime` | `number` | The expiration time of the authentication token. |   Yes    |
| `token`          | `string` | The authentication token.                        |   Yes    |

### `ThemeVariant` Type

`ThemeVariant` is a union type for theme variants and includes the following values:

- `light`
- `dark`