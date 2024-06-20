


const Product = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow-md hover:shadow-xl hover:scale-[1.03] transition duration-[.3s] rounded-lg cursor-pointer">
      <img src={product?.image} alt={product?.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{product?.name}</h2>
      <p className="text-gray-600">Rs {product?.price}</p>
    </div>
  );
};

export default Product;