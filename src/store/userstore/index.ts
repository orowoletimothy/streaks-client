import { create } from 'zustand';
import { persist, createJSONStorage} from 'zustand/middleware'

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: null;
  profilePicture: string;
  habitIds: Array<string>;
  taskIds: Array<string>;
  vacationMode: boolean;
  genStreakCount: number;
  userTimeZone: string;
}

interface UserState {
  user: null | User;
  setUser: (user: User) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (newUser: User) => set({user: newUser})
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => sessionStorage), 
    }
  )
)
export default useUserStore;