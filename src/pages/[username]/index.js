"use client";

import { useRouter } from "next/router";
import { MoreHorizontal, Settings } from "lucide-react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";
import PageLayouts from "@/Layouts/PageLayouts";

export default function ProfilePage() {
	const router = useRouter();
	const { username } = router.query;
	const { isLoading, userProfile } = useGetUserProfileByUsername(username);

	if (!isLoading && !userProfile) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
				<p className="text-2xl mb-4">User Not Found</p>
				<button
					onClick={() => router.push("/")}
					className="text-blue-500 hover:text-blue-400"
				>
					Go home
				</button>
			</div>
		);
	}

	return (
		<PageLayouts>
			<div className="min-h-screen bg-black text-white">
				<div className="max-w-4xl mx-auto px-4 py-8">
					{/* Header Actions */}
					<div className="flex items-center justify-between mb-8">
						<h1 className="text-xl font-semibold">ajmal_mt_</h1>
						<div className="flex items-center gap-4">
							<button className="p-2 hover:bg-gray-800 rounded-full">
								<Settings className="w-6 h-6" />
							</button>
							<button className="p-2 hover:bg-gray-800 rounded-full">
								<MoreHorizontal className="w-6 h-6" />
							</button>
						</div>
					</div>

					{/* Profile Content */}
					{!isLoading && userProfile && <ProfileHeader user={userProfile} />}
					{isLoading && <ProfileHeaderSkeleton />}

					<div className="mt-8 border-t border-gray-800">
						<ProfileTabs />
						<ProfilePosts />
					</div>
				</div>
			</div>
		</PageLayouts>
	);
}

function ProfileHeaderSkeleton() {
	return (
		<div className="flex gap-8 items-start animate-pulse">
			<div className="w-20 h-20 bg-gray-800 rounded-full"></div>
			<div className="flex-1">
				<div className="h-4 bg-gray-800 rounded w-1/4 mb-4"></div>
				<div className="h-4 bg-gray-800 rounded w-1/3"></div>
			</div>
		</div>
	);
}

// "use client";

// import React from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import ProfileHeader from "../../components/Profile/ProfileHeader";
// import ProfileTabs from "../../components/Profile/ProfileTabs";
// import ProfilePosts from "../../components/Profile/ProfilePosts";
// import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";
// import PageLayouts from "../../layouts/PageLayouts";

// const ProfilePage = () => {
// 	const router = useRouter();
// 	const { username } = router.query; // Get username from the dynamic route
// 	const { isLoading, userProfile } = useGetUserProfileByUsername(username);

// 	const userNotFound = !isLoading && !userProfile;
// 	if (userNotFound) return <UserNotFound />;

// 	return (
// 		<PageLayouts>
// 			<div className="container mx-auto py-5">
// 				{/* Profile Header */}
// 				<div className="py-10 px-4 sm:px-10 w-full mx-auto flex flex-col">
// 					{!isLoading && userProfile && <ProfileHeader user={userProfile} />}
// 					{isLoading && <ProfileHeaderSkeleton />}
// 				</div>

// 				{/* Profile Tabs and Posts */}
// 				<div className="px-2 sm:px-4 max-w-full mx-auto border-t border-whiteAlpha-300 flex flex-col">
// 					<ProfileTabs />
// 					<ProfilePosts />
// 				</div>
// 			</div>
// 		</PageLayouts>
// 	);
// };

// export default ProfilePage;

// // Skeleton loader for profile header
// const ProfileHeaderSkeleton = () => (
// 	<div className="flex gap-4 sm:gap-10 py-10 flex-col sm:flex-row justify-center items-center">
// 		<div className="skeleton-circle w-24 h-24 rounded-full"></div>
// 		<div className="flex flex-col items-center sm:items-start gap-2 mx-auto flex-1">
// 			<div className="skeleton bg-gray-300 w-40 h-3 rounded"></div>
// 			<div className="skeleton bg-gray-300 w-24 h-3 rounded"></div>
// 		</div>
// 	</div>
// );

// // User not found component
// const UserNotFound = () => (
// 	<div className="flex flex-col text-center mx-auto">
// 		<p className="text-2xl">User Not Found</p>
// 		<Link href={"/"} className="text-blue-500 mx-auto w-max-content">
// 			Go home
// 		</Link>
// 	</div>
// );
