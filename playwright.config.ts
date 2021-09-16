import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    headless: false,
    viewport: { width: 1000, height: 500 },
    ignoreHTTPSErrors: true,
    video: 'on',
  },
};
export default config;