import React from 'react';
import BookType from '../../../interfaces/BookType';
import Book from '../../Book/Book';
import "./SearchResults.css"

const SearchResults = ({
  myBooks,
  searchBooks,
  onMove,
}: {
  myBooks: BookType[];
  searchBooks: BookType[];
  onMove: Function;
}) => {
  const updatedBooks = searchBooks.map(book => {
    myBooks.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map(book => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : 'none'}
            onMove={onMove}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
