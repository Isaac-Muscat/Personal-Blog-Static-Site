import Image from "next/image";
import Link from "next/link";
import Date from "../components/date";

export default function Post({ post }) {
	return (
		<div className="flex flex-col sm:flex-row bg-white shadow-lg">
			<img className="object-cover h-min sm:w-64" src={`${post.coverImage}`} />
			<div className="p-3 flex flex-col text-blue-600 w-full">
				<p className="text-left text-3xl font-bold">{post.title}</p>
				<Date className="font-bold text-black" dateString={post.date} />
				<div className="flex flex-wrap text-center font-bold space-x-2 text-bold text-black text-sm">
				<p>Tags: </p>
					{
						post.tags.slice(0,5).map((tag, i) => (
							<p key={i} className="text-green-500 flex-initial">{tag}</p>
						))
					}
				</div>
			</div>
		</div>
	);
}