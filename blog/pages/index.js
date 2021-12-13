import { useSpring, animated, useSpringRef, useChain, useTransition } from "react-spring";
import { useState } from "react";


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
					<animated.h1 style={props} className="font-bold text-b md:text-9xl text-center text-7xl"> Isaac Muscat</animated.h1>
					{transitions(styles => (
						<animated.h2 style={styles} className="font-bold text-blue-600 md:text-3xl text-center text-2xl"> Hello, thanks for visiting</animated.h2>
					))}
				</div>
				<div className="">
					<div className="bg-blue-600 rounded-lg border border-black-200 lg:mx-80">
						<h2 className="font-bold text-white text-center text-b text-7xl p-3">Blog</h2>
						<div className="flex justify-between flex-col">
							{postData.slice(0, 3).map((post) => (
								<Post key={post.title} post={post}/>
							))}
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
