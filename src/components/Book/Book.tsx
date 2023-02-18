import BookType from "../../interfaces/BookType";
import BookshelfChanger from "./BookshelfChanger/BookshelfChanger";
import "./Book.css"

const Book = ({
  book,
  shelf,
  onMove,
}: {
  book: BookType;
  shelf: any;
  onMove: Function;
}) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks
                ? book.imageLinks.thumbnail
                : "icons/book-placeholder.svg"
            })`,
          }}
        />
        <BookshelfChanger book={book} shelf={shelf} onMove={onMove} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? book.authors.join(", ") : "Unknown Author"}
      </div>
    </div>
  </li>
);

export default Book;
