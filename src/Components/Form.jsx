import { useEffect, useState } from "react";

export default function Form({ books, setBooks, editBook, setEditBook }) {
  const [ganres, setGanres] = useState([]);

  useEffect(() => {
    setGanres([...new Set(books.map((b) => b.ganre))]);
  }, [books]);

  const form_onSubmit = (e) => {
    e.preventDefault();
    const newBookData = new FormData(e.target);
    const newBook = Object.fromEntries(newBookData.entries());

    const books_editing = books.filter((b) => b.id !== editBook.id);
    newBook.id = Math.max(...books.map((b) => b.id)) + 1;

    resetEditBook();
    setBooks([...books_editing, newBook]);
  };

  const resetEditBook = () => {
    setEditBook({
      id: "",
      title: "",
      author: "",
      ganre: "",
    });
  };

  return (
    <form action="" onSubmit={form_onSubmit}>
      <label for="title">Title</label>
      <br />
      <input
        name="id"
        id="id"
        value={editBook.id}
        onInput={() => {}}
        type="text"
        hidden
        pattern="[0-9]{1,}"
      />
      <input
        name="title"
        id="title"
        value={editBook.title}
        onInput={(e) => setEditBook({ ...editBook, title: e.target.value })}
        type="text"
        required
        pattern=".{5,}"
        title="You must follow the pattern: .{5,}"
      />
      <br />
      <label for="author">Author</label>
      <br />
      <input
        name="author"
        id="author"
        value={editBook.author}
        onInput={(e) => setEditBook({ ...editBook, author: e.target.value })}
        type="text"
        required
        pattern=".{5,}"
        title="You must follow the pattern: .{5,}"
      />
      <br />
      <label for="ganre">Ganre</label>
      <select name="ganre" id="ganre">
        <option value={editBook.ganre}>{editBook.ganre}</option>
        {ganres.map((g) => (
          <option value={g}>{g}</option>
        ))}
      </select>
      <br />
      <input
        type="text"
        value={editBook.ganre}
        onInput={(e) => {
          setEditBook({ ...editBook, ganre: e.target.value });
          document.getElementById("ganre").firstChild.selected = true;
        }}
      />
      <br />

      <input className="button" type="submit" value="Submit" />
      {editBook.id !== "" ? (
        <button className="button" onInput={resetEditBook}>
          Cancel
        </button>
      ) : (
        ""
      )}
    </form>
  );
}
