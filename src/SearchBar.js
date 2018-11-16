import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
    searchBooksResults: [] /* [
      { title: "Fly Me to the Moon", author: "Steven Black" },
      { title: "Fly Me to the Sun", author: "Steven White" }
    ] */
  };

  adaptSearchTerm = event => {
    this.setState({ searchTerm: event.target.value });
  };

  /*   searchBooks = () => {
    BooksAPI.search(this.state.searchTerm)
      .then(result => this.setState({ searchBooksResults: result }));
  } */

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchTerm !== prevState.searchTerm) {
      console.log("New search term: " + this.state.searchTerm);
      BooksAPI.search(this.state.searchTerm).then(result =>
        this.setState({ searchBooksResults: result })
      );
      console.log(JSON.stringify(this.state.searchBooksResults));
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/"className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              name="searchbar"
              onChange={this.adaptSearchTerm}
            />
          </div>
        </div>
        <BookShelf
          bookList={this.state.searchBooksResults}
          sortOfShelf={"Search Books"}
          changeBookShelf={this.props.changeBookShelf}
        />
      </div>
    );
  }
}

export default SearchBar;
