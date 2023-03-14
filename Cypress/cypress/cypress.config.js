const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://uitestestingplayground.com/sampleapp',
  },
})

