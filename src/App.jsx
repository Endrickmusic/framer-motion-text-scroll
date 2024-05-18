import './index.css'

function App() {

  return (
    <>
      <div className='snap snap-y snap-mandatory h-screen overflow-y-scroll'>
        <div className="snap-start h-screen flex items-center justify-center bg-gradient-to-t from-gray-300 to-gray-500">
          <h1 className="text-5xl italic underline text-center">
            Seite 1
          </h1>
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
