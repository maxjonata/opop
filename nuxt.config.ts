export default defineNuxtConfig({
	srcDir: 'src/',
	devtools: {enabled: true},
	modules: [
		'@nuxtjs/eslint-module',
    '@pinia/nuxt',
	],
  pinia: {
    storesDirs: [
      '~/src/stores/**'
    ]
  }
});
