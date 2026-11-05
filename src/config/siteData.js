export const siteConfig = {
  label: {
    name: "AURA.",
    tagline: "Sound in Motion",
  },

  nav: {
    links: [
      { label: "Catalogue", href: "#releases" },
      { label: "Artists", href: "#roster" },
      { label: "Dates", href: "#dates" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Submit Demo",
  },

  hero: {
    wordmark: ["AURA", "RECORDS"],
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&q=80",
    imageAlt: "Abstract vinyl texture with amber and teal light",
    metadata: {
      top: "LC-001",
      bottom: "EST. 2019",
    },
    accentDots: [
      { color: "amber", x: 0, y: 0 },
      { color: "teal", x: 0, y: 0 },
    ],
  },

  statement: {
    label: "STATEMENT",
    text: "We release music that exists between the grid and the groove.",
    highlight: "between the grid and the groove",
    index: "01",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    imageAlt: "Recording studio with analog equipment",
  },

  releases: {
    label: "CATALOGUE",
    headline: "Current\nReleases",
    lede: "Four records. Two years. One frequency.",
    deck: [
      {
        id: "aur-004",
        artist: "Mara Lind",
        title: "Refraction",
        format: "12\" LP / Digital",
        date: "2024.03.15",
        genre: "Ambient / Dub Techno",
        coverUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80",
        color: "amber",
      },
      {
        id: "aur-003",
        artist: "Kaelo",
        title: "Night Systems",
        format: "12\" EP / Digital",
        date: "2023.11.03",
        genre: "Deep House",
        coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
        color: "teal",
      },
      {
        id: "aur-002",
        artist: "Vesper",
        title: "Slow Fade",
        format: "10\" EP / Digital",
        date: "2023.06.22",
        genre: "Leftfield / Downtempo",
        coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
        color: "amber",
      },
      {
        id: "aur-001",
        artist: "Axis One",
        title: "First Light",
        format: "12\" LP / Digital",
        date: "2022.09.09",
        genre: "Melodic Techno",
        coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80",
        color: "teal",
      },
    ],
    ctaPrimary: "View Catalogue",
    ctaSecondary: "Bandcamp",
  },

  roster: {
    label: "ROSTER",
    artists: [
      { name: "Mara Lind", role: "Producer / Live", releases: 2, location: "Berlin" },
      { name: "Kaelo", role: "DJ / Producer", releases: 3, location: "London" },
      { name: "Vesper", role: "Producer", releases: 1, location: "Tokyo" },
      { name: "Axis One", role: "Producer / Live", releases: 4, location: "Los Angeles" },
      { name: "Nøra", role: "Vocalist / Producer", releases: 1, location: "Copenhagen" },
      { name: "Drift", role: "DJ / Curator", releases: 0, location: "Mexico City" },
    ],
  },

  dates: {
    label: "DATES",
    headers: ["DATE", "ARTIST", "VENUE", "CITY", "TICKETS"],
    rows: [
      { date: "2024.04.12", artist: "Mara Lind (Live)", venue: "Berghain", city: "Berlin", status: "Sold Out" },
      { date: "2024.04.19", artist: "Kaelo", venue: "Fabric", city: "London", status: "On Sale" },
      { date: "2024.05.03", artist: "Vesper (Live)", venue: "Contact", city: "Tokyo", status: "On Sale" },
      { date: "2024.05.17", artist: "Axis One (Live)", venue: "The Warehouse", city: "Los Angeles", status: "Soon" },
      { date: "2024.06.07", artist: "AURA Showcase", venue: "Corsica Studios", city: "London", status: "On Sale" },
      { date: "2024.06.21", artist: "Nøra (Live)", venue: "Vega", city: "Copenhagen", status: "Soon" },
    ],
  },

  close: {
    headline: "The Frequency Continues",
    finePrint: "AURA Records operates independently. All rights reserved. No streaming data sold.",
    ctaPrimary: "Join Mailing List",
    ctaSecondary: "Bandcamp",
    footer: "© 2024 AURA Records. Established 2019. Berlin · London · Tokyo",
  },
};