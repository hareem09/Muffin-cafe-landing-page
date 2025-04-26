import React from 'react'

function Fries() {
    const fries=[{
        id:1,name:'Garlic Mayo Sauce Fries',price:'RS 380',img:'https://images.deliveryhero.io/image/fd-pk/Products/5813783.jpg??width=500'
    },{id:2,name:'Masala Fries Simple',price:'RS 380',img:'https://images.deliveryhero.io/image/fd-pk/Products/5813780.jpg??width=500'},
    {id:3,name:'Simple Fries',price:'RS 350',img:'https://images.deliveryhero.io/image/fd-pk/Products/5813781.jpg??width=500'},
{
    id:4,name:'BBQ Sauce Fries',price:'RS 450',img:'https://images.deliveryhero.io/image/fd-pk/Products/5813782.jpg??width=500'
},{
    id:5,name:'Loaded cheese fries',price:'RS 550',img:'https://images.deliveryhero.io/image/fd-pk/Products/56155516.jpg??width=500'
}]
  return (
   <>
   <main className='w-full flex gap-12 flex-wrap'>
   {fries.map((deal)=>(
        <div key={deal.id} className="card p-10 h-auto border-2 border-cyan-50 rounded mt-2 ml-4  w-1/5 bg-cyan-50 " name='item'>
         <img src={deal.img}  alt="" className='h-56' />
         <h1 className='capitalize font-bold pt-5'>{deal.name}</h1>
         <h1 className='font-bold pt-2 text-amber-500'>Rs{deal.price}</h1>
         {/* <button className='bg-pink-400 p-4 mt-2' onClick={() => addItems(deal)}>Add to Cart</button> */}
        </div>))}
   </main>
   </>
  )
}

export default Fries