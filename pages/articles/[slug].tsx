import {
  type Article,
  listArticles,
  findArticle,
  renderContent,
} from '../../lib/article';
import type { NextPage } from 'next';

type Props = { article: Article; html: string };

const ArticlePage: NextPage<Props> = ({ article, html }) => {
  return (
    <article>
      <time>{article.date}</time>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
};

export default ArticlePage;

export const getStaticPaths = () => {
  const paths = listArticles().map((article) => {
    return {
      params: {
        slug: article.slug,
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const article = findArticle(params.slug);
  const html = await renderContent(article);
  return {
    props: { article, html },
  };
};
