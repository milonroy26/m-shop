"use client";

import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { Rating } from "@mui/material";
import { type } from "os";
import { useCallback, useState } from "react";

interface ProductCardProps {
  product: any;
}
export type CartProductType = {
  id: string;
  name: string;
  discription: string;
  category: string;
  brand: string;
  slectedImg: SelectedImgType;
  quantity: number;
  price: number;
};
export type SelectedImgType = {
  color: string;
  colorCode: string;
  img: string;
};
const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};
const ProductDetails: React.FC<ProductCardProps> = ({ product }) => {
  // set a product in cart state for set color and quantity in cart page
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    discription: product.description,
    category: product.category,
    brand: product.brand,
    slectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  // rating
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return {
          ...prev,
          slectedImg: value,
        };
      });
    },
    [cartProduct.slectedImg]
  );

  // handleQtyIncrease
  const handleQtyIncrease = useCallback(() => {
    setCartProduct((prev) => {
      return {
        ...prev,
        quantity: prev.quantity + 1,
      };
    });
  }, [cartProduct.quantity]);
  // handleQtyDecrease
  const handleQtyDecrease = useCallback(() => {
    setCartProduct((prev) => {
      return {
        ...prev,
        quantity: prev.quantity - 1,
      };
    });
  }, [cartProduct.quantity]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>iamge</div>
      <div>
        <h2 className="text-slate-700 text-3xl font-medium">{product.name} </h2>
        <div className="flex items-center gap-2">
          <Rating name="read-only" readOnly value={productRating} />
          <div> {product.reviews.length} reviews </div>
        </div>
        <div className="text-justify">
          <p> {product.description} </p>
        </div>
        <Horizontal />
        <div>
          <span className="font-bold">VATEGORY:</span>
          <span> {product.category}</span>
        </div>
        <div>
          <span className="font-bold">BRAND:</span>
          <span> {product.brand}</span>
        </div>
        <div className={product.inStock ? "text-green-500" : "text-red-500"}>
          {product.inStock ? "in stock" : "out of stock"}
        </div>
        <Horizontal />
        <SetColor
          images={product.images}
          cartProduct={cartProduct}
          handleColorSelect={handleColorSelect}
        />
        <Horizontal />
        <SetQuantity
          cartCountetr
          cartProduct={cartProduct}
          handleQtyIncrease={handleQtyIncrease}
          handleQtyDecrease={handleQtyDecrease}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
