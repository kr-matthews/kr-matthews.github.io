import { useCallback, useMemo, useReducer } from "react";
import _ from "lodash";

function reducer(state, action) {
  let newState = [...state];
  switch (action.type) {
    case "toggleOne":
      newState[action.index] = !state[action.index];
      break;
    case "toggleAll":
      return Array(state.length).fill(action.boolean);
    default:
      console.error("useCategoryFilter: areSelected reducer no match", action);
  }
  return newState;
}

/** Sorts by usage. Ensure props don't change unnecessarily. */
export default function useCategoryFilter(categories = [], usages = []) {
  // get counts, then use that to sort initial array
  const counts = useMemo(
    () =>
      categories.map(
        (category) =>
          usages.filter((categories) => categories.includes(category)).length
      ),
    [categories, usages]
  );
  const sortedCategories = useMemo(
    () =>
      _.sortBy(categories, (category) => -counts[categories.indexOf(category)]),
    [categories, counts]
  );
  const sortedCounts = counts.sort((a, b) => b - a);

  const size = sortedCategories.length;
  const [areSelected, dispatch] = useReducer(reducer, Array(size).fill(false));
  const areAllOff = !areSelected.includes(true);

  function toggleOne(index) {
    dispatch({ type: "toggleOne", index });
  }

  function allToSame() {
    dispatch({ type: "toggleAll", boolean: areAllOff });
  }

  const areAnySelected = useCallback(
    (subset) =>
      areAllOff ||
      subset.some(
        (category) => areSelected[sortedCategories.indexOf(category)]
      ),
    [areAllOff, areSelected, sortedCategories]
  );

  return {
    sortedCategories,
    areSelected,
    areAllOff,
    counts: sortedCounts,
    toggleOne,
    allToSame,
    areAnySelected,
  };
}
