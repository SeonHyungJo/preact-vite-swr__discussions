import preactRefresh from '@prefresh/vite'
import { VitePWA } from 'vite-plugin-pwa'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  jsx: {
    factory: 'h',
    fragment: 'Fragment'
  },
  plugins: [
    VitePWA({
      manifest: {
        "name": "first-project",
        "short_name": "first-project",
        "start_url": "/",
        "display": "standalone",
        "orientation": "portrait",
        "background_color": "#fff",
        "theme_color": "#673ab8",
        "icons": [
          {
            "src": "/assets/icons/android-chrome-192x192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "/assets/icons/android-chrome-512x512.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ]
      }
    }),
    preactRefresh()
  ]
}

export default config
