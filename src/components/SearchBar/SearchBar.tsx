import { useState, ChangeEvent, FormEvent } from 'react';
import { MdSearch } from 'react-icons/md';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Please enter a search query.');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <div className={css.container}>
      <header>
        <form onSubmit={handleSubmit} className={css.form}>
          <button type='submit' className={css.searchBtn} aria-label='Search'>
            <MdSearch size={20} />
          </button>
          <input
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images'
            value={query}
            onChange={handleChange}
            className={css.input}
          />
        </form>
      </header>
    </div>
  );
}
