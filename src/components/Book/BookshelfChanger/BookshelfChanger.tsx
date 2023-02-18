import React, { useState } from "react";
import BookType from "../../../interfaces/BookType";
import "./BookshelfChanger.css";

const BookshelfChanger = ({
  book,
  shelf,
  onMove,
}: {
  book: BookType;
  shelf: any;
  onMove: Function;
}) => {
  const [value, setValue] = useState(shelf);

  const handleChange = (event: any) => {
    const value = event.target.value;
    setValue(value);
    onMove(book, value);
  };
  return (
    <div className="book-shelf-changer">
      <select value={value} onChange={handleChange}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookshelfChanger;