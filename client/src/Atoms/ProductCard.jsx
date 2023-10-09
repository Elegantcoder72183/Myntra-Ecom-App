    import React from "react";
    import { useDispatch } from "react-redux";
    import { addToWishlist } from "../Components/redux/wishlistSlice";
    import toast from "react-hot-toast";

    const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToWishlist = (product) => {
        dispatch(addToWishlist(product));
        toast.success('Product added to wislist')  
    };


    return (
        <div className="bg-stone-50 rounded-lg shadow-md sm:w-64 sm:p-4 m-4">
        <img
            src={`/api/v1/product/product-photo/${product._id}`}
            alt={product.name}
            className=" sm:h-80 object-cover rounded-lg"
        />
        <h2 className="text-xs sm:text-xs uppercase font-semibold mt-2">{product.name}</h2>
        <p className="text-gray-700 text-xs sm:text-xs">{product.description}</p>
        <div className="mt-2 flex justify-between items-center">
            <span className="text-xs  sm:text-lg font-bold text-pink-600">Rs. {product.price}</span>
            <button
            onClick={() => handleAddToWishlist(product)}
            className=" text-black text-xs sm:text-sm px-2 py-1 mb-1 sm:py-2 sm:px-4  border-pink-600 border-2 rounded-full text-center "
            >
            Add to WishList
            </button>
        </div>
        </div>
    );
    };

    export default ProductCard;
