// type ProductCardProps = {
//   title: string;
//   price: number;
// };

// export default function ProductCard({ title, price }: ProductCardProps) {
//   return (
//     <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
//       <h2 className="text-xl font-semibold">{title}</h2>
//       <p className="text-gray-600 mt-2">₹ {price}</p>
//     </div>
//   );
// }

interface Props {
  product: {
    id: number;
    title: string;
    price: number;
    category: string;
  };
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-semibold text-lg">{product.title}</h3>
      <p className="text-sm text-gray-400">{product.category}</p>
      <p className="mt-2 font-bold">₹ {product.price}</p>
    </div>
  );
}
