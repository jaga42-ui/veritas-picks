import { siteConfig } from "@/config/site";
import { getAllGuides } from "@/lib/content";

export async function GET() {
  const guides = await getAllGuides();
  const baseUrl = siteConfig.url;

  const itemsXml = guides
    .map((guide) => {
      const { title, description, slug, publishedAt, categoryName } = guide;
      const url = `${baseUrl}/${slug}`;
      const pubDate = new Date(publishedAt).toUTCString();

      return `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${description}]]></description>
      <category>${categoryName}</category>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name} - ${siteConfig.tagline}</title>
    <link>${baseUrl}</link>
    <description>${siteConfig.description}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
