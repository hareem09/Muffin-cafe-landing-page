import React from 'react'

function Home() {
  return (
    <>
    <main className='w-full h-screen bg-cyan-200'>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQBjeDuXs0MIUjWFuFcI4nmHxa4o0CNlT0g&s"className='w-full h-screen relative ' alt="" />
      <article className='absolute text-pink-300 top-70 left-8'>
       <h1 className='text-7xl w-5xl font-bold uppercase italic'>Want to enjoy delicious with your loved ones</h1>
       <h2 className='text-2xl'>Grab your order now</h2>
       <button>Order now</button>
      </article>
    </main>
    </>

  )
}

export default Home