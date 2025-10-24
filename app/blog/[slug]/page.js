import React from 'react'
import blogData from '@/data/blogData.json';

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}


const slug = async ({params}) => {
  
  const {slug} = await params;
  const post = blogData.find((post) => post.slug === slug);
  
  if(!post){
    return <h1 className='text-3xl font-bold text-center mt-20'>Blog not found</h1>
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
      <p className="text-gray-500 mb-6">
        {post.date} • {post.author}
      </p>
      <p className="text-lg leading-relaxed">{post.content}</p>
    </div>
  )
}

export default slug
