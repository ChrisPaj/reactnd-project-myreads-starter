import React from "react";
import PropTypes from 'prop-types'
import "./App.css";
import Book from "./Book";

class BookShelf extends React.Component {
  componentDidMount() {
    //console.log("BookShelf: ComponentDidMount");
  }
  render() {
    const { bookList, shelfTitle, booksWithShelf } = this.props;
    //console.log(bookList);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookList.map((book, index) => {
              return (
                <Book
                  key={index}
                  book={book}
                  booksWithShelf={booksWithShelf}
                  changeBookShelf={this.props.changeBookShelf}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;

BookShelf.propTypes = {
  changeBookShelf: PropTypes.func.isRequired,
  bookList: PropTypes.array.isRequired,
  booksWithShelf: PropTypes.array.isRequired,
  shelfTitle: PropTypes.string.isRequired,
}

