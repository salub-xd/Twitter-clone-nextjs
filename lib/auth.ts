import { auth } from "@/auth";

export const currentUser = async () => {
  const session = await auth();
  if (session !== null) {
    const userId = session.user;
  }
  return { username: '', isOAuth: false };
};
