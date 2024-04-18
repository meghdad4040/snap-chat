"use server";

import { signIn, signOut } from "@/auth";

export const authAction = async () => {
	try {
		await signIn("github");
	} catch (error: any) {
		if (error.message === "NEXT_REDIRECT") {
			throw error;
		}
		return error.message;
	}
};

export const logoutAction = async () => {
	"use server";
	await signOut();
};
