import Image from "next/image";
import Link from "next/link";
import Date from "../components/date";

export default function Post({ post }) {
	return (
		<div className="flex flex-col sm:flex-row bg-white rounded shadow-lg border-4 border-blue-600 m-6">
			<img className="object-cover h-32 sm:w-32" src={`${post.coverImage}`} />
			<div className="p-3 flex flex-col text-blue-600 ">
				<Link href={`/posts/${post.title}`}>
					<a className="text-center text-2xl font-bold">{post.title}</a>
				</Link>
				<Date className="align-text-bottom" dateString={post.date} />
			</div>
		</div>
	);
}