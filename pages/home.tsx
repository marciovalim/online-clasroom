import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Page() {
  const [session, loading] = useSession();

  return (
    <>
      {loading && <div>Loading...</div>}
      {!session && (
        <>
          Not signed in <br />
          <button onClick={(): Promise<void> => signIn("auth0")}>
            Sign in
          </button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={(): Promise<void> => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
}
