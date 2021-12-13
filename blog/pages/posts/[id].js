import Head from "next/head";

import { getAllPostIds, getPostData } from "../../scripts/posts";

import Layout from "../../components/layout";
import Date from "../../components/date";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className="text-black">{postData.title}</h1>
      <div className="text-center text-blue-500 font-semibold text-lg"><Date dateString={postData.date} /></div>
      <div className="flex flex-row">
        <div className="bg-white text-black text-left m-3 px-10 lg:mx-80 rounded-lg shadow-lg border-blue-600 border-4" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
