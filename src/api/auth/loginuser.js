import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../../config/firebase";

export const loginUser = async ({ username, password }) => {
  let email = "";
  let res = "";

  const queryRef = query(
    collection(db, "Users"),
    where("username", "==", username)
  );

  const querySnapshot = await getDocs(queryRef);

  if (querySnapshot.empty) {
    return { error: "Username not found" };
  }

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    email = data.email;
  });

  if (email) {
    res = await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Success");
        return { message: "Success" };
      })
      .catch((error) => {
        console.log("Not Success");
        return { message: error.message };
      });
  }

  return res;
};
