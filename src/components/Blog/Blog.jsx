import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog}) => {

    console.log(blog);

    return (
        <div className='m-2'>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src= {blog.cover}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{blog.title}</h2>
      <div className='flex items-center justify-between gap-5'>
        <p className='text-xl font-bold'>{blog.author}</p>
        <img className='w-16 rounded-full' src={blog.author_img} alt="" />
        <FaBookmark size={20}/>
      </div>
    <p>{blog.posted_date}</p>

      <div className='flex gap-5 border-4 border-blue-900 p-2 rounded-2xl'>
        {
          blog.hashtags.map(has => <p>{has}</p>)
        }
      </div>

    <div className="card-actions">
      <button className="btn btn-primary">Mark as read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;