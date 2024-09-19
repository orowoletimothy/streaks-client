import { CurrentPage } from "@/shared/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  isRecognized: boolean;
  isSideBar: boolean;
  currentpage: CurrentPage;
  isCreateHabitOpen: boolean;
  isDiscardDialog: boolean;
  isNewHabit: boolean;
}

const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      isRecognized: false,
      isSideBar: false,
      currentpage: CurrentPage.Today,
      isCreateHabitOpen: false,
      isDiscardDialog: false,
      isNewHabit: false,
      setIsRecognized: () => set({isRecognized: !get().isRecognized }),
      setIsSideBar: () => set({isSideBar: !get().isSideBar }),
      currentPage: (newPage: CurrentPage) => set({currentpage: newPage}),
      setIsCreateHabitOpen: () => set({isCreateHabitOpen: !get().isCreateHabitOpen }),
      setIsDiscardDialog: () => set({isDiscardDialog: !get().isDiscardDialog }),
      setIsNewHabit: (flag: boolean) => set({isNewHabit: flag}),
    }),
    {name: 'app-states'}
  )
)

export default useAppStore;