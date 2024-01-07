import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
interface AppState {
  isDarkMode: boolean;
  setDarkMode: () => void;
}

const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        // ---------- Logic from here -----------------
        isDarkMode: false,
        setDarkMode: () =>
          set((state) => ({
            isDarkMode: !state.isDarkMode,
          })),
      }),
      { name: "DonoVista Store" }
    )
  )
);
