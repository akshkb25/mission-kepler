import "@testing-library/jest-dom";

global.matchMedia = global.matchMedia || function(query: string) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated, but some code still uses it
      removeListener: jest.fn(), // Deprecated, but some code still uses it
      addEventListener: jest.fn(), // New standard method for event listeners
      removeEventListener: jest.fn(), // New standard method for event listeners
      dispatchEvent: jest.fn(), // Dispatches events to handlers
    };
  };