import type { NextPage } from 'next';
import Link from 'next/link';
import { type Article, listArticles } from '../lib/article';

type Props = { articles: Article[] };

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <section>
      <ol>
        {articles.map((article) => (
          <li key={article.slug}>
            <time>{article.date}</time>
            <Link href={`/articles/${article.slug}`}>
              <a>{article.title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Home;

export const getStaticProps = () => {
  const articles = listArticles();
  return { props: { articles } };
};
