import { act, renderHook } from "@testing-library/react";
import useCategoryFilter from "../useCategoryFilter";

const categories = ["Fruit", "Vegetable", "Dairy", "Nut"];
const usages = [
  ["Dairy", "Fruit"],
  [],
  ["Fruit", "Vegetable"],
  ["Fruit"],
  ["Dairy"],
];

let filter;

beforeEach(() => {
  const hook = renderHook(() => useCategoryFilter(categories, usages, true));
  filter = hook.result;
});

describe("hooks/useCategoryFilter", () => {
  describe("initial state returns", () => {
    test("expected properties", () => {
      expect(Object.keys(filter.current)).toEqual(
        expect.arrayContaining([
          "orderedCategories",
          "orderedCounts",
          "areSelected",
          "areAllOff",
          "toggleOne",
          "allToSame",
          "areAnySelected",
        ])
      );
    });

    test("categories in order", () => {
      expect(filter.current.orderedCategories).toEqual([
        "Fruit",
        "Dairy",
        "Vegetable",
        "Nut",
      ]);
    });

    test("counts in order", () => {
      expect(filter.current.orderedCounts).toEqual([3, 2, 1, 0]);
    });

    test("everything selected", () => {
      expect(filter.current.areSelected).toEqual([false, false, false, false]);
      expect(filter.current.areAllOff).toEqual(true);
    });

    test("functions", () => {
      expect(filter.current.toggleOne).toBeInstanceOf(Function);
      expect(filter.current.allToSame).toBeInstanceOf(Function);
      expect(filter.current.areAnySelected).toBeInstanceOf(Function);
    });
  });

  describe("can toggle categories", () => {
    test("toggle one on", () => {
      act(() => filter.current.toggleOne(1));
      expect(filter.current.orderedCategories).toEqual([
        "Fruit",
        "Dairy",
        "Vegetable",
        "Nut",
      ]);
      expect(filter.current.orderedCounts).toEqual([3, 2, 1, 0]);
      expect(filter.current.areSelected).toEqual([false, true, false, false]);
      expect(filter.current.areAllOff).toEqual(false);
    });

    test("toggle two on", () => {
      act(() => filter.current.toggleOne(1));
      act(() => filter.current.toggleOne(3));
      expect(filter.current.orderedCategories).toEqual([
        "Fruit",
        "Dairy",
        "Vegetable",
        "Nut",
      ]);
      expect(filter.current.orderedCounts).toEqual([3, 2, 1, 0]);
      expect(filter.current.areSelected).toEqual([false, true, false, true]);
      expect(filter.current.areAllOff).toEqual(false);
    });

    test("toggle one on and off", () => {
      act(() => filter.current.toggleOne(1));
      act(() => filter.current.toggleOne(1));
      expect(filter.current.orderedCategories).toEqual([
        "Fruit",
        "Dairy",
        "Vegetable",
        "Nut",
      ]);
      expect(filter.current.orderedCounts).toEqual([3, 2, 1, 0]);
      expect(filter.current.areSelected).toEqual([false, false, false, false]);
      expect(filter.current.areAllOff).toEqual(true);
    });

    test("toggle all", () => {
      act(() => filter.current.allToSame());
      expect(filter.current.orderedCategories).toEqual([
        "Fruit",
        "Dairy",
        "Vegetable",
        "Nut",
      ]);
      expect(filter.current.orderedCounts).toEqual([3, 2, 1, 0]);
      expect(filter.current.areSelected).toEqual([true, true, true, true]);
      expect(filter.current.areAllOff).toEqual(false);
    });

    test("toggle all twice", () => {
      act(() => filter.current.allToSame());
      act(() => filter.current.allToSame());
      expect(filter.current.orderedCategories).toEqual([
        "Fruit",
        "Dairy",
        "Vegetable",
        "Nut",
      ]);
      expect(filter.current.orderedCounts).toEqual([3, 2, 1, 0]);
      expect(filter.current.areSelected).toEqual([false, false, false, false]);
      expect(filter.current.areAllOff).toEqual(true);
    });

    test("toggle one on then toggle all", () => {
      act(() => filter.current.toggleOne(2));
      act(() => filter.current.allToSame());
      expect(filter.current.orderedCategories).toEqual([
        "Fruit",
        "Dairy",
        "Vegetable",
        "Nut",
      ]);
      expect(filter.current.orderedCounts).toEqual([3, 2, 1, 0]);
      expect(filter.current.areSelected).toEqual([false, false, false, false]);
      expect(filter.current.areAllOff).toEqual(true);
    });

    test("toggle all then toggle each off", () => {
      act(() => filter.current.allToSame());
      act(() => filter.current.toggleOne(0));
      act(() => filter.current.toggleOne(1));
      act(() => filter.current.toggleOne(2));
      act(() => filter.current.toggleOne(3));
      expect(filter.current.orderedCategories).toEqual([
        "Fruit",
        "Dairy",
        "Vegetable",
        "Nut",
      ]);
      expect(filter.current.orderedCounts).toEqual([3, 2, 1, 0]);
      expect(filter.current.areSelected).toEqual([false, false, false, false]);
      expect(filter.current.areAllOff).toEqual(true);
    });

    test("toggle each on", () => {
      act(() => filter.current.toggleOne(0));
      act(() => filter.current.toggleOne(1));
      act(() => filter.current.toggleOne(2));
      act(() => filter.current.toggleOne(3));
      expect(filter.current.orderedCategories).toEqual([
        "Fruit",
        "Dairy",
        "Vegetable",
        "Nut",
      ]);
      expect(filter.current.orderedCounts).toEqual([3, 2, 1, 0]);
      expect(filter.current.areSelected).toEqual([true, true, true, true]);
      expect(filter.current.areAllOff).toEqual(false);
    });
  });
});
