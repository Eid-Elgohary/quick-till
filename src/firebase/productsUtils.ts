import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

export interface IProduct {
  product_id: number;
  product_name: string;
  price: number;
  cost: number;
  stock: number;
  category: string;
  img: string;
  barcode: string;
  created_at: any;
}

export interface IProductProps {
  productArr: IProduct[];
}

export async function getAllProducts(): Promise<IProduct[]> {
  const productsRef = collection(db, "products");
  const snapshot = await getDocs(productsRef);

  const products: IProduct[] = [];
  snapshot.forEach((doc) => {
    products.push(doc.data() as IProduct);
  });

  return products;
}

export async function makeOrder(data) {
  const ordersRef = collection(db, "orders");
  const productsRef = collection(db, "products");

  const orderData = {
    products: data.products,
    total_price: data.total_price,
    pay_method: data.pay_method,
    cashier_id: data.cashier_id,
    created_at: new Date().toISOString(),
  };

  try {
    const docRef = await addDoc(ordersRef, orderData);

    const updatePromises = data.products.map(async (item) => {
      // Find the product document by matching product_id
      const productsSnapshot = await getDocs(productsRef);
      let productDocId: string | null = null;
      productsSnapshot.forEach((productDoc) => {
        const data = productDoc.data();
        if (data.product_id === item.product_id) {
          productDocId = productDoc.id;
        }
      });

      if (!productDocId) {
        throw new Error(`Product with product_id ${item.product_id} not found`);
      }

      const productDocRef = doc(productsRef, productDocId);

      const productSnap = await getDoc(productDocRef);

      if (productSnap.exists()) {
        const currentData = productSnap.data();
        const newRemaining = (currentData.remaining_quantity || 0) - item.stock;

        if (newRemaining >= 0) {
          await updateDoc(productDocRef, {
            remaining_quantity: newRemaining,
          });
        } 
        else {
          throw new Error(
            `Product ${item.product_id} does not have enough stock`
          );
        }
      }
    });

    await Promise.all(updatePromises);

    console.log("Product quantities updated successfully");
  } catch (error) {
    console.error("Error processing order:", error);
  }
}

// export async function makeOrder(data) {
//   const ordersRef = collection(db, "orders");
//   const orderData = {
//     products: data.products,
//     total_price: data.total_price,
//     pay_method: data.pay_method,
//     cashier_id: data.cashier_id,
//     created_at: new Date().toISOString(),
//   };

//   try {
//     const docRef = await addDoc(ordersRef, orderData);
//     console.log("Order created with ID:", docRef.id);
//   } catch (error) {
//     console.error("Error creating order:", error);
//   }
// }

// export async function getProductsByCategory(
//   category: string
// ): Promise<IProduct[]> {
//   const productsRef = collection(db, "products");
//   const snapshot = await getDocs(productsRef);

//   const products: IProduct[] = [];
//   snapshot.forEach((doc) => {
//     const product = doc.data() as IProduct;
//     if (product.category === category) {
//       products.push(product);
//     }
//   });

//   return products;
// }
