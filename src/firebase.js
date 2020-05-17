import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
})

export const db = app.firestore();
export const pesertaCollection = db.collection('peserta');
