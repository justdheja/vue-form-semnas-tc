import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: "AIzaSyDcTR29EE2_bZLBw7gcwz4w94wGsy7iyn4",
  authDomain: "semnas-tc.firebaseapp.com",
  databaseURL: "https://semnas-tc.firebaseio.com",
  projectId: "semnas-tc",
  storageBucket: "semnas-tc.appspot.com",
  messagingSenderId: "219633004098",
  appId: "1:219633004098:web:603cfa5cd55b2f3c01c7db",
  measurementId: "G-2BC2G9L7BN"
})

export const db = app.firestore();
export const pesertaCollection = db.collection('peserta');
