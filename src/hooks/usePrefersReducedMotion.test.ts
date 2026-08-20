import { renderHook, act } from "@testing-library/react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

function mockMatchMedia(initialMatches: boolean) {
  let changeListener: ((event: MediaQueryListEvent) => void) | undefined;

  const mql = {
    matches: initialMatches,
    media: "(prefers-reduced-motion: reduce)",
    addEventListener: (_: string, listener: (event: MediaQueryListEvent) => void) => {
      changeListener = listener;
    },
    removeEventListener: () => {
      changeListener = undefined;
    },
  } as unknown as MediaQueryList;

  window.matchMedia = jest.fn().mockReturnValue(mql);

  return {
    fireChange: (matches: boolean) => {
      mql.matches = matches;
      act(() => {
        changeListener?.({ matches } as MediaQueryListEvent);
      });
    },
  };
}

describe("usePrefersReducedMotion", () => {
  it("returns false when the user has no reduced-motion preference", () => {
    mockMatchMedia(false);
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);
  });

  it("returns true when the user prefers reduced motion", () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(true);
  });

  it("updates when the OS-level preference changes", () => {
    const { fireChange } = mockMatchMedia(false);
    const { result } = renderHook(() => usePrefersReducedMotion());

    expect(result.current).toBe(false);
    fireChange(true);
    expect(result.current).toBe(true);
  });
});
