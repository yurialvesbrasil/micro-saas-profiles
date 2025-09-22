import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import "server-only";

// Normaliza e valida variáveis de ambiente do Firebase Admin
function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value || value.trim().length === 0) {
    throw new Error(`Env ausente: ${name}. Verifique seu .env.local`);
  }
  return value;
}

function sanitizePrivateKey(rawKey: string): string {
  const normalized = rawKey
    .replace(/\\n/g, "\n")
    .replace(/\r\n/g, "\n");
  if (!normalized.includes("BEGIN PRIVATE KEY") || !normalized.includes("END PRIVATE KEY")) {
    throw new Error(
      "FIREBASE_PRIVATE_KEY com formato inválido. Mantenha as quebras como \\n no .env (aspas ajudam)."
    );
  }
  return normalized;
}

const FIREBASE_PROJECT_ID = getRequiredEnv("FIREBASE_PROJECT_ID");
const FIREBASE_CLIENT_EMAIL = getRequiredEnv("FIREBASE_CLIENT_EMAIL");
const FIREBASE_PRIVATE_KEY = sanitizePrivateKey(getRequiredEnv("FIREBASE_PRIVATE_KEY"));
const FIREBASE_STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET;

// Certificado
export const firebaseCert = cert({
  projectId: FIREBASE_PROJECT_ID,
  clientEmail: FIREBASE_CLIENT_EMAIL,
  privateKey: FIREBASE_PRIVATE_KEY,
});

// Instancia do app
if (!getApps().length) {
  initializeApp({
    credential: firebaseCert,
    storageBucket: FIREBASE_STORAGE_BUCKET,
  });
}

export const db = getFirestore();

export const storage = getStorage().bucket();

export async function getDownloadURLFromPath(path?: string) {
  if (!path) return;

  const file = storage.file(path);

  const [url] = await file.getSignedUrl({
    action: "read",
    expires: "03-01-2500", // Não deixa expirar
  });

  return url;
}