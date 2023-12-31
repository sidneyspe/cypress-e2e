import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://uitestingplayground.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 16000,
    // pageLoadTimeout: 0,
  },
})
