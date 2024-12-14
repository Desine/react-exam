import { useState } from "react";
import Form from "../Components/Form";
import List from "../Components/List";
import { titles } from "../data";
import '../static/style.css'

export default function Main () {
  const [books, setBooks] = useState(titles);
  const [editBook, setEditBook] = useState({
    id:'',
    title:'',
    author:'',
    ganre: "",
  });

  return (
    <div className="main">
      <Form books={books} setBooks={setBooks} editBook={editBook} setEditBook={setEditBook} />
      <List books={books} setBooks={setBooks} setEditBook={setEditBook}/>
    </div>
  );
}
