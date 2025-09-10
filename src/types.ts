// JyotirSetu Blog Types

export interface MetaData {
  title?: string;
  description?: string;
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
  openGraph?: {
    type?: string;
    url?: string;
    title?: string;
    description?: string;
    site_name?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
  canonical?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  category: {
    title: string;
    slug: string;
  };
  author: string;
  publishDate: string;
  readingTime: number;
  slug: string;
  tags: string[];
  content?: string;
  metadata?: MetaData;
}

export interface ZodiacSign {
  name: string;
  symbol: string;
  dates: string;
  color: string;
  horoscope: string;
}

export interface WeeklyHoroscope {
  week: string;
  date: string;
  overview: string;
  zodiacSigns: ZodiacSign[];
  cosmicEvents: Array<{
    date: string;
    event: string;
    description: string;
  }>;
}

export interface BlogCategory {
  title: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  postCount: number;
}

export interface NewsletterSubscriber {
  email: string;
  subscribedAt: string;
  preferences: {
    weeklyHoroscopes: boolean;
    astrologyTips: boolean;
    spiritualGuidance: boolean;
  };
}

export interface BlogStats {
  totalPosts: number;
  totalCategories: number;
  totalSubscribers: number;
  mostPopularPost: BlogPost;
  recentPosts: BlogPost[];
}
