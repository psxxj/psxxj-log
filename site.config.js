const CONFIG = {
  // profile setting (required)
  profile: {
    name: "psxxj",
    image: "/psxxj-avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "full-stack developer",
    bio: "WE NEVER WALK ALONE",
    email: "shackleton@gm.gist.ac.kr",
    linkedin: "psxxj",
    github: "psxxj",
    instagram: "psxxj",
  },
  projects: [
    {
      name: `FINDA`,
      href: "https://finda.co.kr",
    },
    {
      name: `KidzTales`,
      href: "https://tale.fit",
    },
  ],
  // blog setting (required)
  blog: {
    title: "psxxj-world",
    description: "welcome to psxxj-world!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://psxxj-log.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "psxxj/psxxj-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }