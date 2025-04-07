import './App.css'
import Navber from './components/Navber/Navber'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'

function App() {

  const [bookmarked , setBookmarked] = useState([]);

  const handleBookMark = (blog) => {

   setBookmarked([...bookmarked , blog]);

  }

  // console.log(bookmarked);

  const [bookmarkedtime , setBookmarkedtime] = useState(0);

  const handleBookMarkTime = (time , id) => {

    setBookmarkedtime(bookmarkedtime + time);

    handleRemoveFromBookmark(id);
  }

  // console.log(bookmarkedtime);

  const handleRemoveFromBookmark = (id) => {

    const remainingBookmark = bookmarked.filter(mark => mark.id !== id)

    setBookmarked(remainingBookmark);

  }

  return (
    <>
     <Navber></Navber>

     <div className="main-container flex text-center">
      <div className="left-container w-[70%]">

          <Blogs handleBookMark = {handleBookMark} handleBookMarkTime = {handleBookMarkTime}></Blogs>
      </div>

      <div className="right-container w-[30%]">
        <h1>Reading time : {bookmarkedtime}</h1>  
        <h1>Bookmarked Count : {bookmarked.length}</h1>  


        {
          bookmarked.map(marked => <p key={marked.id} className='bg-amber-400 shadow-2xl border-2 border-amber-600 p-2 text-black rounded-xl mb-1'>{marked.title}</p>)
        }

      </div>
     </div>
    </>
  )
}

export default App
