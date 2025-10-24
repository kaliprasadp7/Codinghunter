import Image from "next/image";
import Link from "next/link";
import blogData from '@/data/blogData.json';


export default function Home() {
  const postsToShow = blogData.slice(0, 3); // Show only the latest 3 posts
  return (
    <>
      <main className="flex flex-col gap-[32px] items-center justify-center px-24 py-18">
        
        <h1 className="text-5xl font-bold text-center sm:text-left"> Welcome to CodingHunter</h1>
        <p className="text-lg text-center sm:text-left max-w-2xl">
          Your ultimate platform for coding challenges, tutorials, and resources to enhance your programming skills. Join our community of developers and start coding today!
        </p>


        <h2 className="font-bold text-4xl py-12">Latest Posts</h2>
      <div className='grid grid-cols-3 gap-12 m-4'>
        {
        postsToShow.map((post) => (
        <div className="blogItem flex flex-col gap-4 p-8 shadow-xl rounded-lg border-2" key={post.id}>
        <h2 className='font-bold text-2xl'>{post.title}</h2>
        <p>{post.excerpt}</p>
        <div>
          <button type='button' className='bg-gray-800 text-white font-bold px-5 py-2.5 w-32 h-12 rounded-lg '><Link href={`/blog/${post.slug}`}>Read more</Link></button>
        </div>
      </div>
      ))}
      </div>
      </main>

    </>
  );
}
