import Link from "next/link";

import { getSortedPostsData } from "../scripts/posts";

import Layout from "../components/layout";
import Date from "../components/date";

export default function Home({ postData }) {
  return (
    <Layout>
      <h1>Isaac Muscat</h1>
      <h2>Blog</h2>
      <ul>
        {postData.map(({ date, title }) => (
          <li key={title}>
            <Link href={`/posts/${title}`}>
              <a>{title}</a>
            </Link>
            <br />
            <Date dateString={date} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const postData = getSortedPostsData();

  return {
    props: {
      postData,
    },
  };
}
