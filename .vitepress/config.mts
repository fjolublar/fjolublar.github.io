import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fjolublar",
  description: "My Personal Website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/docs/projects/' },
      { text: 'Blog', link: '/blog/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Who Am I?', link: '/docs/introduction/who_am_i' },
        ]
      },
      {
        text: 'Books',
        items: [
          { text: 'Book Reviews', link: '/docs/books/books' },
        ]
      },
      {
        text: 'VideoGames',
        items: [
          { text: 'Video Game Review', link: '/docs/games/games' },
        ]
      },
      {
        text: 'Web',
        items: [
          { text: 'Who Am I?', link: '/docs/introduction/who_am_i' },
        ]
      },
      {
        text: 'Projects',
        items: [
          { text: 'MQRA', link: '/docs/projects/mqra' },
          { text: 'Raspberry Pi', link: '/docs/projects/Raspberry Pi/raspberry_pi' },
          { text: 'VideoProcessing', link: '/docs/projects/Raspberry Pi/camera' },
        ]
      },
      {
        text: 'Blog',
        items: [
          { text: 'Learning k8s visually', link: '/blog/learning_k8s_visually' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fjolublar' }
    ],

    logo: {
      // relative to `public` folder
      src: '/img/logo_32px.png',
      width: 24,
      height: 24
    },
  }
})
