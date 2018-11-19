

import React from "react";
import "./App.css";

class SearchResults extends React.Component {
  render() {
	const { book } = this.props;
    return (
      <div className="search-books-results">
          <ol className="books-grid" />
		  <li>{book.title}</li>
		  <li>{book.authors}</li>
        </div>
    );
  }
}

export default SearchResults;

SearchResults.propTypes = {
  changeBookShelf: PropTypes.func.isRequired,
  booksWithShelf: PropTypes.array.isRequired
}