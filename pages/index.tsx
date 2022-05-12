import type { NextPage } from 'next';
import Link from 'next/link';
import { type Article, listArticles } from '../lib/article';

type Props = { articles: Article[] };

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <section key={article.slug}>
          <time>{article.date}</time>
          <Link href={`/articles/${article.slug}`}>
            <a>{article.title}</a>
          </Link>
        </section>
      ))}
    </>
  );
};

export default Home;

export const getStaticProps = () => {
  const articles = listArticles();
  return { props: { articles } };
};
