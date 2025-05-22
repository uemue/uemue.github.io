import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// remark and remark-html will be imported dynamically
// import { remark } from 'remark';
// import remarkHtml from 'remark-html';

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
    const slug = path.basename(fileName, '.md');
    const article = findArticle(slug);

    return article;
  });

  const sortedArticles = articles.sort((article1, article2) => {
    if (article1.date < article2.date) {
      return 1;
    } else if (article1.date > article2.date) {
      return -1;
    } else {
      return 0;
    }
  });

  return sortedArticles;
};

export const findArticle = (slug: string): Article => {
  const file = matter.read(path.join(articleBasePath, slug + '.md'));
  const date = slug.slice(0, 10);
  const title = file.data.title;
  const content = file.content;

  return { date, slug, title, content };
};

export const renderContent = async (article: Article): Promise<string> => {
  // Dynamically import remark and plugins
  const { remark } = await import('remark');
  const { default: remarkHtml } = await import('remark-html'); // .default for CJS/ESM interop

  const processedContent = await remark()
    .use(remarkHtml)
    .process(article.content);
  return processedContent.toString();
};
