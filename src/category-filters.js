

const filterCat = (cat, selectedCats) => {
  return (item) => {
    return (
      !Object.values(selectedCats).includes(true) ||
      item.[cat].filter((cat) => selectedCats[cat]).length > 0
    )
  }
}

function CategoryFilterButtons(props) {

  /* constants */
  const { filterTitle, allCats, selectedCats, setSelectedCats } = props;

  /* functions */
  const reset = (allCats, setSelectedCats) => {
    const selectedCats = {};
    allCats.map((cat) => selectedCats[cat] = false);
    setSelectedCats(selectedCats);
  }
  const toggle = (selectedCats, setSelectedCats, cat) => {
    setSelectedCats({...selectedCats, [cat] : !selectedCats[cat]});
  }

  return (
    <div>

      {filterTitle}:

      { /* the 'all' button, which resets the filters */ }
      <button
        type="reset"
        className={"cat-button all-cats" +
                  (Object.values(selectedCats).includes(true) ? "" : " active")}
        onClick={() => reset(allCats, setSelectedCats)}
      >
        All
      </button>

      { /* a button for each cat, which toggles that cat */
      /* has className active if it's selected */ }
      {allCats.map((cat) => {
        return (
          <button
            type="button"
            className={"cat-button" + (selectedCats[cat] ? " active" : "")}
            key={cat}
            onClick={() => toggle(selectedCats, setSelectedCats, cat)}
          >
            {cat}
          </button>
        )})
      }

    </div>
  )
}

export { filterCat };
export default CategoryFilterButtons;
