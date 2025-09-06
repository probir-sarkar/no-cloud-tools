export const siteConfig = {
  name: "OfflineTools",
  description:
    "Offline-first, open-source PDF and image tools. Run everything in your browser, with privacy and speed.",
  navItems: [
    {
      label: "Home",
      href: "/",
      isExternal: false,
    },
    {
      label: "Tools",
      href: "/#tools",
      isExternal: false,
    },
    {
      label: "GitHub",
      href: "https://github.com/your-username/offlinetools",
      isExternal: true,
    },
  ],
  navMenuItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "My Files",
      href: "/files",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Sponsor Us",
      href: "/sponsor",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/your-username/offlinetools",
    twitter: "https://twitter.com/offlinetools",
    docs: "https://offlinetools.dev/docs",
    discord: "https://discord.gg/your-community",
    sponsor: "https://github.com/sponsors/your-username",
  },
};

export type SiteConfig = typeof siteConfig;

export default siteConfig;
