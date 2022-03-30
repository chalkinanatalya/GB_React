import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoshj-b4iQYEH29-Q-DrBrhgmsKvx1Mvo",
  authDomain: "gb-1756-c55df.firebaseapp.com",
  projectId: "gb-1756-c55df",
  storageBucket: "gb-1756-c55df.appspot.com",
  messagingSenderId: "1093217887296",
  appId: "1:1093217887296:web:f4cbaf3d072aa3b91beba5",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const signUp = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(firebase);
export const userRef = ref(db, "user");
export const chatsRef = ref(db, "chats");
export const messagesRef = ref(db, "messages");

export const getChatListById = (id) => ref(db, `chats/${id}`);
export const getMessagesRefId = (chatId) => ref(db, `messages/${chatId}`);
export const getMessagesListRefId = (chatId, msgId) =>
  ref(db, `messages/${chatId}/messageList/${msgId}`);
