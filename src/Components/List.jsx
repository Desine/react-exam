import { useState } from "react";

export default function List({ books, setBooks, setEditBook }) {
  const [ganre, setGanre] = useState("all");

  const deleteBook = (bookToDelete) => {
    setBooks(books.filter((b) => b.id !== bookToDelete.id));
  };

  return (
    <table>
      <tbody>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>author</th>
          <th>
            ganre:{" "}
            <select
              name="ganre"
              id="ganre"
              onChange={(e) => setGanre(e.target.value)}
            >
              {["all", ...new Set(books.map((b) => b.ganre))].map((g) => (
                <option value={g}>{g}</option>
              ))}
            </select>
          </th>
        </tr>
        {books
          .filter((b) => b.ganre === ganre || ganre === "all")
          .map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.ganre}</td>

              <button className="button info" onClick={() => setEditBook(b)}>
                Edit
              </button>

              <button className="button danger" onClick={() => deleteBook(b)}>
                Delele
              </button>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
