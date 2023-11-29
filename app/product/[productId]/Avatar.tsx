"use client";
import Image from "next/image";
import { FaHouseFloodWaterCircleArrowRight } from "react-icons/fa6";

interface ProductCardProps {
  src?: string | null | undefined;
}
const Avatar: React.FC<ProductCardProps> = ({ src }) => {
  if (src) {
    return (
      <Image
        src={src}
        alt="avatar"
        fill
        className="rounded-full"
        height={30}
        width={30}
      />
    );
  }
  return <FaHouseFloodWaterCircleArrowRight size={24} />;
};

export default Avatar;
