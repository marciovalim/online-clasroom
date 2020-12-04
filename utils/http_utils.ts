import * as nextauth from "next-auth/client";

export default class HttpUtils {
  static async signIn(): Promise<void> {
    await nextauth.signIn("auth0");
  }

  static async signOut(): Promise<void> {
    await nextauth.signOut();
  }
}
