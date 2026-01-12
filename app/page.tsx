import ProductList from "./components/ProductList";

const products = [
  { id: 1, title: "iPhone 15", price: 79999, category: "mobile" },
  { id: 2, title: "MacBook Air", price: 114999, category: "laptop" },
  { id: 3, title: "AirPods Pro", price: 24999, category: "accessory" },
];

// const products = [
//   { id: 1, title: "iPhone 15", price: 79999 },
//   { id: 2, title: "MacBook Air", price: 114999 },
//   { id: 3, title: "AirPods Pro", price: 24999 },
// ];

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">Product Explorer App 🚀</h1>

      <ProductList products={products} />
    </main>
  );
}

// import { getProducts } from "./lib/api";
// import ProductList from "./components/ProductList";

// export default async function Home() {
//   const products = await getProducts();

//   return (
//     <main className="min-h-screen p-10">
//       <h1 className="text-3xl font-bold mb-6">Product Explorer App 🚀</h1>

//       <ProductList products={products} />
//     </main>
//   );
// }
