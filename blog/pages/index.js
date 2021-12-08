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
			<a href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
    <span className="relative group-hover:text-white">Button Text</span>
</a>
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
