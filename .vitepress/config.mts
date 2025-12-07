import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fjolublar",
  description: "My Personal Website",
  head: [['link', { rel: 'icon', href: '/img/logo_32px.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Projects',
        items: [
          { text: 'MQRA', link: '/docs/projects/mqra' },
          { text: 'Raspberry Pi', link: '/docs/projects/Raspberry Pi/raspberry_pi' },
          { text: 'Video Processing', link: '/docs/projects/Raspberry Pi/video_processing' },
        ]
      },
      {
        text: 'Favourites',
        items: [
          { text: 'Books', link: '/docs/books/favourites' },
          { text: 'Video Games', link: '/docs/games/favourites' },
        ]
      },
      {
        text: 'Blog',
        items: [
          { text: 'Learning k8s visually', link: '/blog/learning_k8s_visually' },
          { text: 'Learning k9s visually', link: '/blog/learning_k8s_visually' },
        ]
      },
    ],
    footer: {
      message: 'Created using VitePress',
      copyright: 'Copyright © 2025-present'
    },
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
          { text: 'Reviews', link: '/docs/books/reviews' },
          { text: 'Favourites', link: '/docs/books/favourites' },
        ]
      },
      {
        text: 'Video Games',
        items: [
          { text: 'Reviews', link: '/docs/games/reviews' },
          { text: 'Favourites', link: '/docs/games/favourites' },
        ]
      },
      {
        text: 'Web',
        collapsed: false,
        items: [
          { text: 'Linux', link: '/docs/web/linux' },
        ]
      },
      {
        text: 'Projects',
        collapsed: false,
        items: [
          { text: 'MQRA', link: '/docs/projects/mqra' },
          { text: 'Raspberry Pi', link: '/docs/projects/Raspberry Pi/raspberry_pi' },
          { text: 'Video Processing', link: '/docs/projects/Raspberry Pi/video_processing' },
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
      { icon: 'github', link: 'https://github.com/fjolublar' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/indrit-fejza/' }
    ],

    logo: {
      // relative to `public` folder
      src: '/img/logo_32px.png',
      width: 24,
      height: 24
    },
  }
})
