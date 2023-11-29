"use client";
import moment from "moment";

import Heading from "@/app/components/Heading";
import { Avatar, Rating } from "@mui/material";

interface ListRatingProps {
  product: any;
}
const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div>
      <Heading title="Product Review" />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id} className="max-w-[300px] mb-1">
                <div className="flex gap-2 items-center">
                  <Avatar src={review?.user?.image} />
                  <div className="font-semibold">{review?.user.name}</div>
                  <div className="font-light">
                    {moment(review?.createdDate).fromNow()}
                  </div>
                </div>
                <div className="mt-2">
                  <Rating name="read-only" readOnly value={review.rating} />
                </div>
                <div className="ml-2">{review.comment}</div>
                <hr className="mt-3 mb-3" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListRating;
