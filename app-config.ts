export interface AppConfig {
  pageTitle: string;
  pageDescription: string;
  companyName: string;

  supportsChatInput: boolean;
  supportsVideoInput: boolean;
  supportsScreenShare: boolean;
  isPreConnectBufferEnabled: boolean;

  logo: string;
  startButtonText: string;
  accent?: string;
  logoDark?: string;
  accentDark?: string;

  // for LiveKit Cloud Sandbox
  sandboxId?: string;
  agentName?: string;
}

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'AI Africa',
  pageTitle: 'AI Africa Farm Consultant',
  pageDescription: 'A voice agent for farmers to get practical advice and support',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '/lk-logo.svg',
  accent: '#2E7D32',
  logoDark: '/lk-logo-dark.svg',
  accentDark: '#1B5E20',
  startButtonText: 'Talk to your farm consultant',

  // for LiveKit Cloud Sandbox
  sandboxId: undefined,
  agentName: undefined,
};
