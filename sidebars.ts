import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import {sdkSidebars, activeSDKs} from './src/lib/dynamicSDK';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '🛠️️ Installation',
      items: [
        {
          type: 'doc',
          id: 'installation-getting-started/what-am-i-installing',
          label: 'Getting Started',
        },
        {
          type: 'doc',
          id: 'installation-getting-started/macos',
          label: 'macOS',
        },
        {
          type: 'doc',
          id: 'installation-getting-started/windows',
          label: 'Windows',
        },
        {
          type: 'doc',
          id: 'installation-getting-started/linux',
          label: 'Linux',
        },
      ]
    },
    {
      type: 'category',
      label: '🔌 Apps & Plugins',
      items: [
        {
          type: 'doc',
          id: 'extensions-plugins/chrome',
          label: 'Chrome Extension',
        },
        {
          type: 'doc',
          id: 'extensions-plugins/edge',
          label: 'Edge Addon',
        },
        {
          type: 'doc',
          id: 'extensions-plugins/firefox',
          label: 'Firefox Addon',
        },
        {
          type: 'doc',
          id: 'extensions-plugins/jetbrains',
          label: 'Jetbrains Plugin',
        },
        {
          type: 'doc',
          id: 'extensions-plugins/vscode',
          label: 'VS Code Extension',
        },
        {
          type: 'doc',
          id: 'extensions-plugins/azure-data-studio',
          label: 'Azure Data Studio',
        },
        {
          type: 'doc',
          id: 'extensions-plugins/obsidian',
          label: 'Obsidian Plugin',
        },
        {
          type: 'doc',
          id: 'extensions-plugins/jupyterlab',
          label: 'JupyterLab Extension',
        },
        {
          type: 'doc',
          id: 'extensions-plugins/teams',
          label: 'Microsoft Teams App',
        },
      ]
    },
    {
      type: 'category',
      label: '⚙️ Product Features',
      items: [
        {
          type: 'doc',
          id: 'features/auto-enrichment',
          label: 'Auto Enrichment',
        },
        {
          type: 'doc',
          id: 'features/back-up-and-restore',
          label: 'Back Up & Restore',
        },
        {
          type: 'doc',
          id: 'features/code-completion',
          label: 'Code Completion',
        },
        {
          type: 'doc',
          id: 'features/creation-and-generation',
          label: 'Creating & Generating Code',
        },
        {
          type: 'doc',
          id: 'features/global-search',
          label: 'Global Search',
        },
        {
          type: 'doc',
          id: 'features/keyboard-shortcuts',
          label: 'Keyboard Shortcuts',
        },
        {
          type: 'doc',
          id: 'features/managing-saved-materials',
          label: 'Material Storage & Management',
        },
        {
          type: 'doc',
          id: 'features/one-click-snippet-sharing',
          label: 'One Click Sharing',
        },
        {
          type: 'doc',
          id: 'features/pieces-copilot',
          label: 'Pieces Copilot',
        },
        {
          type: 'doc',
          id: 'features/search-modes',
          label: 'Search Modes',
        },
        {
          type: 'doc',
          id: 'features/transforming-snippets',
          label: 'Snippet Transformations',
        },
        {
          type: 'doc',
          id: 'features/user-settings',
          label: 'User Settings',
        },
        {
          type: 'doc',
          id: 'features/workflow-activity',
          label: 'Workflow Activity',
        },
      ]
    },
    {
      type: 'category',
      label: '✨ Highlights & Benefits',
      items: [
        {
          type: 'doc',
          id: 'product-highlights-and-benefits/connecting-to-a-remote-pieces-os-instance',
          label: 'Connecting to a Remote Pieces OS Instance',
        },
        {
          type: 'doc',
          id: 'product-highlights-and-benefits/in-project-snippet-discovery',
          label: 'In-Project Snippet Discovery',
        },
        {
          type: 'doc',
          id: 'product-highlights-and-benefits/privacy-security-data',
          label: 'Privacy & Security',
        },
        {
          type: 'doc',
          id: 'product-highlights-and-benefits/sync-across-multiple-devices-using-github',
          label: 'Sync Across Devices with GitHub',
        },
        {
          type: 'doc',
          id: 'product-highlights-and-benefits/saving-useful-developer-materials',
          label: 'Save Developer Materials',
        },
        {
          type: 'doc',
          id: 'product-highlights-and-benefits/saving-screenshots',
          label: 'Save Screenshots & Extract Code',
        },
      ]
    },
    {
      type: 'category',
      label: '📚 Use Cases',
      items: [
        {
          type: 'doc',
          id: 'use-cases/countless-google-searches',
          label: 'Reduce Endless Google Searching',
        },
        {
          type: 'doc',
          id: 'use-cases/onboard-new-developers',
          label: 'Onboard New Developers',
        },
        {
          type: 'doc',
          id: 'use-cases/resurfacing-additional-context',
          label: 'Resurface Additional Context',
        },
      ]
    },
    {
      type: 'category',
      label: '🌱 Resources',
      items: [
        {
          type: 'doc',
          id: 'community',
        },
        {
          type: 'doc',
          id: 'support',
        },
        {
          type: 'doc',
          id: 'faq',
          label: 'FAQ',
        },
      ]
    }
  ],

  sdksOverviewSidebar: [
    {
      type: 'doc',
      id: 'sdks/index',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'SDKs',
      items: activeSDKs.map(sdk => ({
        type: 'doc' as 'doc' | 'ref',
        id: `sdks/${sdk}/guides/getting-started`,
        label: `${sdk.charAt(0).toUpperCase() + sdk.slice(1)} SDK`,
      })),
    },
  ],

  // Generates sidebar for each active SDK
  ...sdkSidebars
};

export default sidebars;
