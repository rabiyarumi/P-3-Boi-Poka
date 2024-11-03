import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utitilities/addToDB";
import Book from "../Book/Book";
import { getStoredWishList } from "../../utitilities/addToWish";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState([]);

  const allBooks = useLoaderData();

  //added read list
  useEffect(() => {
    const storedReadList = getStoredReadList();
    //make the id number
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    //check if the book id has in database
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  //added wish list
  useEffect(() => {
    const storedWishList = getStoredWishList();

    const storedWishListInt = storedWishList.map((id) => parseInt(id));

    const wishBookList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );

    setWishList(wishBookList);
  }, []);



  //sort function
  const handleSort = sortType => {
    setSort(sortType)
    
    //sort read lost conditionally 
    if(sortType === 'Number og Pages'){
        const sortedReadList = [...readList].sort((a,b) => a.totalPages - b.totalPages);
        setReadList(sortedReadList);
    }
    if(sortType === 'Ratings'){
        const sortedReadList = [...readList].sort((a,b) => a.rating - b.rating);
        setReadList(sortedReadList);
    }


    //sorted wish list 
    if(sortType === 'Number og Pages'){
        const sortedWishList = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
        setWishList(sortedWishList);
    }
    if(sortType === 'Ratings'){
        const sortedWishList = [...wishList].sort((a, b) => a.rating - b.rating);
        setWishList(sortedWishList);
    }

  }



  return (
    <div className="container mx-auto my-20 space-y-9 text-center">
      <h1 className="text-4xl font-bold">Books</h1>
      
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-white">
            {
                sort ? `Sort by ${sort}` : 'Sort by'
            }
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => handleSort("Ratings")}>
              <a>Ratings</a>
            </li>
            <li onClick={() => handleSort("Number og Pages")}>
              <a>Number of Pages</a>
            </li>
          </ul>
        </div>
      

      <div className="container mx-auto">
        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish list</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-2xl font-bold">
              Books I Read: {readList.length}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {readList.map((book) => (
                <Book key={book.bookId} book={book}></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className="text-2xl font-bold">
              Books I wish to Read: {wishList.length}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {wishList.map((book) => (
                <Book key={book.bookId} book={book}></Book>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
