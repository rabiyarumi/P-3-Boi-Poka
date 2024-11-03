import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();

  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  console.log(book);

  console.log(data);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2">
          <div className=" py-16 px-16 rounded-lg bg-[#131313] bg-opacity-5">
            <img src={book.image} className=" rounded-lg h-96 mx-auto" />
          </div>
        </div>
        <div className="space-y-3 lg:w-1/2">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="">By: {author}</p>
          <hr />
          <p>{category}</p>
          <hr />
          <p>
            <span className="font-bold">Review:</span>
            {review}{" "}
          </p>
          <hr />
          <div className="flex ">
            <div className="opacity-60 w-1/3">Number of Pages:</div>
            <div className=" font-bold text-left  w-2/3">{totalPages}</div>
          </div>
          <div className="flex ">
            <div className="opacity-60 w-1/3">Publisher:</div>
            <div className=" font-bold text-left  w-2/3">{publisher}</div>
          </div>
          <div className="flex ">
            <div className="opacity-60 w-1/3">Year of Publishing:</div>
            <div className=" font-bold text-left  w-2/3">
              {yearOfPublishing}
            </div>
          </div>
          <div className="flex ">
            <div className="opacity-60 w-1/3">Rating:</div>
            <div className=" font-bold text-left  w-2/3">{rating}</div>
          </div>
          <button className="btn  border-gray-300 font-bold mr-5">Mark as Read</button>
          <button className="btn bg-[#50B1C9] text-white font-bold">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
