// import Home from "./Home";
// import Search from "./Search";
// import Notifications from "./Notifications";
// import CreatePost from "./CreatePost";
// import ProfileLink from "./ProfileLink";

// const SidebarItems = () => {
// 	return (
// 		<div className="flex flex-col gap-5">
// 			<Home />
// 			<Search />
// 			<Notifications />
// 			<CreatePost />
// 			<ProfileLink />
// 		</div>
// 	);
// };

// export default SidebarItems;

import React from "react";
import Home from "./Home";
import Search from "./Search";
import Notifications from "./Notifications";
import CreatePost from "./CreatePost";
import ProfileLink from "./ProfileLink";

const SidebarItems = ({ isMobile }) => {
	return (
		<div
			className={`flex ${
				isMobile ? "justify-around w-full" : "flex-col gap-1"
			}`}
		>
			<Home isMobile={isMobile} />
			<Search isMobile={isMobile} />
			<Notifications isMobile={isMobile} />
			<CreatePost isMobile={isMobile} />
			<ProfileLink isMobile={isMobile} />
		</div>
	);
};

export default SidebarItems;
