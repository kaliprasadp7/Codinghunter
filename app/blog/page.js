import React from 'react'
import blogData from '@/data/blogData.json';
import Link from 'next/link';

const Blog = () => {
  return (
    <main className='min-h-screen grid grid-cols-3 gap-12 m-8'>
      { blogData.map((post) => (
        <div className="blogItem flex flex-col gap-4 p-8 shadow-xl rounded-lg border-2" key={post.id}>
        <h2 className='font-bold text-2xl'>{post.title}</h2>
        <p>{post.excerpt}</p>
        <div>
          <button type='button' className='bg-gray-800 text-white font-bold px-5 py-2.5 w-32 h-12 rounded-lg '><Link href={`/blog/${post.slug}`}>Read more</Link></button>
        </div>
      </div>
      ))}
      
      
    </main>
  )
}

export default Blog
