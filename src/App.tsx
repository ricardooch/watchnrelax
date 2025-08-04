import Component from "./components/Component"

function App() {
  

  return (
    <>
        <main className="h-screen bg-gradient-to-br from-blue-950 to-[#0e183d]">
            
            <section className="flex flex-col h-full w-full">
              <div className="flex w-full h-1/2">
                <Component />
                <Component />
              </div>
              <div className="flex w-full h-1/2">
              </div>
            </section>
        </main>
    </>
  )
}

export default App
