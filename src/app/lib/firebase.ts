// lib/firebase.ts
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import "server-only";

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

// Inicializa apenas se não existir
const app =
  (!getApps().length) ?
  initializeApp({
    credential: cert(firebaseConfig),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
}) : getApps()[0];

export const db = getFirestore(app);
export const storage = getStorage(app).bucket();
