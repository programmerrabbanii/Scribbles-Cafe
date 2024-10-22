import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handlerBook,handlerReadTime}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('scribbles.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))

    },[])

    return (
        <div className="w-2/3">
           
            {
                blogs.map((blogs)=> <Blog key={blogs.id} blogs={blogs} handlerBook={handlerBook} handlerReadTime={handlerReadTime}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;