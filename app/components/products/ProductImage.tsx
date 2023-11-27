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
    <div className="gird grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product.images.map((image: SelectedImgType) => {
          return (
            <div
              key={image.colorCode}
              onClick={() => handleColorSelect(image)}
              className={`w-[80%] aspect-square rounded border-teal-300 relative ${
                cartProduct.slectedImg.colorCode === image.colorCode &&
                "border-2"
              }`}
            >
              <Image
                src={image.img}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImage;
