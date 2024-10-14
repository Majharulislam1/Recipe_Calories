import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import OurRecipe from "./Components/OurRecipe"

 
 

function App() {
 

  return (
    <>
       <div className="w-5/6 mx-auto">
            <Navbar></Navbar>
            <Hero></Hero>
            <OurRecipe></OurRecipe>
       </div>
    </>
  )
}

export default App
