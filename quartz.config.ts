import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "AWS Study Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "mc-marcocheng.github.io/aws-sap-c02-notes",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Nunito",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        // Alucard (Dracula Light)
        lightMode: {
          light: "#f8f8f2",
          lightgray: "#e6e6e6",
          gray: "#6272a4",
          darkgray: "#282a36",
          dark: "#282a36",
          secondary: "#7c3aed",
          tertiary: "#d63384",
          highlight: "rgba(189, 147, 249, 0.12)",
          textHighlight: "rgba(241, 250, 140, 0.45)",
        },
        // Dracula
        darkMode: {
          light: "#282a36",
          lightgray: "#44475a",
          gray: "#6272a4",
          darkgray: "#f8f8f2",
          dark: "#f8f8f2",
          secondary: "#bd93f9",
          tertiary: "#ff79c6",
          highlight: "rgba(189, 147, 249, 0.15)",
          textHighlight: "rgba(241, 250, 140, 0.25)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      // Plugin.CreatedModifiedDate() — removed to hide dates
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "dracula",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Plugin.CustomOgImages(), // uncomment if you want OG images (slows build)
    ],
  },
}

export default config
