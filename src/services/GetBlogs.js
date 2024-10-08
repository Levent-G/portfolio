import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase"; // Firebase config dosyanızı ekleyin

export const getBlogs = async () => {
  const blogCollection = collection(db, "blogs"); // blogs, Firestore'da koleksiyon adınız
  const blogSnapshot = await getDocs(blogCollection);
  const blogList = blogSnapshot.docs.map(doc => doc.data());
  return blogList;
};
