import { type Article, listArticles, findArticle } from '../../lib/article';
import type { NextPage } from 'next';

type Props = { article: Article };

const ArticlePage: NextPage<Props> = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
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

export const getStaticProps = ({ params }: any) => {
  const article = findArticle(params.slug);
  return {
    props: { article },
  };
};
