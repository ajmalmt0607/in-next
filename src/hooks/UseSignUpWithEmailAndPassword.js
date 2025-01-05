import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import {
	collection,
	doc,
	getDocs,
	query,
	setDoc,
	where,
} from "firebase/firestore";
import useAuthStore from "../store/authStore";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const UseSignUpWithEmailAndPassword = () => {
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	const loginUser = useAuthStore((state) => state.login);

	const router = useRouter();

	const signup = async (inputs) => {
		if (
			!inputs.email ||
			!inputs.password ||
			!inputs.username ||
			!inputs.fullName
		) {
			toast.error("Please fill in all fields.");
			return;
		}

		const usersRef = collection(firestore, "users");
		const q = query(usersRef, where("username", "==", inputs.username));
		const querySnapshot = await getDocs(q);

		if (!querySnapshot.empty) {
			toast.error("Username already exists.");
			return;
		}

		try {
			const newUser = await createUserWithEmailAndPassword(
				inputs.email,
				inputs.password
			);
			if (newUser) {
				const userDoc = {
					uid: newUser.user.uid,
					email: inputs.email,
					username: inputs.username,
					fullName: inputs.fullName,
					bio: "",
					profilePicURL: "",
					followers: [],
					following: [],
					posts: [],
					createdAt: Date.now(),
				};
				await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
				localStorage.setItem("user-info", JSON.stringify(userDoc));
				router.push("/");
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	return { loading, error, signup };
};

export default UseSignUpWithEmailAndPassword;
