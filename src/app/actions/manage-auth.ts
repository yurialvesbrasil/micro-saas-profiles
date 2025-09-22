"use server";

// Faz autenticação do lado do servidor

import { auth, signIn, signOut } from "../lib/auth";

export async function manageAuth() {
  const session = await auth();

  if (!session) {
    return await signIn("google", { redirectTo: "/criar" });
  }

  return await signOut({ redirectTo: "/" });
}