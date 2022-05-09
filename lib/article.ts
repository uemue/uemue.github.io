import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export type Article = {
  date: string;
  slug: string;
  title: string;
  content: string;
};

const articleBasePath = path.join(process.cwd(), 'articles');

export const listArticles = (): Article[] => {
  const files = fs.readdirSync(articleBasePath);
  const articles = files.map((fileName) => {
    const file = matter.read(path.join(articleBasePath, fileName));

    const slug = path.basename(fileName, '.md');
    const date = slug.slice(0, 10);
    const title = file.data.title;
    const content = file.content;

    return { date, slug, title, content };
  });
  return articles;
};

export const findArticle = (slug: string): Article => {
  const result = listArticles().find((article) => article.slug == slug);
  return result as Article;
};

export const renderContent = async (article: Article): Promise<string> => {
  const result = await remark().use(remarkHtml).process(article.content);
  return result.toString();
};
