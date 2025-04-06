import './App.css'
import Navber from './components/Navber/Navber'
import Blogs from './components/Blogs/Blogs'

function App() {

  return (
    <>
     <Navber></Navber>



     <div className="main-container flex text-center">
      <div className="left-container w-[70%]">

          <Blogs></Blogs>
      </div>

      <div className="right-container w-[30%]">
        <h1>Reading time : 0</h1>  
        <h1>Bookmarked Count : 0</h1>  
      </div>
     </div>
    </>
  )
}

export default App
