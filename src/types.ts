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

export interface EmbeddedSearchHandle {
  focus: () => void;
}

export interface EmbeddedSearch {
  attach: (element: HTMLElement, options?: ModalSearchOptions) => EmbeddedSearchHandle;
}

declare global {
  interface Window {
    EmbeddedSearch: EmbeddedSearch | undefined;
  }
}
