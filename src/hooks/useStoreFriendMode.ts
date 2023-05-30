import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type state = {
  count: number;
  friendMode: boolean;
  setCount: () => void;
}

export const useStoreFriendMode = create<state>()(persist((set, get) => ({
  count: 0,
  friendMode: false,
  setCount: () => {
    const previousCount = get().count;
    if (previousCount < 11) set({count: previousCount + 1})
    if (previousCount === 10) set({friendMode: true})
  },
}), {name: 'psxxj-world-store'}));