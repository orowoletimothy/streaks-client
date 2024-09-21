import Navbar from "./components/navbar"
import { useNavigate } from "react-router-dom"
import clsx from "clsx";
import { ListBulletIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { FaRegCalendarCheck } from "react-icons/fa6";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div id='container-div' className="flex box-border items-center flex-wrap flex-col overflow-x-hidden">
      <Navbar />
      {/* SUB CONTAINER DIV */}
      <div id='subcontainerdiv'className="bg-[#F9F9F9] flex flex-wrap flex-col items-center box-border overflow-x-hidden w-full min-h-[96vh]">
        {/* IMAGE DIV */}
        <div id="image-div" 
          className="w-4/5 h-[48.48vw] md:w-[54vw] md:h-[32.778vw] bg-[url(@/assets/background2.png)] bg-no-repeat rounded-xl bg-cover bg-center box-border flex flex-col justify-end mt-2"
        >

          {/* HERO TEXT AND BUTTON */}
          <div id="text-buttn-div" className="box-border text-left p-3 sm:p-6 md:p-7">
            <p className="text-white font-worksns font-medium text-[1.1rem] sm:text-[1.7rem] md:text-3xl">Get more done, stay focused.</p>
            <p className="text-[#1E1E1E] text-[0.7rem] sm:text-[0.93rem] md:text-[1.1rem] font-semibold font-worksns">Productivity and habit tracking, together at last!</p>
            <button
              onClick={() => navigate('/signup')}
              className={clsx('bg-black font-worksns text-white rounded-md text-[0.75rem] sm:text-[0.8rem] md:text-base px-2 py-1 hover:bg-black/90 active:shadow-lg')}
            >Get started</button>
          </div>
        </div>
        <p className="font-worksns font-bold my-[0.25rem]">Features</p>

        {/* FEATURES CONTAINER DIV */}
        <div id="features-container" className="flex gap-2.5 flex-col sm:flex-col md:flex-row px-4 box-border pb-4 max-w-[90vw]">
          {/* 1 */}
          <div className="bg-white rounded-md p-5 shadow transition transform hover:scale-110 hover:z-20 z-10 box-border">
            <ListBulletIcon className="bg-black rounded-sm text-white size-5" />
            <p className="font-worksns font-bold">
              To-Do List
            </p>
            <p className="font-manrope text-[0.85rem]">
              Organize your tasks with our to-do list. Prioritize and complete
              tasks efficiently.
            </p>
          </div>
          {/* 2 */}
          <div className="bg-white rounded-md p-5 shadow transition transform hover:scale-110 hover:z-20 z-10 box-border">
            <FaRegCalendarCheck className="size-5" />
            <p className="font-worksns font-bold">
              Habit Tracker
            </p>
            <p className="font-manrope text-[0.85rem]">
              Track and build habits that stick. Monitor your progress and stay
              motivated.
            </p>
          </div>
          {/* 3 */}
          <div className="bg-white rounded-md p-5 shadow transition transform hover:scale-110 hover:z-20 z-10 box-border">
            <ArrowPathIcon className="size-5" />
            <p className="font-worksns font-bold">
              Daily Planner
            </p>
            <p className="font-manrope text-[0.85rem]">
              Plan your day with ease. Ensure you never miss an important task
              or habit.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Home