import { doc, getDoc } from "firebase/firestore";
import { adminDb } from "../firebase/firebase";

export const getBlogs = async () => {
  const blogsDocRef = doc(adminDb, "pages", "portfolio", "fields", "blogs");
  const blogsDocSnap = await getDoc(blogsDocRef);

  if (blogsDocSnap.exists()) {
    const data = blogsDocSnap.data();
    return data.bloglar || [];
  } else {
    return [];
  }
};
