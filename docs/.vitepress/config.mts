import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fjolublar",
  description: "My Personal Website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Cloud', link: '/markdown-examples' },
      { text: 'Web', link: '/markdown-examples' },
      { text: 'Books', link: '/markdown-examples' },
      { text: 'Games', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Cloud', link: '/markdown-examples' },
          { text: 'Web', link: '/markdown-examples' },
          { text: 'Books', link: '/markdown-examples' },
          { text: 'Games', link: '/markdown-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fjolublar' }
    ],

    logo: {
      // relative to `public` folder
      src: '/logo_32px.png',
      width: 24,
      height: 24
    },
  }
})
