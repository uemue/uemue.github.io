import fs from 'fs';

export type Article = {
  date: string;
  slug: string;
  title: string;
  content: string;
};

const exampleArticles: Article[] = [
  {
    date: '2022-05-06',
    title: 'テスト記事1',
    slug: 'example-1',
    content: 'Example 1',
  },
  {
    date: '2022-05-07',
    title: 'テスト記事2',
    slug: 'example-2',
    content: 'Example 2',
  },
  {
    date: '2022-05-06',
    title: 'テスト記事3',
    slug: 'example-3',
    content: 'Example 3',
  },
];

export const listArticles = (): Article[] => {
  return exampleArticles;
};

export const findArticle = (slug: string): Article => {
  const result = exampleArticles.find((article) => article.slug == slug);
  return result as Article;
};
