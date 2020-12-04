import * as nextauth from "next-auth/client";

export default class FrontendUtils {
  static async signIn(): Promise<void> {
    await nextauth.signIn("auth0");
  }

  static async signOut(): Promise<void> {
    await nextauth.signOut();
  }
}
