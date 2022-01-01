import { useSpring, animated, useSpringRef, useChain, useTransition } from "react-spring";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";


import { getSortedPostsData } from "../scripts/posts";

import Layout from "../components/layout";
import Post from "../components/post";


export default function Home({ postData }) {
	const [show, set] = useState(true);
	const springRef = useSpringRef();
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 200,
		config: { duration: 1000},
		ref: springRef
	});

	const transitionRef = useSpringRef();
	const transitions = useTransition(show, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		delay: 200,
		ref: transitionRef
	});
	// First run the spring, when it concludes run the transition
	useChain([springRef, transitionRef], [0, 1])
	return (
		<Layout>
			<div>
				<div className="p-10 h-screen flex items-center justify-center flex-col">
					<animated.h1 style={props} className="font-bold text-b md:text-9xl text-center text-7xl">Welcome</animated.h1>
					{transitions(styles => (
						<animated.h2 style={styles} className="font-bold text-blue-600 md:text-3xl text-center text-2xl"> Hello, thanks for visiting</animated.h2>
					))}
					<div className="flex flex-wrap justify-center">
						<div className="justify-center space-x-10 w-full flex flex-wrap flex-row text-xl">
							<Link href="https://github.com/Isaac-Muscat">
								<a className="navbtn text-black bg-white flex">
									<Image src="/images/GitHub-Mark.png" width={50} height={50} />
									GitHub
								</a>
							</Link>
							<Link href="https://www.linkedin.com/in/isaac-muscat-joy/">
							<a className="navbtn text-black bg-white flex">
								<Image src="/images/LinkedIn-Icon.png" width={40} height={40} />
								&nbsp; LinkedIn
							</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center flex-col bg-green-600">
					<h1 className="text-white">Introduction</h1>
					<Image src={"/images/BirdProfilePic.jpeg"} className="rounded-full" width={200} height={200} />
					<p className="font-bold text-white mx-20 p-2 text-center">
						My name is Isaac Muscat and welcome to my site!
						This site has a portfolio of some projects I have worked on
						and a blog page where I document project work, my thoughts
						on them, and other topics.
					</p>
				</div>
				<br />
				<div className="w-full flex justify-center">
					<div className="bg-blue-600 rounded-lg border border-black-200 lg:w-3/5">
						<h2 className="font-bold text-white text-center text-b text-7xl p-3">Blog</h2>
						<div className="flex justify-between flex-col p-6 space-y-6">
							{
								postData.slice(0, 3).sort((post1, post2) => {
									if(post1.title === "About"){
										return -1
									} else if(post1 === post2) {
										return 0;
									} else return (post1 > post2);
								}).map((post) => (
									<Link key={post.title} href={`/posts/${post.title}`}>
										<a>
											<Post post={post} />
										</a>
									</Link>
								))
							}
						</div>
					</div>
				</div>
				<div className="bg-white text-b m-3">
					<h2 className="font-bold text-center text-b text-7xl p-3">Projects</h2>
					<div className="flex justify-around flex-wrap">
						<p className="text-lg text-b">Coming Soon...</p>
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
