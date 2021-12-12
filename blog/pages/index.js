import Link from "next/link";

import { getSortedPostsData } from "../scripts/posts";

import Layout from "../components/layout";
import Post from "../components/post";

export default function Home({ postData }) {
	return (
		<Layout>
			<div>
				<div className="p-10 h-screen flex items-center justify-center">
					<h1 className="font-bold text-b md:text-9xl text-center text-7xl">Isaac Muscat</h1>
				</div>
				<div className="bg-blue-700">
					<h2 className="font-bold text-white text-center text-b text-7xl p-3">Blog</h2>
					<div className="flex justify-around flex-wrap">
						{postData.map((post) => (
							<Post key={post.title} post={post}/>
						))}
					</div>
				</div>
			</div>
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
