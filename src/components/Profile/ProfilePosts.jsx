// import ProfilePost from "./ProfilePost";
// import useGetUserPosts from "../../hooks/useGetUserPosts";

// const ProfilePosts = () => {
// 	const { isLoading, posts } = useGetUserPosts();

// 	const noPostsFound = !isLoading && posts.length === 0;
// 	if (noPostsFound) return <NoPostsFound />;

// 	return (
// 		<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-1">
// 			{isLoading &&
// 				[0, 1, 2].map((_, idx) => (
// 					<div key={idx} className="flex flex-col items-start gap-4">
// 						<div className="w-full h-72 bg-gray-300 animate-pulse"></div>
// 					</div>
// 				))}

// 			{!isLoading && (
// 				<>
// 					{posts.map((post) => (
// 						<ProfilePost post={post} key={post.id} />
// 					))}
// 				</>
// 			)}
// 		</div>
// 	);
// };

// export default ProfilePosts;

// const NoPostsFound = () => {
// 	return (
// 		<div className="flex flex-col items-center text-center mx-auto mt-10">
// 			<p className="text-2xl">No Posts Found🤔</p>
// 		</div>
// 	);
// };

"use client";

import { Heart, MessageCircle } from "lucide-react";
import useGetUserPosts from "../../hooks/useGetUserPosts";

export default function ProfilePosts() {
	const { isLoading, posts } = useGetUserPosts();

	if (!isLoading && posts.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center py-20">
				<p className="text-xl font-semibold mb-2">No Posts Yet</p>
				<p className="text-gray-400">
					Start capturing and sharing your moments.
				</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-3 gap-1">
			{isLoading
				? // Loading skeletons
				  [...Array(9)].map((_, i) => (
						<div key={i} className="aspect-square bg-gray-800 animate-pulse" />
				  ))
				: posts.map((post) => <PostCard key={post.id} post={post} />)}
		</div>
	);
}

function PostCard({ post }) {
	return (
		<div className="relative aspect-square group cursor-pointer">
			<img src={post.imageURL} alt="" className="w-full h-full object-cover" />
			<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
				<div className="flex gap-6 text-white">
					<div className="flex items-center gap-2">
						<Heart className="w-6 h-6 fill-white" />
						<span className="font-semibold">{post.likes.length}</span>
					</div>
					<div className="flex items-center gap-2">
						<MessageCircle className="w-6 h-6 fill-white" />
						<span className="font-semibold">{post.comments.length}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
