import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export async function GET() {
  const site = 'https://www.gzyaowei.cn';

  const products = await getCollection('products');
  const news = await getCollection('news');

  const productUrls = products.map(p => `
    <url>
      <loc>${site}/products/${p.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`).join('');

  const newsUrls = news.map(n => `
    <url>
      <loc>${site}/news/${n.slug}</loc>
      <lastmod>${n.data.date.toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>`).join('');

  const pages = [
    { loc: site, changefreq: 'daily', priority: 1.0 },
    { loc: `${site}/about`, changefreq: 'monthly', priority: 0.7 },
    { loc: `${site}/products`, changefreq: 'weekly', priority: 0.9 },
    { loc: `${site}/news`, changefreq: 'weekly', priority: 0.7 },
    { loc: `${site}/honors`, changefreq: 'monthly', priority: 0.6 },
    { loc: `${site}/contact`, changefreq: 'monthly', priority: 0.7 },
    { loc: `${site}/en`, changefreq: 'daily', priority: 0.8 },
    { loc: `${site}/en/about`, changefreq: 'monthly', priority: 0.6 },
    { loc: `${site}/en/products`, changefreq: 'weekly', priority: 0.8 },
    { loc: `${site}/en/news`, changefreq: 'weekly', priority: 0.6 },
    { loc: `${site}/en/honors`, changefreq: 'monthly', priority: 0.5 },
    { loc: `${site}/en/contact`, changefreq: 'monthly', priority: 0.6 },
  ];

  const pageUrls = pages.map(p => `
    <url>
      <loc>${p.loc}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${p.changefreq}</changefreq>
      <priority>${p.priority}</priority>
    </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pageUrls}${productUrls}${newsUrls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
