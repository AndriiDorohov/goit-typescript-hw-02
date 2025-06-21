import { useState } from "react";
import { MdSearch } from "react-icons/md";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter a search query.");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <div className={css.container}>
      <header>
        <form onSubmit={handleSubmit} className={css.form}>
          <button type="submit" className={css.searchBtn} aria-label="Search">
            <MdSearch size={20} />
          </button>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images"
            value={query}
            onChange={handleChange}
            className={css.input}
          />
        </form>
      </header>
    </div>
  );
}
