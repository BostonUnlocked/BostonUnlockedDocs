import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Boston Unlocked ",
  description: "A community-made *Shadowrun Chronicles Boston Lockdown* Server Reimplementation",
  base: '/BostonUnlockedDocs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      //{ text: 'FAQ', link: '/faq' },
      { text: 'Complete Documentation', link: '/introduction' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Features and Limitations', link: '/features_limitations' },
          { text: 'How You can Help', link: 'how_you_can_help' },
          { text: 'Report Bugs', link: '/reportbugs' }
        ]
      },
      {
        text: 'Installation',
        items: [
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'Play Single Player Offline', link: '/installsp' },
          { text: 'Host Multiplayer Online', link: '/installmp' },
          { text: 'Connect to Another Server', link: '/connectmp' },
          { text: 'Enabling DLC', link: '/enabling-dlc'}
        ]
      },
      {
        text: 'Advanced server operations',
        items: [
          { text: 'Managing Server Data', link: '/server-data' },
          { text: 'Server Commands', link: '/server-commands' },
          { text: 'Admin Commands', link: '/admin-commands' },
        ]
      },
      {
        text: 'Announcements',
        collapsed: true,
        items: [
          { text: '2026', 
            collapsed: true,
            items: [
              { text: '2026-02-22', link: '/posts/2026/2026-02-22' },
              { text: '2026-02-26', link: '/posts/2026/2026-02-26' },
              { text: '2026-02-27', link: '/posts/2026/2026-02-27' },
              { text: '2026-02-28', link: '/posts/2026/2026-02-28' },
              { text: '2026-03-17', link: '/posts/2026/2026-03-17' },
              { text: '2026-03-22', link: '/posts/2026/2026-03-22' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/cyuPZrC8Wr' },
      { icon: 'github', link: 'https://github.com/BostonUnlocked/BostonUnlockedServer' }
    ]
  }
})
