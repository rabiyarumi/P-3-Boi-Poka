import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100  shadow-xl rounded-xl">
        <figure className=" m-6 py-8 rounded-xl flex items-center justify-centers bg-[#F3F3F3]">
          <img src={image} alt="book" className=" h-60 " />
        </figure>
        <div className="card-body space-y-2">
          <div>
            {tags.map((tag, idx) => (
              <div 
              key={idx}
              className="badge text-[#23BE0A] bg-[#23BE0A] bg-opacity-5 mr-10">
                {tag}
              </div>
            ))}
          </div>

          <h1 className="text-2xl font-bold">{bookName}</h1>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed flex justify-between pt-3">
            <p className="">{category}</p>
            <div>
              <span>{rating}</span>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 h-4  bg-[#23BE0A] bg-opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
