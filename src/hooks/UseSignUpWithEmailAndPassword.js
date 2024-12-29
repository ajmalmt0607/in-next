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

const UseSignUpWithEmailAndPassword = () => {
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	const loginUser = useAuthStore((state) => state.login);

	const signup = async (inputs) => {
		if (
			!inputs.email ||
			!inputs.password ||
			!inputs.username ||
			!inputs.fullName
		) {
			toast.error("Error", "please fill all the fields", "error");
			return;
		}

		//johndoe@gmail.com
		const usersRef = collection(firestore, "users");

		const q = query(usersRef, where("username", "==", inputs.username));
		const querySnapshot = await getDocs(q);

		if (!querySnapshot.empty) {
			toast.error("Error", "Username already exists", "error");
			return;
		}

		try {
			const newUser = await createUserWithEmailAndPassword(
				inputs.email,
				inputs.password
			);
			if (!newUser && error) {
				toast.error("Error", error.message, "error");
				return;
			}
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
				loginUser(userDoc);
			}
		} catch (error) {
			toast.error("Error", error.message, "error");
		}
	};

	return { loading, error, signup };
};

export default UseSignUpWithEmailAndPassword;
