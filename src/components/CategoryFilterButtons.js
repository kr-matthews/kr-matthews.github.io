export default function CategoryFilterButtons({
  title = "Categories",
  categories = [],
  areSelected = [],
  clickACategoryHandler,
  isAllSelected,
  clickAllHandler,
}) {
  // an 'all' button, plus a button per category
  return (
    <div>
      {title}:
      <button
        type="reset"
        className={`cat-button all-cats${isAllSelected ? " active" : ""}`}
        onClick={clickAllHandler}
      >
        All
      </button>
      {categories.map((category, index) => {
        return (
          <button
            key={category}
            type="button"
            className={`cat-button${areSelected[index] ? " active" : ""}`}
            onClick={() => clickACategoryHandler(index)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
