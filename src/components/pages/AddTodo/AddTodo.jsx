import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Navbar from '../../Navbar/Navbar'
import {addTodo} from '../../../feature/Todo/TodoSlice'
import {useDispatch} from 'react-redux'
import { useState } from 'react'


const AddTodo = () => {

  const dispatch = useDispatch();
  const [newTask,setnewTask] = useState("")
  

  const handleAddTask =()=>{
    dispatch(addTodo(newTask))
    setnewTask("");
  }

 
  return (
    <div>
      <Navbar />
      <div className="relative isolate overflow-hidden  py-16 sm:py-24 lg:py-32" style={{
        height : "100vh"
      }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 " style={{
            marginTop : "8rem"
          }}>
            <div className="max-w-xl lg:max-w-lg ">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Add Your Daily Tasks.</h2>
              <p className="mt-4 text-lg leading-8 text-black">
                Stay organized and boost your productivity with our intuitive to-do app. Easily add, manage, and complete your daily tasks. Take control of your schedule and accomplish more every day.
              </p>

              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="task-address" className="sr-only">
                  task address
                </label>
                <input
                  id="mytask"
                  value={newTask}
                  onChange={(e)=>setnewTask(e.target.value)}
                  type="task"
                  autoComplete="task"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your task"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              onClick={handleAddTask}
              >
                  Add My Task
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon className="h-6 w-6 text-black" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-black">Easy Task Management</dt>
                <dd className="mt-2 leading-7 text-black">
                  Effortlessly organize your tasks and boost your productivity. Our intuitive interface allows you to manage your to-dos with ease, helping you stay focused and on track.
                </dd>

              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon className="h-6 w-6 text-black" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-black">No Distractions</dt>
                <dd className="mt-2 leading-7 text-black">
                  Unlike other apps, we promise no spam and no unnecessary distractions. Focus solely on your tasks without interruptions. Your productivity is our priority.
                </dd>

              </div>
            </dl>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

    </div>
  )
}

export default AddTodo