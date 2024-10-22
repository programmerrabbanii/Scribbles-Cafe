import './App.css'
import Blogs from './components/blogs/Blogs'
import BookMarks from './components/bookMarks/BookMarks'
import Header from './components/header/Header'

function App() {

  return (
    <>
    <Header></Header>
    <div className='md: flex mt-5 w-11/12 mx-auto'>
      <Blogs></Blogs>
      <BookMarks></BookMarks>

    </div>
   
    </>
  )
}

export default App
