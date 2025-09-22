import NextAuth from "next-auth"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app"
 import Google from "next-auth/providers/google";

const privateKey = process.env.FIREBASE_PRIVATE_KEY
  ? Buffer.from(process.env.FIREBASE_PRIVATE_KEY, "base64").toString("utf-8")
  : undefined;

if (!privateKey) {
  throw new Error("FIREBASE_PRIVATE_KEY não definida ou inválida.");
}

const firebaseConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: privateKey,
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  adapter: FirestoreAdapter({
    credential: cert(firebaseConfig),
  }),
})