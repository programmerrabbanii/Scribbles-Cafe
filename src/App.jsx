import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import BookMarks from './components/bookMarks/BookMarks'
import Header from './components/header/Header'

function App() {
  const [book,setBook]=useState([])
  const [readTime,setReadTime]=useState(0)

  const handlerReadTime=(times)=>{
    const newRedingTime=readTime+times
    setReadTime(newRedingTime)
  }

  const handlerBook=(marks)=>{
    const newBook=[...book,marks]
    setBook(newBook)
  }
  return (
    <>
    <Header></Header>
    <div className='md: flex mt-5 w-11/12 mx-auto'>
      <Blogs handlerBook={handlerBook} handlerReadTime={handlerReadTime}></Blogs>
      <BookMarks book={book} readTime={readTime}></BookMarks>

    </div>
   
    </>
  )
}

export default App
