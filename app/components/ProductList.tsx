"use client";

import { useState } from "react";

const products = [
  { id: 1, name: "iPhone 14", category: "Electronics" },
  { id: 2, name: "MacBook Pro", category: "Electronics" },
  { id: 3, name: "Nike Shoes", category: "Fashion" },
  { id: 4, name: "T-Shirt", category: "Fashion" },
  { id: 5, name: "Coffee Mug", category: "Home" },
];

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-4">
      {/* Search + Filter */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500">No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// "use client";

// import { useState, useMemo } from "react";
// import { Product } from "@/types/product";
// import ProductCard from "./ProductCard";

// interface Props {
//   products: Product[];
// }

// export default function ProductList({ products }: Props) {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("all");

//   // 🔹 Get unique categories
//   const categories = useMemo(() => {
//     const uniqueCategories = Array.from(
//       new Set(products.map((product) => product.category))
//     );
//     return ["all", ...uniqueCategories];
//   }, [products]);

//   // 🔹 Filter products by search + category
//   const filteredProducts = useMemo(() => {
//     return products.filter((product) => {
//       const matchesSearch = product.title
//         .toLowerCase()
//         .includes(search.toLowerCase());

//       const matchesCategory =
//         category === "all" || product.category === category;

//       return matchesSearch && matchesCategory;
//     });
//   }, [products, search, category]);

//   return (
//     <>
//       {/* Search + Category Filter */}
//       <div className="flex flex-col sm:flex-row gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="flex-1 p-3 border rounded"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           className="p-3 border rounded"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           {categories.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat?.toUpperCase()}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </>
//   );
// }
