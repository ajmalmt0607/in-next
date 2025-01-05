// import React, { useState } from "react";
// import {
// 	AiFillEye as ViewIcon,
// 	AiFillEyeInvisible as ViewOffIcon,
// } from "react-icons/ai";
// import { MdError } from "react-icons/md";
// import UseSignUpWithEmailAndPassword from "../../hooks/UseSignUpWithEmailAndPassword";

// const Signup = () => {
// 	const [inputs, setInputs] = useState({
// 		fullName: "",
// 		username: "",
// 		email: "",
// 		password: "",
// 	});
// 	const [showPassword, setShowPassword] = useState(false);
// 	const { loading, error, signup } = UseSignUpWithEmailAndPassword();

// 	return (
// 		<>
// 			<input
// 				type="email"
// 				placeholder="Email"
// 				className="w-full p-2 mb-4 border border-gray-300 rounded-sm text-sm"
// 				value={inputs.email}
// 				onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
// 			/>
// 			<input
// 				type="text"
// 				placeholder="Username"
// 				className="w-full p-2 mb-4 border border-gray-300 rounded-sm text-sm"
// 				value={inputs.username}
// 				onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
// 			/>
// 			<input
// 				type="text"
// 				placeholder="Full Name"
// 				className="w-full p-2 mb-4 border border-gray-300 rounded-sm text-sm"
// 				value={inputs.fullName}
// 				onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
// 			/>
// 			<div className="relative mb-4">
// 				<input
// 					type={showPassword ? "text" : "password"}
// 					placeholder="Password"
// 					className="w-full p-2 border border-gray-300 rounded-sm text-sm"
// 					value={inputs.password}
// 					onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
// 				/>
// 				<button
// 					type="button"
// 					className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
// 					onClick={() => setShowPassword(!showPassword)}
// 				>
// 					{showPassword ? <ViewIcon /> : <ViewOffIcon />}
// 				</button>
// 			</div>

// 			{error && (
// 				<div className="flex items-center bg-red-500 text-white p-2 mb-4 rounded-sm">
// 					<MdError className="text-lg mr-2" />
// 					<span className="text-xs">{error.message}</span>
// 				</div>
// 			)}

// 			<button
// 				onClick={() => signup(inputs)}
// 				disabled={loading}
// 				className={`w-full p-2 text-sm text-white bg-blue-500 rounded-sm ${
// 					loading ? "opacity-50" : "hover:bg-blue-600"
// 				}`}
// 			>
// 				{loading ? "Signing up..." : "Sign Up"}
// 			</button>
// 		</>
// 	);
// };

// export default Signup;

"use client";

import { useState } from "react";
import UseSignUpWithEmailAndPassword from "../../hooks/UseSignUpWithEmailAndPassword";
import { LoaderCircle } from "lucide-react";

const Signup = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const { loading, error, signup } = UseSignUpWithEmailAndPassword();

	const handleSignup = () => {
		signup(inputs);
	};

	return (
		<div className="space-y-4">
			<input
				type="email"
				placeholder="Email"
				className="w-full px-4 py-3 bg-[#121212] border border-gray-800 rounded-lg text-sm focus:outline-none focus:border-gray-600"
				value={inputs.email}
				onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
			/>
			<input
				type="text"
				placeholder="Username"
				className="w-full px-4 py-3 bg-[#121212] border border-gray-800 rounded-lg text-sm focus:outline-none focus:border-gray-600"
				value={inputs.username}
				onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
			/>
			<input
				type="text"
				placeholder="Full Name"
				className="w-full px-4 py-3 bg-[#121212] border border-gray-800 rounded-lg text-sm focus:outline-none focus:border-gray-600"
				value={inputs.fullName}
				onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
			/>
			<div className="relative">
				<input
					type={showPassword ? "text" : "password"}
					placeholder="Password"
					className="w-full px-4 py-3 bg-[#121212] border border-gray-800 rounded-lg text-sm focus:outline-none focus:border-gray-600"
					value={inputs.password}
					onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
				/>
				<button
					type="button"
					className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
					onClick={() => setShowPassword(!showPassword)}
				>
					{showPassword ? (
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
							/>
						</svg>
					) : (
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
							/>
						</svg>
					)}
				</button>
			</div>

			{error && (
				<div className="flex items-center bg-red-900/50 text-red-200 p-3 rounded-lg text-sm">
					<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
						<path
							fillRule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
							clipRule="evenodd"
						/>
					</svg>
					<span>{error.message}</span>
				</div>
			)}

			<button
				onClick={handleSignup}
				disabled={loading}
				className="w-full bg-[#0095F6] text-white rounded-lg py-3 text-sm font-semibold hover:bg-[#1877F2] transition duration-200 disabled:opacity-50"
			>
				{loading ? <LoaderCircle className="animate-spin" /> : "Sign up"}
			</button>

			<p className="text-xs text-gray-400 text-center">
				By signing up, you agree to our Terms, Privacy Policy and Cookies
				Policy.
			</p>
		</div>
	);
};

export default Signup;
