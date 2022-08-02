import { renderHook, act } from "@testing-library/react-hooks";
import { useMovie } from "./useMovie";

describe("useMovie hook", () => {
  const basicMovie = {
    id: "1",
    title: "Movie name",
  };
  it("should add select movie", () => {
    const { result } = renderHook(() => useMovie());
    act(() => {
      result.current.selectMovie(basicMovie);
    });
    expect(result.current.selectedMovies.length).toBe(1);
  });
});
