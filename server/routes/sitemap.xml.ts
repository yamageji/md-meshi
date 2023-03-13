import { SitemapStream, streamToPromise } from 'sitemap';
import { serverQueryContent } from '#content/server';

const BASE_URL = 'https://md-meshi.pages.dev';

// content以外のURLリスト（動的に取得できるようにしたい...）
const pageList = [
  '',
  'about',
  'recipe/suggest',

  'recipe/page/1',
  'recipe/page/2',
  'recipe/page/3',
  'recipe/page/4',

  'recipe/monthly/2023-01',
  'recipe/monthly/2022-12',
  'recipe/monthly/2022-11',
  'recipe/monthly/2022-10',
  'recipe/monthly/2022-09',
  'recipe/monthly/2022-08',
  'recipe/monthly/2022-07',
  'recipe/monthly/2022-06',

  '/recipe/category/rice/1',
  '/recipe/category/noodles/1',
  '/recipe/category/noodles/1',
  '/recipe/category/soup/1',
  '/recipe/category/vegetable/1',
  '/recipe/category/vegetable/2',
  '/recipe/category/seafood/1',
  '/recipe/category/meat/1',
  '/recipe/category/meat/2',
  '/recipe/category/egg/1',
  '/recipe/category/others/1',
];

export default defineEventHandler(async (event) => {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  for (const doc of pageList) {
    sitemap.write({ url: doc, changefreq: 'weekly' });
  }

  const docs = await serverQueryContent(event).find();
  for (const doc of docs) {
    sitemap.write({ url: doc._path, changefreq: 'weekly' });
  }

  sitemap.end();
  return streamToPromise(sitemap);
});
