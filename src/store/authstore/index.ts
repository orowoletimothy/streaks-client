import { create } from "zustand";
import { combine } from "zustand/middleware";
import Cookies from "js-cookie";


const useAuthStore = create(combine({token: Cookies.get('token') || ''}, (set) => ({
  setToken: (t: string) => set(() => {
    Cookies.set('token', t, {expires: 30});
    return { token: t };
  })
})))

export default useAuthStore;