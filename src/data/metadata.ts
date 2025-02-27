export interface MetadataSeoProps {
  locale: string
  title: string
  description: string
}

export function MetadataSeo({ locale, title, description }: MetadataSeoProps) {

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "website",
      siteName: "WOW LLC",
      url: "https://wow.llc",
      locale: locale,
      images: [
        {
          url: "https://wow.llc/WOW-Thumbnail.png",
          alt: "Thumbnail"
        }
      ]
    }
  }
}
