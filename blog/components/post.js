
import Link from "next/link";
import Date from "../components/date";

export default function Post({ post }) {
	return (
		<div className="bg-blue-400 flex-1 rounded shadow-md border border-gray-200 m-6">
			<div className="p-3 text-white">
				<Link href={`/posts/${post.title}`}>
					<a>{post.title}</a>
				</Link>
				<br />
				<Date dateString={post.date} />
			</div>
		</div>
	);
}