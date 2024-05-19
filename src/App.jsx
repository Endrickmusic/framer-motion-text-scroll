import { useRef, useEffect } from "react"
import { motion, useTransform, useScroll } from "framer-motion"

import "./index.css"

function App() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll(ref)
  const y = useTransform(scrollYProgress, [0, 1], [0, 2000])

  useEffect(() => {
    console.log(y)
  }, [y])

  return (
    <>
      <div className="relative snap snap-y snap-mandatory h-screen" ref={ref}>
        <motion.div
          className="absolute ml-[350px] mt-60 bg-blue-500 h-80 w-80 z-10"
          style={{ y }}
        ></motion.div>

        <div
          className="
          grid grid-cols-2 grid-rows-4 gap-12 p-8 snap-start h-screen 
          bg-gradient-to-t from-gray-300 to-gray-500
          sm:grid-cols-3 sm:p-10
          md:grid-cols-4 md:p-12
          lg:grid-cols-5 lg:pt-24 lg:pb-24
        "
          // ref={ref}
        >
          <motion.div
            className="
            z-20 text-8xl col-span-2 col-start-1 row-start-1 bg-gradient-to-r from-pink-500 to-indigo-800 text-transparent bg-clip-text
            sm:text-8xl sm:col-start-1 sm:col-end-4
            md:text-8xl md:col-start-2 md:col-span-2 md:col-end-5 
            lg:text-8xl lg:col-start-3 lg:col-span-2 lg:col-end-5"
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "tween", duration: 1.2 }}
          >
            Seite 1
          </motion.div>

          <motion.div
            className="
            z-20 col-span-1 row-start-2 row-end-2 col-start-1 rounded-3xl bg-gradient-to-r from-pink-500 to-indigo-800 p-1
            sm:row-span-3 sm:col-start-3 
            md:row-span-3 md:col-end-5 md:col-start-4
            lg:col-end-5 lg:col-span-1 lg:row-span-3
            "
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ type: "tween", duration: 1.5 }}
          >
            <div className="text-white text-3xl text-center h-full w-full bg-gray-800 rounded-3xl">
              DIV 1
            </div>
          </motion.div>

          <motion.div
            className="
            z-20 col-span-1 row-start-2 row-end-2 col-start-2 rounded-3xl bg-gradient-to-r from-pink-500 to-indigo-800 p-1
            sm:row-span-1 sm:col-start-1 sm:row-start-2 sm:col-span-2 
            md:row-span-1 md:col-start-1 md:row-start-1 md:col-span-1
            lg:col-start-2 lg:row-start-1 lg:row-span-1 lg:col-span-1
            "
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ type: "tween", duration: 1.5 }}
          >
            <div className="text-white text-3xl text-center h-full w-full bg-gray-800 rounded-3xl">
              DIV 2
            </div>
          </motion.div>

          <motion.div
            className="
            z-20 text-white text-xl col-span-2 col-start-1 row-start-3 text-justify
            sm:text-xl 
            md:text-3xl md:col-span-3 md:row-start-2
            lg:text-3xl lg:col-span-2 lg:col-start-2 lg:row-start-2
            "
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ type: "tween", duration: 1.5 }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue.
          </motion.div>
        </div>

        <div className="snap-start h-screen flex items-center justify-center bg-gradient-to-t from-yellow-200 to-red-300">
          <h1 className="text-5xl italic underline text-center">Seite 2</h1>
        </div>

        <div className="snap-start h-screen flex items-center justify-center bg-gradient-to-t from-blue-300 to-pink-300">
          <h1 className="text-5xl italic underline text-center">Seite 3</h1>
        </div>
      </div>
    </>
  )
}

export default App
