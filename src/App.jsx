import { motion } from 'framer-motion'

import './index.css'

function App() {

  return (
    <>
      <div className='snap snap-y snap-mandatory h-screen overflow-y-scroll'>
        
        <div className="grid grid-cols-4 grid-rows-3 gap-12 p-12 snap-start h-screen bg-gradient-to-t from-gray-700 to-gray-900">
          <motion.div className="flex text-[120px] bg-gradient-to-r from-pink-500 to-indigo-800 text-transparent bg-clip-text justify-center items-center"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 4.5 }}
            >
            Seite 1
          </motion.div>
          <motion.div className="col-span-2 rounded-3xl bg-gradient-to-r from-pink-500 to-indigo-800 p-1"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 3.5 }}            
          >
             <div className="text-white text-3xl text-center h-full w-full bg-gray-800 rounded-3xl">
              DIV 1
             </div>
          </motion.div>

          <motion.div className="row-span-2 rounded-3xl bg-gradient-to-r from-pink-500 to-indigo-800 p-1"
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: 'tween', duration: 2.5 }}            
          >
             <div className="text-white text-3xl text-center h-full w-full bg-gray-800 rounded-3xl">
              DIV 2
             </div>
          </motion.div>

          <motion.div className="col-span-2 rounded-3xl bg-gradient-to-r from-pink-500 to-indigo-800 p-1"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 2.0 }}            
          >
             <div className="text-white text-3xl h-full w-full bg-gray-800 rounded-3xl text-center">
              DIV 3
             </div>
          </motion.div>

          <motion.div className="rounded-3xl bg-gradient-to-r from-pink-500 to-indigo-800 p-1"
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ type: 'tween', duration: 1.0 }}            
          >
             <div className="text-white text-3xl text-center h-full w-full bg-gray-800 rounded-3xl">
              DIV 4
             </div>
          </motion.div>

          <motion.div className="rounded-3xl bg-gradient-to-r from-pink-500 to-indigo-800 p-1"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 1.5 }}            
          >
             <div className="text-white text-3xl text-center h-full w-full bg-gray-800 rounded-3xl">
              DIV 5
             </div>
          </motion.div>

          <motion.div className="rounded-3xl bg-gradient-to-r from-pink-500 to-indigo-800 p-1"
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ type: 'tween', duration: 2.0 }}            
          >
             <div className="text-white text-3xl text-center h-full w-full bg-gray-800 rounded-3xl">
              DIV 6
             </div>
          </motion.div>

          <motion.div className="rounded-3xl bg-gradient-to-r from-pink-500 to-indigo-800 p-1"
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ type: 'tween', duration: 1.5 }}            
          >
             <div className="text-white text-3xl text-center h-full w-full bg-gray-800 rounded-3xl">
              DIV 7
             </div>
          </motion.div>

          <motion.div className="rounded-3xl bg-gradient-to-r from-pink-500 to-indigo-800 p-1"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 1.5 }}            
          >
             <div className="text-white text-3xl text-center h-full w-full bg-gray-800 rounded-3xl">
              DIV 8
             </div>
          </motion.div>

        </div>  

        <div className="snap-start h-screen flex items-center justify-center bg-gradient-to-t from-yellow-200 to-red-300">
          <h1 className="text-5xl italic underline text-center">
            Seite 2
          </h1>
        </div>

        <div className="snap-start h-screen flex items-center justify-center bg-gradient-to-t from-blue-300 to-pink-300">
          <h1 className="text-5xl italic underline text-center">
            Seite 3
          </h1>
        </div>
      </div>
    </>
  )
}

export default App
