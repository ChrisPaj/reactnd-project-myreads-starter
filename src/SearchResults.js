

import React from "react";
import "./App.css";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="search-books-results">
          <ol className="books-grid" />
		  <li>{this.props.result.title}</li>
		  <li>{this.props.result.author}</li>
        </div>
    );
  }
}

export default SearchResults;