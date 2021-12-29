import Layout from "../components/layout";
import { getSortedPostsData } from "../scripts/posts";
import Post from "../components/post";

export default function Blog({postData}) {
  return <Layout>
  <div className="">
					<div className="bg-blue-600 rounded-lg border border-black-200 lg:mx-80">
						<h2 className="font-bold text-white text-center text-b text-7xl p-3">Blog</h2>
						<div className="flex justify-between flex-col">
							{postData.slice().map((post) => (
								<Post key={post.title} post={post}/>
							))}
						</div>
					</div>
				</div>
  </Layout>;
}

export async function getStaticProps() {
	const postData = getSortedPostsData();

	return {
		props: {
			postData,
		},
	};
}