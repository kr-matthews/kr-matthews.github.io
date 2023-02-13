import { useCallback, useReducer } from "react";

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

/** Ensure `categories` prop doesn't change unnecessarily. */
export default function useCategoryFilter(categories = []) {
  const size = categories.length;
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
      subset.some((category) => areSelected[categories.indexOf(category)]),
    [areAllOff, areSelected, categories]
  );

  return { areSelected, areAllOff, toggleOne, allToSame, areAnySelected };
}
