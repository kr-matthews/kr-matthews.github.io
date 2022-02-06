import { useReducer } from "react";

function reducer(state, action) {
  let newState = [...state];
  switch (action.type) {
    case "toggleOne":
      newState[action.index] = !state[action.index];
      break;
    case "toggleAll":
      return Array(state.length).fill(action.boolean);
    default:
      console.error("useCategoryFilter: areSlected reducer no match", action);
  }
  return newState;
}

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

  function areAnySelected(subset) {
    if (areAllOff) return true;
    return subset.some((category) => areSelected[categories.indexOf(category)]);
  }

  return { areSelected, areAllOff, toggleOne, allToSame, areAnySelected };
}
