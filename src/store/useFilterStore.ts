import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IFilter {
  filter: string
  setFilter: (filter: string) => void
}

export const useFilter = create(
	devtools<IFilter>(set => ({
		filter: 'all',
		setFilter: (filter: string) => set({ filter })
	}))
);