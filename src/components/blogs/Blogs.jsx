import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('scribbles.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))

    },[])

    return (
        <div className="w-2/3">
            <h3>Cafe Side {blogs.length}</h3>
            {
                blogs.map((blogs)=> <Blog key={blogs.id} blogs={blogs}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;