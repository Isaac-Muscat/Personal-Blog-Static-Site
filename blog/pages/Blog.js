import Layout from "../components/layout";
import { getSortedPostsData } from "../scripts/posts";
import Post from "../components/post";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Blog({postData}) {
	const [searchTerm, setSearchTerm] = useState("");
	const [tags, setTags] = useState(new Set());

	useEffect(() => {
		let t = new Set();
		postData.forEach(post => {
			post.tags.forEach(tag => {
				t.add(tag);
			});
		});
		setTags(t);
	}, []);


	function isPostInSearch(post) {
		let flag = false;
		post.tags.forEach(tag => {
			if(tag.toLowerCase().includes(searchTerm.toLowerCase())
			|| searchTerm.toLowerCase().includes(tag.toLowerCase())){
				flag = true;	
			} 
		});
		if(post.title.toLowerCase().includes(searchTerm.toLowerCase())) flag = true;
		return flag;
	}

  return <Layout>
	<div className="w-full flex flex-col items-center justify-center">
		<div className="bg-blue-600 rounded-lg border border-black-200 lg:w-3/5">
			<h2 className="font-bold text-white text-center text-b text-7xl p-3">Blog</h2>
			<form className="flex flex-row space-x-3 items-center p-2 bg-green-500 border-white border-2 m-6 rounded">
				<label className="text-white text-2xl text-bold" htmlFor="tag">Search </label>
				<input className="rounded p-2 w-full" id="tag" type="text" onChange={(e) => {
					e.preventDefault();
					setSearchTerm(e.target.value);
				}} value={searchTerm}/>
			</form>
			<div className="flex flex-wrap text-center font-bold space-x-2 justify-center items-center w-full">
				<p className="text-white">Tags: </p>
				{
					[...tags].map(tag => {
						return <button key={tag} className="navbtn bg-black" onClick={(e) => {
							e.preventDefault();
							setSearchTerm(e.target.innerText);
						}}>{tag}</button>;
					})
				}
			</div>
			<div className="flex justify-between flex-col p-6 space-y-6">
				{
					postData.map(post => {
						if(isPostInSearch(post)){
							return (
								<Link href={`/posts/${post.title}`}>
									<a>
										<Post key={post.title} post={post} />
									</a>
								</Link>
							)
						} else {
							return null;
						}
					})
				}
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