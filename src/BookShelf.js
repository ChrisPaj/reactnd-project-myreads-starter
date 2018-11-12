import React from "react";
import "./App.css";
import Book from './Book'

class BookShelf extends React.Component {
  render() {
	const  { bookList, sortOfShelf }  = this.props;
    console.log(bookList)
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{sortOfShelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.bookList.map((book, index) => {
              return (
                <Book key={index} book={book} /> 
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
