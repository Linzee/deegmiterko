export type SiteMetadata = {
  author: string,
  description: string,
  siteUrl: string,
  title: string,
  keywords: string[],
  tagline: string,
}

export type SiteData = {
  siteMetadata: SiteMetadata,
}