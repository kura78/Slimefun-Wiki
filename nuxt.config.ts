export default defineNuxtConfig({
  app: {
    head: {
      title: 'Slimefun Handbook',
      meta: [
        { name: "Slimefun Handbook", content: "" }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      bodyAttrs: {
        'data-theme': 'light'
      }
    },
  },
  pages: true,
})