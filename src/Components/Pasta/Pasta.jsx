import React from 'react'

function Pasta() {
  const pastas=[{
  id:'1',name:'Spaghetti Pasta',price:'Rs. 590',img:'https://images.deliveryhero.io/image/fd-pk/Products/2021773.jpg??width=500'
  },{
  id:'2',name:'Alfredo Pasta',price:'Rs. 660',img:'https://images.deliveryhero.io/image/fd-pk/Products/5813703.jpg??width=500'
  },{
  id:'3',name:'Special Pasta',price:'Rs. 700',img:'https://images.deliveryhero.io/image/fd-pk/Products/5813704.jpg??width=500'  
  },{
  id:'4',name:'Macaroni Pasta',price:'Rs. 590',img:'https://images.deliveryhero.io/image/fd-pk/Products/2021772.jpg??width=500'
  }]
  return (
    <>
    <main className='w-full  flex gap-24 flex-wrap'>
      {pastas.map((deal)=>(
        <div key={deal.id} className="card p-10 h-auto border-2 rounded border-cyan-50 mt-12 w-1/5 bg-cyan-50 " name='item'>
         <img src={deal.img} alt=""  className='h-56'  />
         <h1 className='capitalize font-bold pt-5'>
         {deal.name}
         </h1>
         <h1 className='font-bold pt-2 text-amber-500'>{deal.price}</h1>
        </div>
      ))}
    </main>
    </>
  )
}

export default Pasta