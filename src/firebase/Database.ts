import { DocumentSnapshot, Firestore, QuerySnapshot, addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import app from "./app";

export default class Database {
  private db: Firestore;

  constructor() {
    this.db = getFirestore(app);
  }

  async save(collectionName: string, data: Object, pathSegments: string[] = []) {
    try {
      const docRef = doc(this.db, collectionName, ...pathSegments);
      const result = await setDoc(docRef, data, {merge: true});

      return result;
    } catch(e) {
      console.error("Error adding document: ", e);
    }
  }

  async fetch(collectionName: string, pathSegments: string[] = []) {
    const docRef = doc(this.db, collectionName, ...pathSegments);
    const docs: DocumentSnapshot = await getDoc(docRef);

    return docs.data();
  }
}