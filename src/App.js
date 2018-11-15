import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Link, Route } from "react-router-dom";
import BookShelf from "./BookShelf";
import SearchBar from "./SearchBar";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    allBooks: [],
    searchBooks: [],
    read: [],
    wantToRead: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then(allBooks => this.setState({ allBooks }));
  }

  /*   searchBooks = string => {
    BooksAPI.search(string).then(result =>
      this.setState({ searchbooks: result })
    );
  };
 */
  render() {
    // const ShowAllBooks = [{title: 'Fly Me to the Moon', author:'Steven Black'}, {title: 'Fly Me to the Sun', author:'Steven White'}]

    return (
      <div className="app">
        <Route path="/search" component={SearchBar} />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf
                    bookList={this.state.allBooks}
                    shelfTitle={"Currently Reading"}
                  />
                  <BookShelf
                    bookList={this.state.wantToRead}
                    shelfTitle={"Want to Read"}
                  />
                  <BookShelf bookList={this.state.read} sortOfShelf={"Read"} />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;