import React, { useState } from "react";
import "./SearchBooksInput.css";

const SearchBooksInput = ({onSearch}: {onSearch: Function}) => {
  const [value, setValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setValue(val);
    onSearch(val);
  };

  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        value={value}
        placeholder="Search by title or author"
        onChange={handleChange}
        autoFocus
      />
    </div>
  );
};

export default SearchBooksInput;
