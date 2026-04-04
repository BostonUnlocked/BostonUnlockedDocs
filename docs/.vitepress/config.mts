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
      { text: 'Features and Limitations', link: '/features_limitations' },
      { text: 'Complete Documentation', link: '/introduction' },
      { text: 'Game Reference', link: '/gameref' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Features and Limitations', link: '/features_limitations' },
          { text: 'How You can Help', link: '/how_you_can_help' },
          { text: 'Report Bugs', link: '/reportbugs' },
          { text: 'Project History', link: '/project_history' }
        ]
      },
      {
        text: 'Installation',
        items: [
          { text: 'Quick Start', link: '/quick_start' },
          
          { text: 'Connect to Another Server', link: '/connectmp' },
          { text: 'Enabling DLC', link: '/enabling_dlc'},
          {
            text: 'Advanced Installation',
            link: '/installadv',
            items: [
              { text: 'Play Single Player Offline', link: '/installsp' },
              { text: 'Host Multiplayer Online', link: '/installmp' },
              { text: 'Update Self-hosted Server', link: '/updateserver'}
            ]
          }
        ]
      },
      {
        text: 'Game Reference',
        link: '/gameref/',
        collapsed: true,
        items: [
          { text: 'Mission Unlock Order', link: '/gameref/mission_unlock_order' },
          { text: 'Armor Reference', link: '/gameref/items_armor_reference' },
          { text: 'Cyberware Reference', link: '/gameref/items_cyberware_reference' },
          { text: 'Tactical Items Reference', link: '/gameref/items_tactical_reference' },
          { text: 'Weapons Reference', link: '/gameref/items_weapons_reference' },
          { text: 'Interesting Game Behaviour', link: '/gameref/interesting_finds' },
        ]
      },
      {
        text: 'Server Operations',
        items: [
          { text: 'Managing Server Data', link: '/server_data' },
          { text: 'Global Chat Commands', link: '/commands_player' },
          { text: 'Admin Operations', 
            items: [
              { text: 'Enabling Admin Access', link: '/enable_admin' },
              { text: 'Admin Global Chat Commands', link: '/commands_admin' }
            ]
          },
        ]
      },
      {
        text: 'Announcements',
        collapsed: true,
        items: [
          { text: '2026', 
            link: '/posts/2026/',
            collapsed: true,
            items: [
              { text: '2026-02-22', link: '/posts/2026/2026-02-22' },
              { text: '2026-02-26', link: '/posts/2026/2026-02-26' },
              { text: '2026-02-27', link: '/posts/2026/2026-02-27' },
              { text: '2026-02-28', link: '/posts/2026/2026-02-28' },
              { text: '2026-03-17', link: '/posts/2026/2026-03-17' },
              { text: '2026-03-22', link: '/posts/2026/2026-03-22' },
              { text: '2026-04-01', link: '/posts/2026/2026-04-01' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/cyuPZrC8Wr' },
      { icon: 'github', link: 'https://github.com/BostonUnlocked/BostonUnlockedServer' },
      { icon: 'steam', link: 'https://steamcommunity.com/app/267750/discussions/0/796713273232940271/'}
    ]
  }
})
