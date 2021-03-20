import React from 'react'

const Book = (props) => {
    const {img, title, author} = props
    const clickHandler = (e) => {
      console.log(e.target)
      alert('Hello World');
    }
    const complexExemple = (author) => {
      console.log(author)
    }
    return(
      <article className="card" >
        <div style={{color:'black'}}>
          <img src={img} alt="" />
          <h1 onClick={()=> console.log(title)}>{title}</h1>      
          <h2>{author}</h2>
          <button type="button" onClick={clickHandler}>reference exemple</button>
          <button type="button" onClick={() => complexExemple(author)}>more complex</button>
        </div>
      </article>
    )
  }
  
export default Book
