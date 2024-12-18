import { useEffect, useState } from "react";
import Form from "../Components/Form";
import List from "../Components/List";
import { defaultBooks } from "../data";
import "../static/style.css";

export default function Main() {
  const [books, setBooks] = useState(defaultBooks);
  const [editBook, setEditBook] = useState({
    id: "",
    title: "",
    author: "",
    ganre: "",
  });

useEffect(()=>{
  const booksJSON = localStorage.getItem("books");
  
  if (booksJSON) {
    setBooks(JSON.parse(booksJSON));
  } 
},[])


  return (
    <div className="main">
      <Form
        books={books}
        setBooks={setBooks}
        editBook={editBook}
        setEditBook={setEditBook}
      />
      <List books={books} setBooks={setBooks} setEditBook={setEditBook} />
    </div>
  );
}
