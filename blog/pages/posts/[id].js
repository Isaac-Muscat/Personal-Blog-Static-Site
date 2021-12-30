import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { getAllPostIds, getPostData } from "../../scripts/posts";

import Layout from "../../components/layout";
import Date from "../../components/date";


export default function Post({ postData }) {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full flex flex-col items-center mb-10 shadow-lg">
          <h1 className="text-black">{postData.title}</h1>
          <div className="text-center text-blue-500 font-semibold text-lg m-2">
            <Date dateString={postData.date} />
          </div>
          <img className="object-cover w-2/3 sm:w-min sm:h-64 rounded-xl my-5" src={`${postData.coverImage}`}/>
          <div className="flex flex-wrap text-center font-bold space-x-2 justify-center items-center w-full p-2">
            <h3 className="w-full text-blue-600">Tags </h3>
            <br />
            {
              postData.tags.slice().map((tag) => (
                <div className="rounded bg-green-400 flex-initial p-2 m-2 text-white">{tag}</div>
                ))
              }
          </div>
        </div>
        <div className="flex flex-row">
          <ReactMarkdown className="content-block" components={components}>{postData.content}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
}

const components = {
  image: image => {
    return <Image src={image.properties.src} alt={image.alt} height="200" width="355" />
  },
  code: c => {
    return (
      <SyntaxHighlighter
        language={c.className.split("-")[1]}
        showLineNumbers
        lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
        wrapLines={true}
      >
        {c.children}
      </SyntaxHighlighter>
    );
  }
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
      postData
    },
  };
}
