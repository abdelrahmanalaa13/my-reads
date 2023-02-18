import React from 'react';
import BookType from '../../../interfaces/BookType';
import Book from '../../Book/Book';
import "./Bookshelf.css"

const Bookshelf = ({
  books,
  shelf,
  onMove,
}: {
  books: BookType[];
  shelf: any;
  onMove: Function;
}) => {
  const booksOnThisShelf = books.filter(book => book.shelf === shelf.key);
  // console.log('booksOnThisShelf', booksOnThisShelf);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnThisShelf.map(book => (
            <Book key={book.id} book={book} shelf={shelf.key} onMove={onMove} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
