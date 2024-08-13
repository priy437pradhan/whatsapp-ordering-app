

import create from 'zustand';

const useJewelleryStore = create((set) => ({
  suggestions: [],
  setSuggestions: (filteredItems) => set({ suggestions: filteredItems }),
}));

export default useJewelleryStore;
