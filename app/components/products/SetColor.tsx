"use client";

import {
  CartProductType,
  SelectedImgType,
} from "@/app/product/[productId]/ProductDetails";

interface SetColorProps {
  images: SelectedImgType[];
  cartProduct: CartProductType;
  handleColorSelect: (value: SelectedImgType) => void;
}
const SetColor: React.FC<SetColorProps> = ({
  images,
  cartProduct,
  handleColorSelect,
}) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <span className="font-semibold">COLOR:</span>
        <div className="flex gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleColorSelect(image)}
              className={`w-7 h-7 rounded-full border-teal-300 items-center justify-center flex ${
                cartProduct.slectedImg.colorCode === image.colorCode
                  ? "border-2"
                  : ""
              }`}
            >
              <div
                className="w-5 h-5 rounded-full border-2 border-slate-300 cursor-pointer"
                style={{ backgroundColor: image.colorCode }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SetColor;
