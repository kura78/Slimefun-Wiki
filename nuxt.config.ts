export default defineNuxtConfig({
  app: {
    head: {
      title: 'Slimefun Handbook',
      meta: [
        { name: "Slimefun Handbook", content: "" }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  runtimeConfig: {
    public: {
      gitCommit: process.env.NUXT_PUBLIC_GIT_COMMIT,
      gitBranch: process.env.NUXT_PUBLIC_GIT_BRANCH,
      gitURL: process.env.NUXT_PUBLIC_GIT_URL,
    }
  },
  pages: true,
})