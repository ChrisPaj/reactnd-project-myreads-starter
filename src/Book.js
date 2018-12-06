import React from "react";
import PropTypes from 'prop-types'
import "./App.css";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: ""
    };
  }

  componentDidMount() {
    if (this.props.book.shelf) {
      console.log("this books shelf: " + this.props.book.shelf);
      this.setState({ shelf: this.props.book.shelf });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.shelf !== prevState.shelf) {
      this.props.changeBookShelf(this.props.book, this.state.shelf);
    }
  }

  setBookState = e => {
    this.setState({ shelf: e.target.value });
  };

  setSelectOptionValue = () => {
    //console.log("booksWithShelf: " + JSON.stringify(this.props.booksWithShelf))
    var isBooksShelfSet = this.props.booksWithShelf.find(
      book => book.id === this.props.book.id
    );
    if (isBooksShelfSet) {
      console.log("BookOnShelf: " + isBooksShelfSet.title + " Bookshelf: " + isBooksShelfSet.shelf)
      return isBooksShelfSet.shelf;
      
    } else {
      console.log("NotBookOnShelf: " + this.props.book.title)
      return "none";
    }
  };

  render() {
    const { book } = this.props;
   console.log(this.props.book);
    var url = book.imageLinks ? book.imageLinks.thumbnail : ""
    
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: "url(" + url + ")"
              }}

            />
            <div className="book-shelf-changer">
              <select
                onChange={this.setBookState}
                defaultValue={this.setSelectOptionValue()}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    );
  }
}

export default Book;

Book.propTypes = {
  changeBookShelf: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  booksWithShelf: PropTypes.array.isRequired,
}
