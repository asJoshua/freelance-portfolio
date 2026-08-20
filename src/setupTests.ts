import { TextEncoder, TextDecoder } from "util";
import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";

// jsdom (as bundled with react-scripts' Jest version) doesn't expose these
// globals, but react-router-dom v7 needs them at import time.
if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === "undefined") {
  // @ts-expect-error -- Node's TextDecoder is a structural match for the DOM lib type.
  global.TextDecoder = TextDecoder;
}

expect.extend(toHaveNoViolations);

// jsdom has no matchMedia implementation at all. Default to "no preference"
// so components using it don't crash; tests that care override it per-case.
// A plain function (not jest.fn()) so CRA's resetMocks:true doesn't wipe it
// between tests.
if (typeof window.matchMedia !== "function") {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}

// jsdom also has no scrollIntoView implementation. Default to a no-op (a
// plain function, not jest.fn(), so resetMocks:true doesn't wipe it); tests
// asserting an actual scroll call still override it per-element.
if (typeof Element.prototype.scrollIntoView !== "function") {
  Element.prototype.scrollIntoView = () => {};
}
