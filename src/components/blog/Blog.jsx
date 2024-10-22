import PropTypes from 'prop-types';
import { BsBookmarksFill } from "react-icons/bs";


const Blog = ({ blogs }) => {
    const { id, cover, title, author_img, author, posted_date, reading_time, hashtags } = blogs;

    return (
        <div className='mb-5'>
            <div>
                <img className='w-full' src={cover} alt="" />
                <div className="flex justify-between py-3">
                    <div className="flex gap-4 items-center">
                        <img className="h-8" src={author_img} alt="" />
                        <div>
                            <h3 className='font-semibold'>{author}</h3> 
                            <small>{posted_date}</small>
                        </div>
                    </div>
                    <div className='  flex items-center gap-2'>
                        <span>{reading_time} min read</span> 
                        <button><BsBookmarksFill></BsBookmarksFill></button>
                    </div>
                </div> 
            </div>
            <h3 className='text-3xl'>{title}</h3>
            <p>
                {
                   hashtags.map((has, idx) => 
                       <span key={idx}>
                           <a href="#">  #{has} </a>
                       </span>
                   )
                }
            </p>
        </div>
    );
};

// PropTypes যাচাই করা
Blog.propTypes = {
    blogs: PropTypes.shape({
        id: PropTypes.number.isRequired,
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author_img: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        posted_date: PropTypes.string.isRequired,
        reading_time: PropTypes.number.isRequired,
        hashtags: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default Blog;
