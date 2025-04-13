function SearchBar({ search, setSearch }) {
    return (
      <input
        type="text"
        placeholder="Search by description or category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    );
  }
  
  export default SearchBar;
  