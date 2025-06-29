"use server";

import { db } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

import data from "@/data/fake_pos_data.json";

export async function uploadAllFakeData() {
  try {
    for (const product of data.products) {
      await setDoc(doc(db, "products", product.product_id.toString()), product);
    }

    for (const item of data.inventory) {
      await setDoc(doc(db, "inventory", item.product_id.toString()), item);
    }

    for (const category of data.categories) {
      await setDoc(doc(db, "categories", category.id), category);
    }

    return { success: true, message: "تم رفع البيانات بنجاح" };
  } catch (error) {
    console.error("رفع البيانات فشل:", error);
    return { success: false, message: "حدث خطأ أثناء رفع البيانات" };
  }
}
