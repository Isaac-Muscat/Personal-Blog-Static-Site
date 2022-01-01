import Image from "next/image";
import Link from "next/link";
import Date from "../components/date";

export default function Post({ post }) {
	return (
		<div className="flex flex-col sm:flex-row bg-white shadow-lg">
			<img className="object-cover h-min sm:w-64" src={`${post.coverImage}`} />
			<div className="p-3 flex flex-col text-blue-600 space-y-2 w-full">
				<p className="text-left text-2xl font-bold">{post.title}</p>
				<Date className="align-text-bottom" dateString={post.date} />
				<div className="flex flex-wrap text-center font-bold text-white space-x-2 text-sm">
					{
						post.tags.slice(0,5).map((tag, i) => (
							<div key={i} className="rounded bg-green-500 flex-initial p-2 m-2">{tag}</div>
						))
					}
				</div>
			</div>
		</div>
	);
}