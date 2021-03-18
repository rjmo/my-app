import React from 'react';
import ReactDom from 'react-dom';



//component.
function BookList() {
  return (
    <section>
     <Book/>
    </section>
  )
}

const Book = () => {
  return(
    <article>
      this is a book
    </article>
  )
}

ReactDom.render(<BookList/>, document.getElementById('root'));


