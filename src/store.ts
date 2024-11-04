import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  deccrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment() {
    set({ count: 1 });
  },
  deccrement() {
    set({ count: -1 });
  },
}));
