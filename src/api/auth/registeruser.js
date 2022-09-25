import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  setDoc,
  serverTimestamp,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { auth, db } from "../../config/firebase";

export const createUser = async ({ email, username, password }) => {
  const queryRef = query(
    collection(db, "Users"),
    where("username", "==", username)
  );

  const querySnapshot = await getDocs(queryRef);

  if (!querySnapshot.empty) {
    return { message: "Username not available" };
  }

  const res = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setDoc(doc(db, "Users", user.uid), {
        email,
        username,
        createdAt: serverTimestamp(),
      });
    })
    .catch((error) => {
      return { message: error.message };
    });

  return res;
};
