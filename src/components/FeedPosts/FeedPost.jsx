// import PostFooter from "./PostFooter";
// import PostHeader from "./PostHeader";
// import useGetUserProfileById from "../../hooks/useGetUserProfileById";

// const FeedPost = ({ post }) => {
// 	const { userProfile } = useGetUserProfileById(post.createdBy);

// 	return (
// 		<>
// 			<PostHeader post={post} creatorProfile={userProfile} />
// 			<div className="my-2 rounded-lg overflow-hidden">
// 				<img
// 					src={post.imageURL}
// 					alt="Feed Post Image"
// 					className="w-full object-cover"
// 				/>
// 			</div>
// 			<PostFooter post={post} creatorProfile={userProfile} />
// 		</>
// 	);
// };

// export default FeedPost;

import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import Stories from "../Stories/Stories";

const FeedPost = ({ post }) => {
	const { userProfile } = useGetUserProfileById(post.createdBy);

	return (
		<div className="bg-[#121212] rounded-lg border border-gray-800">
			<PostHeader post={post} creatorProfile={userProfile} />
			<div className=" aspect-square">
				<img
					src={post.imageURL}
					alt="Post"
					className="w-full h-full object-cover"
				/>
			</div>
			<PostFooter post={post} creatorProfile={userProfile} />
		</div>
	);
};

export default FeedPost;
