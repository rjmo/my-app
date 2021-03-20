import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {books} from './books'
import Book from './Book';




//component.
function BookList() {
  return (
    <section style={{backgroundColor: 'whitesmoke'}}>
      {books.map((book) => {
        return (
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
  )
}



ReactDom.render(<BookList/>, document.getElementById('root'));


