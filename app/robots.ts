
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      }
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://bizcivitas.com'}/sitemap.xml`,
    host: process.env.NEXT_PUBLIC_SITE_URL || 'https://bizcivitas.com',
  }
}
