// "use client";

// import React from "react";
// import AuthForm from "../../components/AuthForm/AuthForm";

// const AuthPage = () => {
// 	return (
// 		<div className="flex min-h-screen justify-center items-center px-4">
// 			<div className="container mx-auto max-w-screen-md p-0">
// 				<div className="flex justify-center items-center gap-10">
// 					{/* Left hand side */}
// 					<div className="hidden md:block">
// 						<img src="/auth.png" className="h-[650px]" alt="phone img" />
// 					</div>
// 					{/* Right hand side */}
// 					<div className="flex flex-col space-y-4 w-full">
// 						<AuthForm />
// 						<div className="text-center">Get the app.</div>
// 						<div className="flex gap-5 justify-center">
// 							<img src="/playstore.png" className="h-10" alt="Playstore logo" />
// 							<img src="/microsoft.png" className="h-10" alt="Microsoft logo" />
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default AuthPage;

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthForm from "../../components/AuthForm/AuthForm";

export default function AuthPage() {
	const [currentImage, setCurrentImage] = useState(1);

	// Array of image URLs for the phone mockup
	const images = [
		"/placeholder.svg?height=600&width=380",
		"/placeholder.svg?height=600&width=380",
		"/placeholder.svg?height=600&width=380",
		"/placeholder.svg?height=600&width=380",
	];

	// Function to cycle through images
	const cycleImage = () => {
		setCurrentImage((prev) => (prev % images.length) + 1);
	};

	// Effect to change image every 4 seconds
	useState(() => {
		const interval = setInterval(cycleImage, 4000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
			<div className="container max-w-[850px] flex items-center justify-center gap-8">
				{/* Left side - Phone mockup */}
				<div className="hidden max-w-[380px] lg:block flex-1">
					<div className="relative w-[300px] h-[600px] overflow-hidden">
						{images.map((src, index) => (
							<Image
								key={index}
								src={"/assets/Instagram-Story.png"}
								alt={`Instagram App Screenshot ${index + 1}`}
								width={380}
								height={380}
								className={`absolute top-6 left-0 object-cover rounded-3xl transition-opacity duration-1000 ${
									currentImage === index + 1 ? "opacity-100" : "opacity-0"
								}`}
								priority={index === 0}
							/>
						))}
					</div>
				</div>

				{/* Right side - Auth forms */}
				<div className="w-full max-w-[350px] flex flex-col gap-4">
					<AuthForm />

					{/* Get the app */}
					{/* <div className="text-center space-y-4">
						<p className="text-sm text-gray-400">Get the app.</p>
						<div className="flex justify-center gap-4">
							<Link
								href="https://play.google.com/store"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src="/placeholder.svg?height=40&width=135"
									alt="Get it on Google Play"
									width={135}
									height={40}
									className="object-contain"
								/>
							</Link>
							<Link
								href="https://microsoft.com/store"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src="/placeholder.svg?height=40&width=135"
									alt="Get it from Microsoft"
									width={135}
									height={40}
									className="object-contain"
								/>
							</Link>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}
