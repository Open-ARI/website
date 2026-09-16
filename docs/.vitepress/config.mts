// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 ncdents, LLC.
import { defineConfig } from 'vitepress'

const base = process.env.OPENARI_BASE || '/'

export default defineConfig({
  title: 'OpenARI',
  description: 'Independent open-source tools for Apple Reference Image',
  base,
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${base}brand/favicon-32.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `${base}brand/apple-touch-icon.png` }],
    ['meta', { property: 'og:image', content: 'https://openari.org/brand/openari-avatar.png' }],
    ['meta', { property: 'og:image:alt', content: 'OpenARI mosaic logo with a photo, filmstrip, and checkmark' }],
    ['meta', { property: 'og:image:width', content: '512' }],
    ['meta', { property: 'og:image:height', content: '512' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:image', content: 'https://openari.org/brand/openari-avatar.png' }]
  ],
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: { src: '/brand/openari-logo-nav.png', alt: '' },
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
        { text: 'Roadmap', link: '/roadmap' },
        { text: 'Logo and artwork', link: '/brand' }
      ]},
      { text: 'Using OpenARI', items: [
        { text: 'openari CLI', link: '/cli' },
        { text: 'Language SDKs', link: '/sdks' },
        { text: 'Capture SDK research', link: '/capture' },
        { text: 'Image uploads', link: '/uploads' },
        { text: 'Cryptography and security', link: '/security' },
        { text: 'Version support', link: '/versions' }
      ]}
    ],
    footer: { message: 'Independent project. Not affiliated with or endorsed by Apple.', copyright: 'Copyright 2026 ncdents, LLC. Apache-2.0.' }
  }
})
