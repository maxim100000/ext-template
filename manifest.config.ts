import { defineManifest } from '@crxjs/vite-plugin'
import pkg from './package.json'


export default defineManifest({
  manifest_version: 3,
  name: pkg.name,
  version: pkg.version,
  icons: {
    16: 'icon-16.png',
    32: 'icon-32.png',
    48: 'icon-48.png',
    128: 'icon-128.png',
  },
  options_ui:{
    open_in_tab: true,
    page: 'src/options/index.html'
  },
  action: {
    default_icon: {
      48: 'icon-48.png',
    },
    default_popup: 'src/popup/index.html',
  },
  content_scripts: [{
    js: ['src/content/main.ts'],
    matches: ['https://*/*'],
  }],
  permissions: [
      
      "tabGroups",
      'tabs',
    'sidePanel',
    'contentSettings',
  ],
  host_permissions: ['<all-urls>'],
  side_panel: {
    default_path: 'src/sidepanel/index.html',
  },
})
