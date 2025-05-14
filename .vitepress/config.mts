import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EzBlog",
  description: "My Blog about tech and viking shamanism",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tech', link: '/tech/'},
      { text: 'Viking Shamanism', link: '/shamanism/'},
    ],

    sidebar: [
      {
        text: 'Tech',
        items: [
            { text: 'Overview', link: '/tech/index' },
            {text: 'VitePress', items: [
                { text: 'Vue-Components in Markdown', link: '/tech/guide/vue_in_markdown' }
              ] },
        ]
      },
        { text: 'Viking Shamanism', items: [
            { text: 'Overview', link: '/shamanism/index' },
          ] },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MDietermann' },
      { icon: 'instagram', link: 'https://www.instagram.com/ezm_baby/' },
    ]
  }
})
