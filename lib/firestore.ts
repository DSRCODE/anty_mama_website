import {
  collection,
  getDocs,
  query,
  orderBy,
  getDoc,
  doc,
  where,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

export const getProducts = async () => {
  const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      name: data.name ?? "",
      image: data.image ?? "",
      categoryId: data.categoryId ?? "",
      categoryName: data.categoryName ?? "",
      price: data.price ?? null,
      description: data.description ?? "",
      variants: data.variants ?? [],
      createdAt: data.createdAt?.toMillis?.() ?? null,
    };
  });
};

export const getProductById = async (id: string) => {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  const data = snap.data();

  return {
    id: snap.id,
    name: data.name ?? "",
    image: data.image ?? "",
    categoryId: data.categoryId ?? "",
    categoryName: data.categoryName ?? "",
    price: data.price ?? null,
    description: data.description ?? "",
    variants: (data.variants ?? []).map((v: any) => ({
      name: v.name ?? "",
      description: v.description ?? "",
      price: v.price ?? null,
    })),
    createdAt: data.createdAt?.toMillis?.() ?? null,
  };
};

export const getCategories = async () => {
  const snapshot = await getDocs(collection(db, "categories"));
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      createdAt: data.createdAt,
      image: data.image || "",
      status: data.status || true,
    };
  });
};

export const getCMSContentBySlug = async (slug: string) => {
  const q = query(collection(db, "cms"), where("slug", "==", slug));
  const snapshot = await getDocs(q);

  if (snapshot.empty) return null;

  const docData = snapshot.docs[0].data();
  return {
    id: snapshot.docs[0].id,
    content: docData.content || "",
    slug: docData.slug || "",
    updatedAt: docData.updatedAt?.toDate?.() || null,
  };
};

export const submitEnquiry = async (data: any) => {
  return await addDoc(collection(db, "enquiries"), {
    ...data,
    createdAt: Timestamp.now(),
  });
};
