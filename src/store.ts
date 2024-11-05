import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  deccrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment() {
    set((state) => ({ count: state.count + 1 }));
  },
  deccrement() {
    set((state) => ({ count: state.count - 1 }));
  },
}));
