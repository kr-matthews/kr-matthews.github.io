

function GallerySearchForm(props) {

  /* constants */
  const { placeholder, label, searchText, setSearchText } = props;

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
  )
}

export default GallerySearchForm;
