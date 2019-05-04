import React from "react";
import PropTypes from 'prop-types'
import "./App.css";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchBooksResults: []
    };
  }

  adaptSearchTerm = event => {
    this.setState({ searchTerm: event.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
  
    if (this.state.searchTerm !== prevState.searchTerm) {
      if (this.state.searchTerm === "") {
        this.setState({ searchBooksResults: []})
        return
      }
      //console.log("New search term: " + this.state.searchTerm);
      BooksAPI.search(this.state.searchTerm).then((result) => {
        console.log("result.length vor: " + result.length)
        console.log(JSON.stringify(result))
        result.length > 0 ? this.setState({ searchBooksResults: result }) : this.setState({ searchBooksResults: [] })
        console.log("searchBooksResults: " + JSON.stringify(this.state.searchBooksResults));
        console.log("result.length nach: " + result.length)
      }).catch((err) => {
        console.log("Fehler gefunden!", err)
        //this.setState({ searchBooksResults: []})
      });     
    }   
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
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
          shelfTitle={"Search Books"}
          changeBookShelf={this.props.changeBookShelf}
          booksWithShelf={this.props.booksWithShelf}
        />
      </div>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  changeBookShelf: PropTypes.func.isRequired,
  booksWithShelf: PropTypes.array.isRequired
}

