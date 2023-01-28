export default function SearchTextBox({
  placeholder = "Enter search text...",
  label = "Search",
  searchText,
  setSearchText,
}) {
  return (
    <div>
      Search:
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          placeholder={placeholder}
          aria-label={label}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    </div>
  );
}
