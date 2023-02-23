import { useCallback, useMemo, useReducer } from "react";

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

/** Ensure props don't change unnecessarily. */
export default function useCategoryFilter(categories = [], usages = []) {
  const size = categories.length;
  const [areSelected, dispatch] = useReducer(reducer, Array(size).fill(false));
  const areAllOff = !areSelected.includes(true);
  const counts = useMemo(
    () =>
      categories.map(
        (category) =>
          usages.filter((categories) => categories.includes(category)).length
      ),
    [categories, usages]
  );

  function toggleOne(index) {
    dispatch({ type: "toggleOne", index });
  }

  function allToSame() {
    dispatch({ type: "toggleAll", boolean: areAllOff });
  }

  const areAnySelected = useCallback(
    (subset) =>
      areAllOff ||
      subset.some((category) => areSelected[categories.indexOf(category)]),
    [areAllOff, areSelected, categories]
  );

  return {
    areSelected,
    areAllOff,
    counts,
    toggleOne,
    allToSame,
    areAnySelected,
  };
}
