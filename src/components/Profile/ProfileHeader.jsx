// import React, { useState } from "react";
// import useUserProfileStore from "../../store/userProfileStore";
// import useAuthStore from "../../store/authStore";
// import EditProfile from "../Profile/EditProfile";
// import useFollowUser from "../../hooks/useFollowUser";

// const ProfileHeader = () => {
// 	const { userProfile } = useUserProfileStore();
// 	const authUser = useAuthStore((state) => state.user);
// 	const [isOpen, setIsOpen] = useState(false);

// 	const onOpen = () => setIsOpen(true);
// 	const onClose = () => setIsOpen(false);

// 	const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(
// 		userProfile?.uid
// 	);

// 	const visitingOwnProfileAndAuth =
// 		authUser && authUser.username === userProfile.username;
// 	const visitingAnotherProfileAndAuth =
// 		authUser && authUser.username !== userProfile.username;

// 	return (
// 		<div className="py-10 flex gap-4 sm:gap-10 flex-col sm:flex-row">
// 			{/* Rest of your JSX */}
// 			<div className="mx-auto self-start">
// 				<img
// 					src={userProfile.profilePicURL}
// 					alt="User's profile"
// 					className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover"
// 				/>
// 			</div>

// 			<div className="mx-auto sm:mx-0 flex-1">
// 				<div className="flex gap-4 sm:gap-6 flex-col sm:flex-row justify-center sm:justify-start items-center w-full">
// 					<p className="text-sm sm:text-lg">{userProfile.username}</p>

// 					{visitingOwnProfileAndAuth && (
// 						<div className="flex gap-4 items-center justify-center">
// 							<button
// 								className="bg-white text-black hover:bg-whiteAlpha-800 text-xs sm:text-sm py-2 px-4 rounded"
// 								onClick={onOpen}
// 							>
// 								Edit Profile
// 							</button>
// 						</div>
// 					)}

// 					{visitingAnotherProfileAndAuth && (
// 						<div className="flex gap-4 items-center justify-center">
// 							<button
// 								className="bg-blue-500 text-white hover:bg-blue-600 text-xs sm:text-sm py-2 px-4 rounded"
// 								onClick={handleFollowUser}
// 								disabled={isUpdating}
// 							>
// 								{isFollowing ? "Unfollow" : "Follow"}
// 							</button>
// 						</div>
// 					)}
// 				</div>

// 				<div className="flex gap-4 sm:gap-6 items-center">
// 					<p className="text-xs sm:text-sm">
// 						<span className="font-bold mr-1">{userProfile.posts.length}</span>
// 						Posts
// 					</p>
// 					<p className="text-xs sm:text-sm">
// 						<span className="font-bold mr-1">
// 							{userProfile.followers.length}
// 						</span>
// 						Followers
// 					</p>
// 					<p className="text-xs sm:text-sm">
// 						<span className="font-bold mr-1">
// 							{userProfile.following.length}
// 						</span>
// 						Following
// 					</p>
// 				</div>

// 				<div className="flex items-center gap-4">
// 					<p className="text-sm font-bold">{userProfile.fullName}</p>
// 				</div>

// 				<p className="text-sm">{userProfile.bio}</p>
// 			</div>
// 			{isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
// 		</div>
// 	);
// };

// export default ProfileHeader;

"use client";

import { useState } from "react";
import useAuthStore from "../../store/authStore";
import useFollowUser from "../../hooks/useFollowUser";
import EditProfile from "./EditProfile";

export default function ProfileHeader({ user }) {
	const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
	const authUser = useAuthStore((state) => state.user);
	const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(
		user?.uid
	);

	const isOwnProfile = authUser?.username === user?.username;
	const isVisitingProfile = authUser && !isOwnProfile;

	return (
		<div className="flex flex-col gap-8">
			{/* Profile Info */}
			<div className="flex gap-8 items-start">
				<img
					src={user.profilePicURL}
					alt={user.username}
					className="w-20 h-20 rounded-full object-cover"
				/>

				<div className="flex-1">
					<div className="flex items-center gap-4 mb-4">
						<h2 className="text-xl font-semibold">{user.fullName}</h2>
						{isOwnProfile ? (
							<div className="flex gap-2">
								<button
									onClick={() => setIsEditProfileOpen(true)}
									className="px-4 py-1.5 bg-gray-800 rounded-lg text-sm font-medium hover:bg-gray-700"
								>
									Edit profile
								</button>
								<button className="px-4 py-1.5 bg-gray-800 rounded-lg text-sm font-medium hover:bg-gray-700">
									View archive
								</button>
							</div>
						) : isVisitingProfile ? (
							<button
								onClick={handleFollowUser}
								disabled={isUpdating}
								className={`px-6 py-1.5 rounded-lg text-sm font-medium ${
									isFollowing
										? "bg-gray-800 hover:bg-gray-700"
										: "bg-blue-500 hover:bg-blue-600"
								}`}
							>
								{isFollowing ? "Following" : "Follow"}
							</button>
						) : null}
					</div>

					{/* Stats */}
					<div className="flex gap-8 mb-4">
						<div>
							<span className="font-semibold">{user.posts.length}</span>
							<span className="text-gray-400 ml-1">posts</span>
						</div>
						<div>
							<span className="font-semibold">{user.followers.length}</span>
							<span className="text-gray-400 ml-1">followers</span>
						</div>
						<div>
							<span className="font-semibold">{user.following.length}</span>
							<span className="text-gray-400 ml-1">following</span>
						</div>
					</div>

					{/* Bio */}
					<p className="text-sm">{user.bio}</p>
				</div>
			</div>

			{/* Story Highlights */}
			<div className="flex gap-4 overflow-x-auto pb-4">
				{[1, 2, 3, 4].map((_, i) => (
					<div key={i} className="flex flex-col items-center gap-1">
						<div className="w-16 h-16 rounded-full border-2 border-gray-700 flex items-center justify-center">
							<div className="w-14 h-14 bg-gray-800 rounded-full"></div>
						</div>
						<span className="text-xs text-gray-400">Highlights</span>
					</div>
				))}
			</div>

			{/* Edit Profile Modal */}
			{isEditProfileOpen && (
				<EditProfile
					isOpen={isEditProfileOpen}
					onClose={() => setIsEditProfileOpen(false)}
				/>
			)}
		</div>
	);
}