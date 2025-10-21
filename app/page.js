import Image from "next/image";


export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-[32px] items-center justify-center px-24 py-18">
        
        <h1 className="text-5xl font-bold text-center sm:text-left"> Welcome to CodingHunter</h1>
        <p className="text-lg text-center sm:text-left max-w-2xl">
          Your ultimate platform for coding challenges, tutorials, and resources to enhance your programming skills. Join our community of developers and start coding today!
        </p>
      </main>

    </>
  );
}
