"use client";

import {
  CartProductType,
  SelectedImgType,
} from "@/app/product/[productId]/ProductDetails";
import { product } from "@/utils/product";
import Image from "next/image";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: SelectedImgType) => void;
}
const ProductImage: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleColorSelect,
}) => {
  return (
    <div className="flex gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex w-[20%] flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px] ">
        {product.images.map((image: SelectedImgType) => {
          return (
            <div
              key={image.color}
              onClick={() => handleColorSelect(image)}
              className={`relative w-[80%] aspect-square rounded border-teal-300  ${
                cartProduct.slectedImg.color === image.color
                  ? "border-2"
                  : "border-none"
              }`}
            >
              <Image
                src={image.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>

      <div className="relative aspect-square w-[80%]">
        <Image
          src={cartProduct.slectedImg.image}
          alt={product.name}
          fill
          className="w-full h-full object-contain
          max-h-[500px] min-h-[300px]
          sm:min-h-[400px]"
        />
      </div>
    </div>
  );
};

export default ProductImage;
