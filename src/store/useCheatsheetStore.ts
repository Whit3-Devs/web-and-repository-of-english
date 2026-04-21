import { create } from "zustand";

type FilterValue = string | string[] | undefined;

type CheatsheetState = {
  searchTerm: string;
  activeFilters: Record<string, FilterValue>;
  setSearchTerm: (value: string) => void;
  setFilter: (key: string, value: FilterValue) => void;
  clearFilters: () => void;
};

export const useCheatsheetStore = create<CheatsheetState>((set) => ({
  searchTerm: "",
  activeFilters: {},
  setSearchTerm: (value) => set({ searchTerm: value }),
  setFilter: (key, value) =>
    set((state) => ({
      activeFilters: {
        ...state.activeFilters,
        [key]: value
      }
    })),
  clearFilters: () => set({ activeFilters: {} })
}));

