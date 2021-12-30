import Layout from "../components/layout";
import { getSortedPostsData } from "../scripts/posts";
import Post from "../components/post";

export default function Blog({postData}) {
  return <Layout>
	<div className="w-full flex flex-col items-center justify-center">
		<div className="bg-blue-600 rounded-lg border border-black-200 lg:w-3/5">
			<h2 className="font-bold text-white text-center text-b text-7xl p-3">Blog</h2>
			<form className="flex flex-row space-x-3 items-center p-2 bg-green-500 border-white border-2 m-6 rounded">
				<label className="text-white text-xl text-bold" for="tag">Search by Tag </label>
				<input className="rounded p-2 w-full" id="tag" type="text" required />
				<button className="bg-blue-600 text-white text-xl p-2 rounded" type="submit">Search</button>
			</form>
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