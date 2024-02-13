type ThemeVariant = 'light' | 'dark';

interface AuthTokenDetails {
  expirationTime: number;
  token: string;
}

interface Theme {
  background?: string;
  backgroundLight?: string;
  backgroundMid?: string;
  backgroundSuccess?: string;
  bannerErrorBackground?: string;
  bannerErrorText?: string;
  bannerPrimaryBackground?: string;
  bannerSecondaryBackground?: string;
  bannerSuccessBackground?: string;
  bannerSuccessText?: string;
  borderDark?: string;
  borderLight?: string;
  chatBackground?: string;
  companyBackgroundTextPrimary?: string;
  disabled?: string;
  error?: string;
  hover?: string;
  navBarBackground?: string;
  navBarForeground?: string;
  navigationFlyoutBackground?: string;
  navigationInPageBackground?: string;
  primaryHighlight?: string;
  primaryHover?: string;
  selected?: string;
  success?: string;
  textPrimary?: string;
  textSecondary?: string;
  visited?: string;
  warning?: string;
  warningDark?: string;
  warningLight?: string;
  warningText?: string;
}

type ThemeVariantOrAuto = ThemeVariant | 'auto';

export interface ModalSearchOptions {
  authToken?: AuthTokenDetails;
  backend?: string;
  datasource?: string;
  datasourcesFilter?: string[];
  disableAnalytics?: boolean;
  domainsToOpenInCurrentTab?: string[];
  enableActivityLogging?: boolean;
  hideAutocomplete?: boolean;
  key?: string;
  locale?: string;
  onAuthTokenRequired?: () => void;
  onChat?: (chatId?: string) => void;
  onDetach?: () => void;
  onSearch: (query: string) => void;
  query?: string;
  showNativeSearchToggle?: boolean;
  theme?: Partial<Record<ThemeVariant, Theme>>;
  themeVariant?: ThemeVariantOrAuto;
  urlsToOpenInCurrentTab?: string[];
  webAppUrl?: string;
}

interface SearchBoxCustomizations {
  border?: string;
  borderRadius?: number;
  boxShadow?: string;
  fontSize?: number;
  horizontalMargin?: number;
  placeholderText?: string;
  searchIconUrl?: string;
  verticalMargin?: number;
}

interface SearchBoxOptions {
  authToken?: AuthTokenDetails;
  autofocus?: boolean;
  backend?: string;
  datasource?: string;
  datasourcesFilter?: string[];
  disableAnalytics?: boolean;
  domainsToOpenInCurrentTab?: string[];
  enableActivityLogging?: boolean;
  hideAutocomplete?: boolean;
  key?: string;
  locale?: string;
  onAuthTokenRequired?: () => void;
  onChat?: (chatId?: string) => void;
  onSearch: (query: string) => void;
  query?: string;
  searchBoxCustomizations?: SearchBoxCustomizations;
  theme?: Partial<Record<ThemeVariant, Theme>>;
  themeVariant?: ThemeVariantOrAuto;
  urlsToOpenInCurrentTab?: string[];
  webAppUrl?: string;
}

interface SearchOptions {
  authToken?: AuthTokenDetails;
  backend?: string;
  datasource?: string;
  datasourcesFilter?: string[];
  disableAnalytics?: boolean;
  domainsToOpenInCurrentTab?: string[];
  enableActivityLogging?: boolean;
  hideAutocomplete?: boolean;
  key?: string;
  locale?: string;
  onAuthTokenRequired?: () => void;
  onChat?: (chatId?: string) => void;
  onSearch: (query: string) => void;
  query?: string;
  theme?: Partial<Record<ThemeVariant, Theme>>;
  themeVariant?: ThemeVariantOrAuto;
  urlsToOpenInCurrentTab?: string[];
  webAppUrl?: string;
}

interface GuestAuthProviderOptions {
  backend: string;
}

export interface EmbeddedSearchHandle {
  focus: () => void;
}

interface AuthTokenDetails {
  expirationTime: number;
  token: string;
}

export interface GuestAuthProvider {
  getAuthToken: () => Promise<AuthTokenDetails>;
  createAuthToken: () => Promise<AuthTokenDetails>;
}

interface BoxCustomizations {
  border?: string;
  borderRadius?: number;
  boxShadow?: string;
  horizontalMargin?: number;
  verticalMargin?: number;
}

interface ChatCustomizations {
  container?: BoxCustomizations;
}

interface ChatOptions {
  applicationId?: string;
  authToken?: AuthTokenDetails;
  backend?: string;
  chatId?: string;
  customizations?: ChatCustomizations;
  disableAnalytics?: boolean;
  domainsToOpenInCurrentTab?: string[];
  enableActivityLogging?: boolean;
  initialMessage?: string;
  key?: string;
  locale?: string;
  onAuthTokenRequired?: () => void;
  onChat?: (chatId?: string) => void;
  onSearch?: (query: string) => void;
  theme?: Partial<Record<ThemeVariant, Theme>>;
  themeVariant?: ThemeVariantOrAuto;
  urlsToOpenInCurrentTab?: string[];
  webAppUrl?: string;
}

interface RecommendationsBoxCustomizations {
  border?: string;
  borderRadius?: number;
  boxShadow?: string;
  horizontalMargin?: number;
  searchBox?: Pick<
    SearchBoxCustomizations,
    'fontSize' | 'placeholderText' | 'searchIconUrl'
  >;
  showNoRecommendationsHint?: boolean;
  verticalMargin?: number;
}

type DocumentContext = Document | ShadowRoot;

interface RecommendationsOptions {
  authToken?: AuthTokenDetails;
  backend?: string;
  customizations?: RecommendationsBoxCustomizations;
  datasource?: string;
  datasourcesFilter?: string[];
  disableAnalytics?: boolean;
  domainsToOpenInCurrentTab?: string[];
  enableActivityLogging?: boolean;
  height?: number;
  hideAutocomplete?: boolean;
  hideDatasourceFilter?: boolean;
  key?: string;
  locale?: string;
  onAuthTokenRequired?: () => void;
  onDatasourceChange?: (datasource?: string) => void;
  onSearch: (query: string) => void;
  sourceDocument?: DocumentContext;
  theme?: Partial<Record<ThemeVariant, Theme>>;
  themeVariant?: ThemeVariantOrAuto;
  urlsToOpenInCurrentTab?: string[];
  webAppUrl?: string;
}

interface FilterConfig {
  iconName: string;
  key: string;
  placeholder: string;
}

interface TabbedSearchOptions {
  authToken?: AuthTokenDetails;
  backend?: string;
  datasource?: string;
  datasourcesFilter?: string[];
  defaultResultTabs?: string[];
  disableAnalytics?: boolean;
  domainsToOpenInCurrentTab?: string[];
  enableActivityLogging?: boolean;
  hideAutocomplete?: boolean;
  hideDatasourceFilter?: boolean;
  hideFiltersColumn?: boolean;
  hideTopBarFilters?: boolean;
  key?: string;
  locale?: string;
  onAuthTokenRequired?: () => void;
  onChat?: (chatId?: string) => void;
  onDatasourceChange?: (datasource?: string) => void;
  onSearch: (query: string) => void;
  query?: string;
  showAutocompleteContent?: boolean;
  showHomePageContent?: boolean;
  showInlineSearchBox?: boolean;
  theme?: Partial<Record<ThemeVariant, Theme>>;
  themeVariant?: ThemeVariantOrAuto;
  topBarFilterOverrides?: FilterConfig[];
  urlsToOpenInCurrentTab?: string[];
  webAppUrl?: string;
}

export interface EmbeddedSearch {
  attach: (element: HTMLElement, options?: ModalSearchOptions) => EmbeddedSearchHandle;
  attachAutocomplete(
    element: HTMLElement,
    options: SearchBoxOptions,
  ): EmbeddedSearchHandle;
  createGuestAuthProvider(options: GuestAuthProviderOptions): GuestAuthProvider;
  openSidebar(options: SearchOptions): Promise<void>;
  renderChat(element: HTMLElement, options: ChatOptions): void;
  renderRecommendations(element: HTMLElement, options: RecommendationsOptions): void;
  renderSearchBox(element: HTMLElement, options: SearchBoxOptions): EmbeddedSearchHandle;
  renderSearchResults(element: HTMLElement, options: TabbedSearchOptions): void;
}

declare global {
  interface Window {
    EmbeddedSearch: EmbeddedSearch | undefined;
  }
}
