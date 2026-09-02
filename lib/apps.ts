
export type AppData = {
  slug: string
  name: string
  category: string
  version: string
  size: string
  rating: string
  reviews: number
  downloads: string
  android: string
  badge?: string
  description: string
  updated: string
  developer: string
  icon: string
  features: string[]
  screenshots: string[]
  changelog: string[]
}

export const apps: AppData[] = [
  {
    slug: "whatsapp-plus",
    name: "WhatsApp Plus",
    category: "Social",
    version: "v2.25.10",
    size: "78 MB",
    rating: "4.8",
    reviews: 12450,
    downloads: "8.7M",
    android: "Android 5.0+",
    badge: "Popular",
    description:
      "WhatsApp Plus with advanced privacy options, customization features and an improved messaging experience.",
    updated: "2 days ago",
    developer: "NexAPK Team",
    icon: "W",
    features: [
      "Advanced privacy controls",
      "Custom themes",
      "Hide online status",
      "Enhanced media sharing",
      "Improved customization",
    ],
    screenshots: [],
    changelog: [
      "Improved overall performance",
      "Fixed minor bugs",
      "Updated privacy controls",
    ],
  },

  {
    slug: "instagram-pro",
    name: "Instagram Pro",
    category: "Social",
    version: "v385.0.0",
    size: "92 MB",
    rating: "4.7",
    reviews: 9830,
    downloads: "5.4M",
    android: "Android 7.0+",
    badge: "Trending",
    description:
      "Instagram Pro with additional customization, privacy controls and a smoother social media experience.",
    updated: "1 day ago",
    developer: "NexAPK Team",
    icon: "I",
    features: [
      "Enhanced privacy",
      "Media download options",
      "Custom interface",
      "Improved performance",
      "Additional controls",
    ],
    screenshots: [],
    changelog: [
      "Performance improvements",
      "Updated interface",
      "Bug fixes",
    ],
  },

  {
    slug: "bgmi",
    name: "BGMI",
    category: "Games",
    version: "v3.9.0",
    size: "1.2 GB",
    rating: "4.9",
    reviews: 28400,
    downloads: "12.8M",
    android: "Android 5.1+",
    badge: "Popular",
    description:
      "Battlegrounds Mobile India with an immersive battle royale experience, improved gameplay and regular updates.",
    updated: "3 days ago",
    developer: "KRAFTON",
    icon: "B",
    features: [
      "Battle royale gameplay",
      "Multiple game modes",
      "High quality graphics",
      "Regular content updates",
      "Online multiplayer",
    ],
    screenshots: [],
    changelog: [
      "New gameplay improvements",
      "Performance optimization",
      "Bug fixes",
    ],
  },

  {
    slug: "spotify-premium",
    name: "Spotify Premium",
    category: "Music",
    version: "v9.0.48",
    size: "85 MB",
    rating: "4.8",
    reviews: 17600,
    downloads: "9.2M",
    android: "Android 6.0+",
    badge: "Premium",
    description:
      "Listen to your favorite music and podcasts with a clean and smooth audio experience.",
    updated: "4 days ago",
    developer: "Spotify",
    icon: "S",
    features: [
      "High quality audio",
      "Personalized playlists",
      "Podcast support",
      "Offline listening",
      "Large music library",
    ],
    screenshots: [],
    changelog: [
      "Audio improvements",
      "Performance improvements",
      "Minor bug fixes",
    ],
  },

  {
    slug: "capcut-pro",
    name: "CapCut Pro",
    category: "Video",
    version: "v14.5.0",
    size: "240 MB",
    rating: "4.7",
    reviews: 11200,
    downloads: "6.8M",
    android: "Android 6.0+",
    badge: "Editor",
    description:
      "Powerful video editing application with professional tools, effects, transitions and templates.",
    updated: "5 days ago",
    developer: "ByteDance",
    icon: "C",
    features: [
      "Professional video editing",
      "Advanced effects",
      "Transitions",
      "Templates",
      "Audio editing tools",
    ],
    screenshots: [],
    changelog: [
      "New editing tools",
      "Improved rendering performance",
      "Bug fixes",
    ],
  },

  {
    slug: "youtube-vanced",
    name: "YouTube Vanced",
    category: "Video",
    version: "v19.20.35",
    size: "110 MB",
    rating: "4.6",
    reviews: 8700,
    downloads: "4.1M",
    android: "Android 6.0+",
    badge: "Featured",
    description:
      "Enhanced YouTube viewing experience with additional playback and customization options.",
    updated: "6 days ago",
    developer: "NexAPK Team",
    icon: "Y",
    features: [
      "Enhanced playback",
      "Background playback",
      "Customization options",
      "Improved viewing experience",
      "Additional controls",
    ],
    screenshots: [],
    changelog: [
      "Playback improvements",
      "Performance optimization",
      "Minor bug fixes",
    ],
  },
]

export function getApp(slug: string): AppData | undefined {
  return apps.find((app) => app.slug === slug)
}

export function getAppsByCategory(category: string): AppData[] {
  if (category === "All") {
    return apps
  }

  return apps.filter(
    (app) => app.category.toLowerCase() === category.toLowerCase()
  )
}

export function getLatestApps(limit?: number): AppData[] {
  if (!limit) {
    return apps
  }

  return apps.slice(0, limit)
}

export function getRelatedApps(
  currentSlug: string,
  category: string,
  limit = 3
): AppData[] {
  return apps
    .filter(
      (app) =>
        app.slug !== currentSlug &&
        app.category.toLowerCase() === category.toLowerCase()
    )
    .slice(0, limit)
}
