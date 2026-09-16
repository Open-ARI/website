// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 ncdents, LLC.
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OpenARI',
  description: 'Independent open-source tools for Apple Reference Image',
  base: process.env.OPENARI_BASE || '/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Status', link: '/status' },
      { text: 'GitHub', link: 'https://github.com/open-ari/open-ari-core' },
      { text: 'Sponsor', link: 'https://github.com/sponsors/shoon' }
    ],
    sidebar: [
      { text: 'Project', items: [
        { text: 'Overview', link: '/' },
        { text: 'Compatibility and status', link: '/status' },
        { text: 'How it works', link: '/how-it-works' },
        { text: 'Roadmap', link: '/roadmap' }
      ]},
      { text: 'Using OpenARI', items: [
        { text: 'arictl CLI', link: '/cli' },
        { text: 'Language SDKs', link: '/sdks' },
        { text: 'Image uploads', link: '/uploads' },
        { text: 'Cryptography and security', link: '/security' },
        { text: 'Version support', link: '/versions' }
      ]}
    ],
    footer: { message: 'Independent project. Not affiliated with or endorsed by Apple.', copyright: 'Copyright 2026 ncdents, LLC. Apache-2.0.' }
  }
})
