import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts[x]'],
    setupFiles: ['tests/setupTests.ts'],
    environment: 'jsdom',
    typecheck: { enabled: true },
  },
});
