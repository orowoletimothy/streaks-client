import clsx from "clsx"
import { FaFire } from "react-icons/fa"
import { ReactTyped } from "react-typed"
import useAppStore from "@/store/appstore"
import { useNavigate } from "react-router-dom"
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from "react"
import { XMarkIcon } from "@heroicons/react/20/solid";
import Divider from "@/shared/components/divider"

const Navbar = () => {
  const flexBetween = 'flex items-center justify-between'
  const { isRecognized } = useAppStore();
  const navigate = useNavigate();
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const handleLogin = () => {
    if(isRecognized){
      navigate('/dashboard')
    } else {
      navigate('/login')
    }
  }

  return (
    <div className={clsx(flexBetween, 'h-[52px] px-11 shadow-md z-50 w-full')}>

      {/* STREAKS & LOGO */}
      <div className={clsx(flexBetween, 'gap-[2px]')}>
        <FaFire className="text-[#5D737E] text-center w-[13px] h-[13px]" />
        <ReactTyped
          className="hover:animate-slide-right-once font-manrope text-base font-medium"
          strings={['streaks', 'streaks']}
          typeSpeed={100}
          backSpeed={60}
          loop
        />
      </div>

      {/* BUTTONS */}
      <div className="sm:flex hidden sm:justify-between sm:items-center sm:gap-2">
        <button
          onClick={handleLogin}
          className="font-worksns font-medium text-base p-2 hover:bg-[#EDEEED] rounded-md"
        >
          Login
        </button>

        <button onClick={() => navigate("/signup")} className={clsx('font-worksns text-white font-medium bg-black p-2 rounded-md hover:bg-black/85 active:bg-black/60 data-[active]:shadow-md transition-shadow ease-in')}>
          Signup
        </button>
      </div>
      
      {/* MENU ICONS */}
      { isSideBarOpen ? (
          <XMarkIcon onClick={() => setIsSideBarOpen(!isSideBarOpen)} className={clsx('block sm:hidden w-6 h-6 text-black hover:bg-[#f2f2f2] rounded-full hover:cursor-pointer p-1 box-content')} />
        ) : (
          <Bars3Icon onClick={() => setIsSideBarOpen(!isSideBarOpen)} className={clsx("block sm:hidden size-6 text-black hover:bg-[#f2f2f2] rounded-full hover:cursor-pointer p-1 box-content")} />
        )
      }

      {/* MENU */}
      {isSideBarOpen && (
        <div className={clsx('z-50 mt-16 mr-4 px-2.5 flex sm:hidden flex-col justify-center w-24 min-h-24 fixed shadow-md top-0 right-0 rounded-md bg-white box-border transition duration-700 ease-in-out')}>
          <p
              onClick={handleLogin}
              className="text-center text-base font-worksns font-medium my-2 py-1 hover:cursor-pointer hover:rounded-xl hover:bg-slate-100"
            >
              Login
          </p>

          <Divider />

          <p
              className="text-center text-base font-worksns font-medium my-2 py-1 hover:cursor-pointer hover:rounded-xl hover:bg-slate-100"
              onClick={() => navigate("/signup")}
            >
              Signup
            </p>
        </div>
      )}
    </div>
  )
}

export default Navbar