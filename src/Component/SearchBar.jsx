

function SearchBar({ setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search images by title..."
      onChange={e => setSearchTerm(e.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;
