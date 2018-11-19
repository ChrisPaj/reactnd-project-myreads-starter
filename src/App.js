import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Link, Route } from "react-router-dom";
import BookShelf from "./BookShelf";
import SearchBar from "./SearchBar";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    allBooks: []
  };

  componentDidMount() {
    //console.log("BooksApp: ComponentDidMount");
    BooksAPI.getAll().then(allBooks => this.setState({ allBooks }));
  }

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((response) => {
      BooksAPI.getAll().then(allBooks => {
        this.setState({ allBooks });
        //console.log("BooksApp: setState allBooks");
      })
    });
  };

  render() {
    const currentlyReading = this.state.allBooks.filter(
      book => book.shelf === "currentlyReading"
    );
    const read = this.state.allBooks.filter(book => book.shelf === "read");
    //console.log("read: " + JSON.stringify(read))
    const wantToRead = this.state.allBooks.filter(
      book => book.shelf === "wantToRead"
    );
    const allBooks = this.state.allBooks;
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <SearchBar
              changeBookShelf={(book, shelf) =>
                this.changeBookShelf(book, shelf)
              }
              booksWithShelf={allBooks}
            />
          )}
        />
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
                    bookList={currentlyReading}
                    shelfTitle={"Currently Reading"}
                    changeBookShelf={(book, shelf) =>
                      this.changeBookShelf(book, shelf)
                    }
                    booksWithShelf={allBooks}
                  />
                  <BookShelf
                    bookList={wantToRead}
                    shelfTitle={"Want to Read"}
                    changeBookShelf={(book, shelf) =>
                      this.changeBookShelf(book, shelf)
                    }
                    booksWithShelf={allBooks}
                  />
                  <BookShelf
                    bookList={read}
                    shelfTitle={"Read"}
                    changeBookShelf={(book, shelf) =>
                      this.changeBookShelf(book, shelf)
                    }
                    booksWithShelf={allBooks}
                  />
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
