import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { type Article, listArticles } from '../lib/article';

type Props = { articles: Article[] };

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/articles/${article.slug}`}>
              <a>{article.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;

export const getStaticProps = () => {
  const articles = listArticles();
  return { props: { articles } };
};
