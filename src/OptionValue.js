import React, { Component } from 'react'


class OptionValue extends Component {
	render () {
		return (
			<div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.bookInShelf.imageLinks.thumbnail}"` }}></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.bookInShelf.title}</div>
              <div className="book-authors">{this.props.bookInShelf.authors}</div>
            </div>
	    )
	}
}

export default OptionValue