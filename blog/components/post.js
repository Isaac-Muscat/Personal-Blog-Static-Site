
import Link from "next/link";
import Date from "../components/date";

export default function Post({ post }) {
	return (
		<div className="bg-white flex-1 rounded shadow-lg border-4 border-blue-600 m-6">
			<div className="p-3 flex flex-col text-blue-600 ">
				<Link href={`/posts/${post.title}`}>
					<a className="text-center text-2xl font-bold">{post.title}</a>
				</Link>
				<Date className="align-text-bottom" dateString={post.date} />
			</div>
		</div>
	);
}