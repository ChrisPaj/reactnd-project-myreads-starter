import React from "react";
import "./App.css";
import SearchResults from "./SearchResults";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
    searchBooksResults: [
      { title: "Fly Me to the Moon", author: "Steven Black" },
      { title: "Fly Me to the Sun", author: "Steven White" }
    ]
  };

  adaptSearchTerm = event => {
    this.setState({ searchTerm: event.target.value });
  };

  /* ComponentDidUpdate(){
  searchBooks = string => {
    BooksAPI.search(string).then(result =>
      this.setState({ searchBooksResults: result })
    );
  };
} */

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a
            className="close-search"
            onClick={() => this.setState({ showSearchPage: false })}
          >
            Close
          </a>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              name="searchbar"
              onChange={this.adaptSearchTerm}
            />
          </div>
        </div>
        {this.state.searchBooksResults.map((result, index) => {
          return <SearchResults key={index} result={result} />;
        })}
      </div>
    );
  }
}

export default SearchBar;
