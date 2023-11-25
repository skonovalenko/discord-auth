import AuthenticatedUser from "@/components/AuthenticatedUser";
import UnauthenticatedUser from "@/components/UnauthenticatedUser";
import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;

  const handleSignOut = () => {
    signOut();
  };

  const handleSignIn = () => {
    signIn("discord");
  };
  return isAuthenticated ? (
    <AuthenticatedUser session={session} onClick={handleSignOut} />
  ) : (
    <UnauthenticatedUser onClick={handleSignIn} />
  );
};

export default Home;
