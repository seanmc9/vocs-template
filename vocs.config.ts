import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
  iconUrl: '/favicon.ico',
  sidebar: [
    {
      text: 'Home Page',
      link: '/',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
})
