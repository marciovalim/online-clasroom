import { useSession } from "next-auth/client";
import React from "react";
import Nav from "../components/nav";
import UserProfileData from "../components/profile/user_profile";
import HttpUtils from "../utils/http_utils";

export default function Page() {
  const [session, loading] = useSession();

  return (
    <>
      <Nav />
      <h1>Profile page</h1>
      {session ? (
        <div className="m-4">
          <UserProfileData email={session.user.email} />
          <button className="mt-2" onClick={HttpUtils.signOut}>
            Sign out
          </button>
        </div>
      ) : (
        <button onClick={HttpUtils.signIn}>Sign in</button>
      )}
      {loading && <div>Loading...</div>}
    </>
  );
}
